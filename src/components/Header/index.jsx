import { useNavigate } from "react-router";
import { Div } from "../../components//Div";
import { Button } from "../../components/Button";
import { useType } from "../../contexts";

export const Navbar = ({ title = null }) => {
  const navigate = useNavigate();
  const { login, sair } = useType();

  const handleVoltar = () => {
    sair();
    navigate("/");
  };

  const handleInicio = () => {
    navigate("/");
  };

  if (!login) {
    return (
      <div>
        <nav className="navbar">
          <Div className="navbar-container">
            <Div className="titulo-cabecalho">
              <Div className="titulo" onClick={handleVoltar}>
                D&D_Wiki
              </Div>
            </Div>
          </Div>
        </nav>
      </div>
    );
  }

  const handlePerfil = () => {
    navigate("/usersPage");
  };

  const handleMonster = () => {
    navigate("/monsters");
  };

  const handleMesa = () => {
    navigate("/mesa");
  };

  const handleItem = () => {
    navigate("/items");
  };

  return (
    <nav className="navbar">
      <Div className="navbar-container">
        <Div className="titulo-cabecalho">
          <Div className="titulo" onClick={handleInicio}>
            D&D_Wiki
          </Div>
        </Div>

        {title && (
          <Div className="container-title-page">
            <h4>{title}</h4>
          </Div>
        )}

        {login.typePerfil === "jogador" && (
          <Div className="container-botoes">
            <Button className="button navigation" onClick={handleItem}>
              Itens
            </Button>
            <Button className="button navigation" onClick={handlePerfil}>
              Perfil
            </Button>
          </Div>
        )}

        {login.typePerfil === "mestre" && (
          <Div className="container-botoes">
            <Button className="button navigation" onClick={handleMesa}>
              Mesas
            </Button>
            <Button className="button navigation" onClick={handleMonster}>
              Monstros
            </Button>
            <Button className="button navigation" onClick={handleItem}>
              Itens
            </Button>
            <Button className="button navigation" onClick={handlePerfil}>
              Fichas
            </Button>
          </Div>
        )}

        <Div className="container-botoes">
          <Button className="button cancel" onClick={handleVoltar}>
            SAIR
          </Button>
        </Div>
      </Div>
    </nav>
  );
};
