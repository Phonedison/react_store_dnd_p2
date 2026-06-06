import { Div, Img } from "./styles";

/**
 * Componente de Imagem customizado com estrutura de cards sobrepostos.
 * * @component
 * @param {import("react").ComponentProps<"img">} props - Propriedades nativas da tag HTML <img> (ex: src, alt, width).
 * * @example
 * // Exemplo de uso:
 * <ImageComponents src="https://exemplo.com/foto.jpg" alt="Descrição da imagem" />
 */
export const ImageComponents = ({ ...props }) => (
  <Div $name="DivStack">
    <Div $name="DivCard">
      <Div $name="DivImage">
        <Img {...props} />
      </Div>
    </Div>
  </Div>
);
