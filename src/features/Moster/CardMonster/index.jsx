import { useEffect, useState } from "react";
import { DivComponents } from "../../../components/Div";
import { ImageComponents } from "../../../components/Img";

const imagem_padrao =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErdgbxMUdTJs1QVlGKym_uTNRaF_OQEk3XA&s";

export const CardEnemy = ({ enemy }) => {
  const [detailEnemy, setDetailEnemy] = useState(null);
  // const navigate = useNavigate();
  // const navigateToDetails = () => {
  //   navigate(enemy.index);
  // };

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co${enemy.url}`)
      .then((res) => res.json())
      .then((data) => setDetailEnemy(data))
      .catch((error) => console.error("Erro ao carregar detalhes", error));
  }, [enemy.url]);

  if (!detailEnemy) {
    return <DivComponents>Carregando dados de {enemy.$name}...</DivComponents>;
  }

  const urlImages = detailEnemy?.image
    ? `https://www.dnd5eapi.co${detailEnemy.image}`
    : imagem_padrao;

  return (
    <DivComponents $name="DoodleCardScene">
      <DivComponents $name="DoodleCardInner" key={detailEnemy.index} $scale>
        <DivComponents $name="DoodleCardFront">
          <DivComponents $name="DoodleTitle" className="doodle-title">
            {enemy.name}
          </DivComponents>
          <ImageComponents
            src={urlImages}
            alt={`imagem representativa de ${detailEnemy.name}`}
          />
        </DivComponents>
      </DivComponents>
    </DivComponents>
  );
};
