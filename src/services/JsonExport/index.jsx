import { useState } from "react";
import { Button } from "../../components/Button";

// transforma onjeto javascript em Json e um link de download
const gerarJsonUrl = (objeto) => {
  const dadosString = JSON.stringify(objeto, null, 2);
  const blob = new Blob([dadosString], { type: "application/json" });
  return URL.createObjectURL(blob);
};

/**
 * Método para gerar JSON de um elemento.
 * Ela permite carregar, atualizar campos, alterar objetos de forma aninhados e exportar o resultado.
 * * @hook UseElementJSON
 * @param {Object} [element={}] - O objeto inicial contendo os dados (ex: Monstro ou Jogador).
 * @returns {Object} Um objeto contendo o estado atual e as funções de manipulação.
 * @returns {Object} returns.dados - O estado atual dos dados.
 * @returns {Function} returns.carregar - Função para substituir/resetar os dados.
 * @returns {Function} returns.atualizar - Função para realizar um PATCH (atualização) de primeiro nível do objeto.
 * @returns {Function} returns.atualizarElemento - Função para realizar um PATCH em subObjetos.
 * @returns {Function} returns.exportar - Função para o download do arquivo .json atualizado.
 * * @example
 * const { dados, atualizar, exportar } = useFichaRpg({ name: "Goblin", hit_points: 7 });
 */
export const UseElementJSON = (element = {}) => {
  const [dados, setDados] = useState(element);

  /**
   * Substitui completamente o estado atual por um novo bloco de dados (PUT).
   * @param {Object} valores - O novo objeto completo que substituirá o anterior.
   */
  const carregar = (valores) => {
    setDados(valores);
  };

  /**
   * Atualiza propriedades parciais no primeiro nível do objeto (PATCH).
   * @param {Object} alteracao - Objeto contendo apenas as chaves que devem ser modificadas ou adicionadas.
   */
  const atualizar = (alteracao) => {
    setDados((atual) => ({
      ...atual,
      ...alteracao,
    }));
  };

  /**
   * Atualiza propriedades dentro de um subObjeto de forma segura (um PATCH profundo).
   * @param {string} elementoPrincipal - A chave do objeto pai (ex: 'abilities' ou 'info').
   * @param {Object} alteracao - As propriedades internas desse objeto pai que devem ser modificadas.
   */
  const atualizarElemento = (elementoPrincipal, alteracao) => {
    setDados((atual) => ({
      ...atual,
      [elementoPrincipal]: {
        ...atual[elementoPrincipal],
        ...alteracao,
      },
    }));
  };

  /**
   * Cria um link temporário de download do arquivo JSON.
   * @param {string} [nomeArquivo="arquivo"] - O nome do arquivo (ex:'arquivo'.json).
   */
  const exportar = (nomeArquivo = "arquivo") => {
    const url = gerarJsonUrl(dados);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${nomeArquivo}.json`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL();
  };

  return {
    dados,
    carregar,
    atualizar,
    atualizarElemento,
    exportar,
  };
};

/**
 * Botão para exportação direta do arquivo como JSON.
 * Use caso precise baixar o dado brutos da API.
 * * @component JSONExport
 * @param {Object} props - Propriedades do componente.
 * @param {Object|Array} props.element - O objeto ou conjunto de dados brutos que será exportado.
 * @param {string} [props.nomeArquivo="arquivo"] - O nome que o arquivo terá ao ser baixado (sem a extensão .json).
 * * @example
 * <JSONExport element={dadosDoMonstroVindoDaApi} nomeArquivo="ficha_dragao_azul" />
 */
export const JSONExport = ({ element, nomeArquivo = "arquivo" }) => {
  const handleDownload = () => {
    const url = gerarJsonUrl(element);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${nomeArquivo}.json`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button tipo={"jsonExport"} onClick={handleDownload}>
      {"Download"}
    </Button>
  );
};
