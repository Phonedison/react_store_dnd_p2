import { useState } from "react";
import { Div } from "../../../components/Div";
import { ImagePolaroid } from "../../../components/Img";
import { useElementListImage } from "../../../services/CustomHooks";

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
            <ul style={{ textAlign: "left", listStylePosition: "inside" }}>
              <li>
                <strong>Alinhamento:</strong> {enemy.alignment}
              </li>
              <li>
                <strong>Classe de Armadura:</strong> {enemy.armor_class}
              </li>
              <li>
                <strong>Pontos de Vida:</strong> {enemy.hit_points}
              </li>
              <li>
                <strong>Idiomas:</strong> {enemy.languages}
              </li>
              <li>
                <strong>Habilidades Especiais:</strong>{" "}
                {enemy.special_abilities}
              </li>
              <li>
                <strong>Conjurador:</strong> {enemy.spellcasting}
              </li>
              <li>
                <strong>Velocidade:</strong> {enemy.speed}
              </li>
              <li>
                <strong>XP:</strong> {enemy.xp}
              </li>
            </ul>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
