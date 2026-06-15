import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Navbar } from "../../../components/Header";
import { useType } from "../../../contexts";
import { CardEnemy } from "../../../features/Moster/CardMonster";
import { useElementList } from "../../../hooks";
import { JSONExport } from "../../../services/JsonExport";

export const MonstersPage = () => {
  const navigate = useNavigate();
  const { login } = useType();

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
      {login.typePerfil === "mestre" ? (
        <>
          <Navbar title={"Monstros do D&D"} />

          <div className="container">
            <div className="cabecalho">
              <div className="titulo-cabecalho">
                {!loading && (
                  <Button className="button return" onClick={handleClick}>
                    Voltar
                  </Button>
                )}

                {!loading && (
                  <div className="container-botoes">
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

                    <JSONExport
                      element={monstrosDaPagina}
                      nomeArquivo="monstros"
                    />
                  </div>
                )}
              </div>
            </div>

            {erro && <p className="erro-mensagem">{erro}</p>}

            {loading ? (
              <div className="titulo titulo-alternativo">
                <h2>Loading...</h2>
              </div>
            ) : (
              <div className="em-linha">
                {monstrosDaPagina.map((inimigo) => (
                  <CardEnemy key={inimigo.index} enemy={inimigo} />
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};
