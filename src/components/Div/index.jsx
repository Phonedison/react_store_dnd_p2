import { Div } from "./styles";

/**
 * Componente Div Customizado.
 * * @component
 * @param {Object} props - Propriedades do componentes.
 * @param {React.ReactNode} children - O conteúdo interno da Div. (ex: <p><button>Confirmar</button></p>)
 * @param {'DoodleWrapper' | 'DoodleLine' | 'DoodleLimit'|'DoodleHeader' | '...'} props.$name - O tipo de estilização/variação(ex: $name="DoodleInputWrapper")
 * @param {React.DivHTMLAttributes<HTMLDivElement} props.{...props} - Qualquer outra propriedade nativa de uma Div(ex:onFocus)
 *
 * * @example
 *  // Exemplo de uso:
 * <DivComponents $name="DoodleTitle" className="doodle-title">Welcome!</DivComponents>
 **/
export const DivComponents = ({ children, ...props }) => (
  <Div {...props}>{children}</Div>
);
