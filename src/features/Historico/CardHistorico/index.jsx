import { Div } from "../../../components/Div";

const statusLabel = {
  "em-andamento": "Em Andamento",
  "concluida": "Concluída",
};

export const CardHistorico = ({ titulo, personagem, status }) => (
  <Div className="historico-card">
    <Div>
      <h3>{titulo}</h3>
      <p>Personagem: {personagem}</p>
    </Div>
    <Div className={`status-tag ${status}`}>
      {statusLabel[status] || status}
    </Div>
  </Div>
);