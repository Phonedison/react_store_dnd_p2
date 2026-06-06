import { useState } from "react";
import { Navigate } from "react-router";
import { ButtonComponents } from "../../../components/Button";
import { DivComponents } from "../../../components/Div";
import { FormComponents } from "../../../components/Form";
import { CardEnemy } from "../../../features/Moster/CardMonster";
import { useElementList } from "../../../services/dndAPI/ElementList";
import { BackgroundColorComponents } from "../../../styles/globalStyle";

export const MonstersPage = () => {
  const navigate = Navigate("/login");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 10;

  const handleClick = () => {
    navigate("/login");
  };
  /* puxando os dados do Monstro utilizando o Componente useElementList */
  const { dados, erro, loading } = useElementList(null, "/monsters");

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const monstrosDaPagina = dados.slice(indicePrimeiroItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(dados.length / itensPorPagina);

  return (
    <>
      <BackgroundColorComponents />
      <FormComponents>
        <DivComponents $name="DoodleHeaderTitle">
          {loading ? (
            ""
          ) : (
            <ButtonComponents tipo="return" onClick={handleClick}>
              Voltar
            </ButtonComponents>
          )}
          <DivComponents $name="DoodleTitle">
            <h1>Monstros D&D 5e</h1>
          </DivComponents>
          {loading ? (
            ""
          ) : (
            <DivComponents $name="DoodleButtonGroup">
              <ButtonComponents
                tipo="navigation"
                type="button"
                onClick={() => setPaginaAtual((prev) => prev - 1)}
                disabled={paginaAtual === 1}
              >
                Anterior
              </ButtonComponents>
              <span>
                Página {paginaAtual} de {totalPaginas}
              </span>
              <ButtonComponents
                tipo="navigation"
                type="button"
                onClick={() => setPaginaAtual((prev) => prev + 1)}
                disabled={paginaAtual === totalPaginas}
              >
                Próxima
              </ButtonComponents>
            </DivComponents>
          )}
        </DivComponents>
        {erro && <p>{erro}</p>}
        {loading ? (
          <>
            <h2>Loading...</h2>
          </>
        ) : (
          <DivComponents $name="DoodleLimit">
            <DivComponents $name="DoodleLine">
              {monstrosDaPagina.map((inimigo) => (
                <CardEnemy enemy={inimigo} />
              ))}
            </DivComponents>
          </DivComponents>
        )}
      </FormComponents>
    </>
  );
};
