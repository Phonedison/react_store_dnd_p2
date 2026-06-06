import { Button } from "./styles";

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
 * <ButtonComponents tipo="primary" onClick={() => console.log('Clicou!')}>
 * Salvar
 * </ButtonComponents>
 */

export const ButtonComponents = ({ children, tipo, ...props }) => (
  <Button $type={tipo} {...props}>
    {children}
  </Button>
);
