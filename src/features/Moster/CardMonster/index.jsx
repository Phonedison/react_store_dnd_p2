import { useState } from "react";
import { Div } from "../../../components/Div";
import { ImagePolaroid } from "../../../components/Img";
import { useElementListImage } from "../../../hooks";

const imagem_padrao =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErdgbxMUdTJs1QVlGKym_uTNRaF_OQEk3XA&s";

export const CardEnemy = ({ enemy }) => {
  const [object, erro, loading] = useElementListImage(enemy);
  const [imgSrc, setImgSrc] = useState(null);
  const [verso, setVerso] = useState(false);

  if (loading) {
    return <Div className="titulo-alternativo">Carregando {enemy.name}...</Div>;
  }

  if (erro) {
    return <Div className="titulo-alternativo">Erro em {enemy.name}</Div>;
  }

  const urlImages = object?.imageUrl ? object.imageUrl : imagem_padrao;

  const handleCardClick = () => {
    setVerso(!verso);
  };
  return (
    <Div className="cartao" onClick={handleCardClick}>
      <Div className={`cartao-interno ${verso ? "virado" : ""}`}>
        <Div className="cartao-frente">
          <Div className="titulo">
            <h4 className="title-monster-card">{enemy.name}</h4>
          </Div>

          <ImagePolaroid
            src={imgSrc || urlImages}
            alt={`imagem representativa de ${enemy.name}`}
            onError={() => {
              if (!imgSrc) setImgSrc(imagem_padrao);
            }}
          />
        </Div>
        <Div className="cartao-verso">
          <Div className="titulo">
            <h4 className="title-monster-card">{enemy.name}</h4>
          </Div>

          <Div>
            <ul>
              <li>
                <strong>Alinhamento:</strong> {object?.alignment || "N/A"}
              </li>
              <li>
                <strong>Classe de Armadura:</strong>{" "}
                {object?.armor_class?.[0]?.value || "N/A"}
              </li>
              <li>
                <strong>Pontos de Vida:</strong> {object?.hit_points || "N/A"}
              </li>
              <li>
                <strong>Idiomas:</strong> {object?.languages || "N/A"}
              </li>

              <li>
                <strong>XP:</strong> {object?.xp || "N/A"}
              </li>
            </ul>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
