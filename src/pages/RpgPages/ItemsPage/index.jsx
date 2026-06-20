import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Navbar } from "../../../components/Header";
import { useType } from "../../../contexts";
import { CardItem } from "../../../features/Item/CardItem";
import { useElementList } from "../../../hooks";

export const ItemsPage = () => {
  const navigate = useNavigate();
  const { login } = useType();
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [busca, setBusca] = useState("");
  const itensPorPagina = 10;

  const { dados, erro, loading } = useElementList({
    element: "equipment",
    lang: "pt-BR",
  });

  const itensFiltrados =
    dados?.filter((item) =>
      item.name.toLowerCase().includes(busca.toLowerCase()),
    ) || [];

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const itensDaPagina = itensFiltrados.slice(
    indicePrimeiroItem,
    indiceUltimoItem,
  );
  const totalPaginas = Math.ceil(itensFiltrados.length / itensPorPagina);

  const handleBusca = (e) => {
    setBusca(e.target.value);
    setPaginaAtual(1);
  };

  return (
    <>
      <title>D&D - Itens</title>

      <Navbar title={"Itens do D&D"} />

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
                  Página {paginaAtual} de {totalPaginas || 1}
                </span>

                <Button
                  className="button navigation"
                  type="button"
                  onClick={() => setPaginaAtual((prev) => prev + 1)}
                  disabled={paginaAtual === totalPaginas || totalPaginas === 0}
                >
                  Próxima
                </Button>
              </Div>
            )}
          {!loading && (
            <Div className="busca-container" style={{ margin: "1rem 0" }}>
              <input
                type="text"
                className="input"
                placeholder="Buscar item..."
                value={busca}
                onChange={handleBusca}
                style={{
                  width: "var(--input-width)",
                  height: "var(--input-height)",
                }}
              />
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
            {itensDaPagina.map((item) => (
              <CardItem key={item.index} item={item} />
            ))}
          </Div>
        )}
      </Div>
    </>
  );
};
