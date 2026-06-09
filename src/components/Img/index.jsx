/**
 * Componente de Imagem customizado com estrutura de cards sobrepostos.
 * * @component
 * @param {import("react").ComponentProps<"img">} props - Propriedades nativas da tag HTML <img> (ex: src, alt, width).
 * * @example
 * // Exemplo de uso:
 * <ImagePolaroid src="https://exemplo.com/foto.jpg" alt="Descrição da imagem" />
 */
export const ImagePolaroid = ({ ...props }) => (
  <div className="pilha-polaroid">
    <div className="polaroid">
      <div className="img-container">
        <img {...props} />
      </div>
    </div>
  </div>
);
