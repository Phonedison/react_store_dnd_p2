import { useState } from "react";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Navbar } from "../../../components/Header";
import { Pesquisa } from "../../../components/Input";
import { useType } from "../../../contexts";
import { CardEnemy } from "../../../features/Moster/CardMonster";
import { useElementList } from "../../../hooks";
import { Error404Page } from "../../AuthenticationPages/Error";

export const MonstersPage = () => {
  const { login } = useType();
  const [busca, setBusca] = useState("");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;

  const { dados, erro, loading } = useElementList({
    element: "monsters",
    lang: "pt-BR",
  });

  const itensFiltrados =
    dados?.filter((item) =>
      item.name.toLowerCase().includes(busca.toLowerCase()),
    ) || [];

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const monstrosDaPagina = itensFiltrados?.slice(
    indicePrimeiroItem,
    indiceUltimoItem,
  );

  const totalPaginas = Math.ceil((dados?.length || 0) / itensPorPagina);

  const handleBusca = (e) => {
    setBusca(e.target.value);
    setPaginaAtual(1);
  };

  return (
    <>
      {login.typePerfil === "mestre" ? (
        <>
          <Navbar title={"Monstros do D&D"} typePerfil="mestre" />

          <Div className="container">
            <Div className="cabecalho">
              <Div className="titulo-cabecalho">
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

                    {!loading && (
                      <Pesquisa busca={busca} handleBusca={handleBusca} />
                    )}
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
              <Div className="em-linha">
                {monstrosDaPagina.map((inimigo) => (
                  <CardEnemy key={inimigo.index} enemy={inimigo} />
                ))}
              </Div>
            )}
          </Div>
        </>
      ) : (
        <Error404Page />
      )}
    </>
  );
};
