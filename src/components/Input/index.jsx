import { Div } from "../Div";

/**
 * Componente de Input estilizado e customizado.
 * * @component
 * @param {import("react").ComponentProps<"input">} props - Todas as propriedades nativas de um elemento HTML <input> (ex: type, placeholder, value, onChange).
 * * @example
 * // Exemplo de uso:
 * <Input type="password" placeholder="Digite sua senha" />
 */
export const Input = ({ value, onChange, ...props }) => (
  <input value={value} {...props} onChange={onChange} />
);

export const Pesquisa = ({ busca, handleBusca }) => (
  <Div className="busca-container" style={{ margin: "1rem 0" }}>
    <input
      type="text"
      className="input"
      placeholder="Buscar monstros..."
      value={busca}
      onChange={handleBusca}
      style={{
        width: "var(--input-width)",
        height: "var(--input-height)",
      }}
    />
  </Div>
);
