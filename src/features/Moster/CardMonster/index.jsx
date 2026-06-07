import { DivComponents } from "../../../components/Div";
import { ImageComponents } from "../../../components/Img";
import { useElementListImage } from "../../../services/CustomHooks";

const imagem_padrao =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErdgbxMUdTJs1QVlGKym_uTNRaF_OQEk3XA&s";

export const CardEnemy = ({ enemy }) => {
  // const navigate = useNavigate();
  // const navigateToDetails = () => {
  //   navigate(enemy.index);
  // };

  const { object, erro, loading } = useElementListImage(enemy);

  if (!loading) {
    return <DivComponents>Carregando dados de {enemy.$name}...</DivComponents>;
  }

  if (erro) {
    return (
      <DivComponents>Erro ao carregar imagem de {enemy.name}</DivComponents>
    );
  }

  const urlImages = object?.image
    ? `https://www.dnd5eapi.co${object.image}`
    : imagem_padrao;

  return (
    <DivComponents $name="DoodleCardScene">
      <DivComponents $name="DoodleCardInner" key={object.index} $scale>
        <DivComponents $name="DoodleCardFront">
          <DivComponents $name="DoodleTitle" className="doodle-title">
            {enemy.name}
          </DivComponents>
          <ImageComponents
            src={urlImages}
            alt={`imagem representativa de ${object.name}`}
          />
        </DivComponents>
      </DivComponents>
    </DivComponents>
  );
};
