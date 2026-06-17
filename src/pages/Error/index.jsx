import { Navigate, Outlet, useLocation } from "react-router";
import { useType } from "../../../contexts";
import { Button } from "../components/Button";
import { Div } from "../components/Div";
import { Navbar } from "../components/Navbar";

export const Error404Page = () => {
  return (
    <Div className="error-container">
      <Navbar title="Caminho Bloqueado" />
      <Div className="error-card">
        <Div className="titulo">ERRO 404</Div>
        <Div className="quote-box">
          "Suas habilidades de percepção falharam. Este lugar não consta nos
          mapas conhecidos ou você não possui as runas necessárias para
          destrancá-lo."
        </Div>
        <Div className="badge">Teste de Resistência Contra Magia Falhou</Div>
        <Button
          className="button cancel"
          onClick={() => (window.location.href = "/")}
        >
          Voltar para a Taverna (Início)
        </Button>
      </Div>
    </Div>
  );
};

export const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { login } = useType();
  const location = useLocation();

  if (!login) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(login.typePerfil)) {
    return <Error404Page />;
  }

  return <Outlet />;
};
