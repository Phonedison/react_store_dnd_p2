import { useState } from "react";
import { Navigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Form } from "../../../components/Form";
import { CardEnemy } from "../../../features/Moster/CardMonster";
import { useElementList } from "../../../services/CustomHooks";
import { JSONExport } from "../../../services/JsonExport";

export const MonstersPage = () => {
  const navigate = Navigate("/");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;

  const handleClick = () => {
    navigate("/login");
  };
  /* puxando os dados do Monstro utilizando o Componente useElementList */
  const { dados, erro, loading } = useElementList({
    element: "monsters",
    lang: "pt-BR",
  });

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const monstrosDaPagina = dados.slice(indicePrimeiroItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(dados.length / itensPorPagina);

  return (
    <>
      <Form>
        <Div $name="DoodleHeaderTitle">
          {loading ? (
            ""
          ) : (
            <Button tipo="return" onClick={handleClick}>
              Voltar
            </Button>
          )}
          <Div $name="DoodleTitle">
            <h1>Monstros D&D 5e</h1>
          </Div>
          {loading ? (
            ""
          ) : (
            <Div $name="DoodleButtonGroup">
              <Button
                tipo="navigation"
                type="button"
                onClick={() => setPaginaAtual((prev) => prev - 1)}
                disabled={paginaAtual === 1}
              >
                Anterior
              </Button>
              <span>
                Página {paginaAtual} de {totalPaginas}
              </span>
              <Button
                tipo="navigation"
                type="button"
                onClick={() => setPaginaAtual((prev) => prev + 1)}
                disabled={paginaAtual === totalPaginas}
              >
                Próxima
              </Button>
              {<JSONExport element={monstrosDaPagina} nomeArquivo="monstros" />}
              {/* teste da config de exportação*/}
            </Div>
          )}
        </Div>
        {erro && <p>{erro}</p>}
        {loading ? (
          <>
            <h2>Loading...</h2>
          </>
        ) : (
          <Div $name="DoodleLimit">
            <Div $name="DoodleLine">
              {monstrosDaPagina.map((inimigo) => (
                <CardEnemy key={inimigo.id} enemy={inimigo} />
              ))}
            </Div>
          </Div>
        )}
      </Form>
    </>
  );
};
