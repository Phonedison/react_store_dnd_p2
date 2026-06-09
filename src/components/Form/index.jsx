/**
 * Componente de Formulário Customizado.
 * * @component
 * @param {object} props - Propriedades do componente.
 * @param {import("react").ReactNode} props.children - Elementos internos do formulário (ex: inputs, botões, labels).
 * * @example
 * // Exemplo de uso:
 * <Form>
 * <input type="password" placeholder="Digite sua senha" />
 * </Form>
 */
export const Form = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);
