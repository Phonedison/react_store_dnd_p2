import { Form } from "./styles";

/**
 * Componente de Formulário Customizado.
 * * @component
 * @param {object} props - Propriedades do componente.
 * @param {import("react").ReactNode} props.children - Elementos internos do formulário (ex: inputs, botões, labels).
 * * @example
 * // Exemplo de uso:
 * <FormComponents>
 * <input type="password" placeholder="Digite sua senha" />
 * </FormComponents>
 */
export const FormComponents = ({ children }) => <Form>{children}</Form>;
