/**
 * Componente de Input estilizado e customizado.
 * * @component
 * @param {import("react").ComponentProps<"input">} props - Todas as propriedades nativas de um elemento HTML <input> (ex: type, placeholder, value, onChange).
 * * @example
 * // Exemplo de uso:
 * <Input type="password" placeholder="Digite sua senha" />
 */
export const Input = ({ ...props }) => <input {...props} />;
