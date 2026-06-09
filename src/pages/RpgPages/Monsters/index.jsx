import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { CardEnemy } from "../../../features/Moster/CardMonster";
import { useElementList } from "../../../services/CustomHooks";
import { JSONExport } from "../../../services/JsonExport";

export const MonstersPage = () => {
  const navigate = useNavigate();

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;

  const handleClick = () => {
    navigate("/login");
  };

  const { dados, erro, loading } = useElementList({
    element: "monsters",
    lang: "pt-BR",
  });

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const monstrosDaPagina =
    dados?.slice(indicePrimeiroItem, indiceUltimoItem) || [];
  const totalPaginas = Math.ceil((dados?.length || 0) / itensPorPagina);

  return (
    <>
      <Div className="container">
        <Div className="cabecalho">
          <Div className="titulo-cabecalho">
            {!loading && (
              <Button className="button return" onClick={handleClick}>
                Voltar
              </Button>
            )}

            <Div className="titulo">
              <h1>Monstros D&D 5e</h1>
            </Div>

            {!loading && (
              <Div className="container-botoes">
                <Button
                  className="button navigation"
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
                  className="button navigation"
                  type="button"
                  onClick={() => setPaginaAtual((prev) => prev + 1)}
                  disabled={paginaAtual === totalPaginas}
                >
                  Próxima
                </Button>

                <JSONExport element={monstrosDaPagina} nomeArquivo="monstros" />
              </Div>
            )}
          </Div>
        </Div>

        {erro && <p className="erro-mensagem">{erro}</p>}

        {loading ? (
          <Div className="titulo titulo-alternativo">
            <h2>Loading...</h2>
          </Div>
        ) : (
          <Div className="borda-rabisco em-linha">
            {monstrosDaPagina.map((inimigo) => (
              <CardEnemy key={inimigo.id} enemy={inimigo} />
            ))}
          </Div>
        )}
      </Div>
    </>
  );
};
