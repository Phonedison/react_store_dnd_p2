import { useState } from "react";
import { Div } from "../../../components/Div";
import { useElementList } from "../../../hooks";

export const CardItem = ({ item }) => {
  const [verso, setVerso] = useState(false);

  const { dados, loading, erro } = useElementList({
    element: `equipment/${item.index}`,
  });

  if (loading) {
    return (
      <Div className="titulo-alternativo">Carregando {item.name}...</Div>
    );
  }

  if (erro) {
    return <Div className="titulo-alternativo">Erro em {item.name}</Div>;
  }

  return (
    <Div className="cartao" onClick={() => setVerso(!verso)}>
      <Div className={`cartao-interno ${verso ? "virado" : ""}`}>
        <Div className="cartao-frente">
          <Div className="titulo">
            <h4 className="title-monster-card">{dados.name}</h4>
          </Div>
          <Div style={{ padding: "1rem", textAlign: "center" }}>
            <p style={{ fontSize: "1.2rem", margin: "0.5rem 0" }}>
              {dados.equipment_category?.name || "Item"}
            </p>
            {dados.cost && (
              <p style={{ fontSize: "1rem", color: "var(--ink)" }}>
                💰 {dados.cost.quantity} {dados.cost.unit}
              </p>
            )}
          </Div>
        </Div>

        <Div className="cartao-verso">
          <Div className="titulo">
            <h4 className="title-monster-card">{dados.name}</h4>
          </Div>
          <Div>
            <ul style={{ textAlign: "left", listStylePosition: "inside" }}>
              <li>
                <strong>Categoria:</strong>{" "}
                {dados.equipment_category?.name || "—"}
              </li>
              {dados.cost && (
                <li>
                  <strong>Custo:</strong> {dados.cost.quantity} {dados.cost.unit}
                </li>
              )}
              {dados.weight > 0 && (
                <li>
                  <strong>Peso:</strong> {dados.weight} lb
                </li>
              )}
              {dados.desc?.length > 0 && (
                <li>
                  <strong>Descrição:</strong> {dados.desc[0]}
                </li>
              )}
            </ul>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
