import { useState } from "react";
import { Div } from "../../../components/Div";
import { useElementListImage } from "../../../hooks";

const PLACEHOLDER =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErdgbxMUdTJs1QVlGKym_uTNRaF_OQEk3XA&s";

// Componente interno que busca a imagem só do item já selecionado
// Reutiliza exatamente o mesmo hook que o CardEnemy usa
const ImagemOrbital = ({ item }) => {
  const [dados, erro, loading] = useElementListImage(item);

  if (loading) return <img src={PLACEHOLDER} alt="carregando" />;
  if (erro) return <img src={PLACEHOLDER} alt="erro" />;

  return (
    <img
      src={dados?.imageUrl || PLACEHOLDER}
      alt={item?.name}
      onError={(e) => {
        e.target.src = PLACEHOLDER;
      }}
    />
  );
};

export const OrbitalSeletor = ({
  itemSelecionado,
  label,
  listaItens,
  aoSelecionar,
  loading,
}) => {
  const [listaAberta, setListaAberta] = useState(false);

  const handleAbrirLista = () => setListaAberta(true);
  const handleFecharLista = () => setListaAberta(false);

  const handleEscolherItem = (item) => {
    aoSelecionar(item);
    setListaAberta(false);
  };

  return (
    <>
      <Div className="item-orbital-container" onClick={handleAbrirLista}>
        <Div className="item-orbital">
          {/* Se tem item selecionado, busca a imagem real via hook
              Se não tem, mostra o placeholder estático */}
          {itemSelecionado ? (
            <ImagemOrbital item={itemSelecionado} />
          ) : (
            <img src={PLACEHOLDER} alt={label} />
          )}
        </Div>
        <p>{itemSelecionado?.name || label}</p>
      </Div>

      {listaAberta && (
        <>
          <Div className="orbital-lista-overlay" onClick={handleFecharLista} />

          <Div
            className="orbital-lista-box"
            onClick={(e) => e.stopPropagation()}
          >
            <Div className="titulo titulo-alternativo">
              <h2>Escolher {label}</h2>
            </Div>

            {loading ? (
              <Div className="titulo titulo-alternativo">
                <h3>Carregando...</h3>
              </Div>
            ) : (
              <Div className="orbital-lista-grid">
                {listaItens.map((item) => (
                  <Div
                    key={item.index}
                    className="orbital-lista-item"
                    onClick={() => handleEscolherItem(item)}
                  >
                    <span>{item.name}</span>
                  </Div>
                ))}
              </Div>
            )}
          </Div>
        </>
      )}
    </>
  );
};
