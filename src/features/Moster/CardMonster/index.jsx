import { Div } from "../../../components/Div";
import { ImagePolaroid } from "../../../components/Img";
import { useElementListImage } from "../../../services/CustomHooks";

const imagem_padrao =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErdgbxMUdTJs1QVlGKym_uTNRaF_OQEk3XA&s";

export const CardEnemy = ({ enemy }) => {
  // const navigate = useNavigate();
  // const navigateToDetails = () => {
  //   navigate(enemy.index);
  // };

  const [object, erro, loading] = useElementListImage(enemy);
  console.log(`Dados do monstro ${enemy.name}:`, object);

  if (loading) {
    return <Div>Carregando dados de {enemy.name}...</Div>;
  }

  if (erro) {
    return <Div>Erro ao carregar imagem de {enemy.name}</Div>;
  }

  const urlImages = object?.imageUrl ? object.imageUrl : imagem_padrao;

  return (
    <Div $name="DoodleCardScene">
      <Div $name="DoodleCardInner" $scale>
        <Div $name="DoodleCardFront">
          <Div $name="DoodleTitle" className="doodle-title">
            {enemy.name}
          </Div>
          <ImagePolaroid
            src={urlImages}
            alt={`imagem representativa de ${enemy.name}`}
            onError={(error) => {
              error.target.src = imagem_padrao;
            }}
          />
        </Div>
      </Div>
    </Div>
  );
};
