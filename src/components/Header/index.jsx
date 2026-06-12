import { useNavigate } from "react-router";
import { useType } from "../../contexts";
import { Button } from "../Button";
import { Div } from "../Div";

export const Navbar = ({ title = null, typePerfil = null }) => {
  const navigate = useNavigate();
  const { login, sair } = useType();

  const handleVoltar = () => {
    sair();
    navigate("/login");
  };

  if (!login) {
    return (
      <div>
        <p>Você não está logado.</p>
        <button onClick={() => navigate("/")}>Ir para Login</button>
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

  return (
    <nav className="navbar">
      <Div className="navbar-container">
        <Div className="titulo-cabecalho">
          <Div className="titulo" onClick={handleVoltar}>
            D&D_Wiki
          </Div>
        </Div>

        {title && (
          <Div className="container-title-page">
            <h4>{title}</h4>
          </Div>
        )}

        {typePerfil === "jogador" && (
          <Div className="container-botoes">
            <Button className="button navigation" onClick={handlePerfil}>
              Perfil
            </Button>
          </Div>
        )}

        {typePerfil === "mestre" && (
          <Div className="container-botoes">
            <Button className="button navigation" onClick={handleMonster}>
              Monstros
            </Button>

            <Button className="button navigation" onClick={handleMesa}>
              Mesas
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
