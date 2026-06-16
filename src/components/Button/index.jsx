/**
 * Componente Botão Customizado.
 * * @component
 * @param {Object} props - Propriedades do componentes.
 * @param {React.ReactNode} props.children - O conteúdo interno do botão. (ex: Confirmar)
 * @param {'confirm' | 'cancel'} props.tipo - O tipo de estilização/variação
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement} props.{...props} - Qualquer outra propriedade nativa de um botão(ex:onClick)
 *
 * * @example
 * // Exemplo de uso:
 * <Button tipo="primary" onClick={() => console.log('Clicou!')}>
 * Salvar
 * </Button>
 */

export const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);
