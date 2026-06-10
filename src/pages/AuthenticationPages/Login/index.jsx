import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/monsters");
  };

  const handleVerPerfil = (e) => {
    e.preventDefault();
    navigate("/usersPage");
  };

  return (
    <>
      <title>D&D - Login</title>

      <Div className="container">
        <Div className="borda-rabisco">
          <Div className="cartao">
            <Div className="cartao-interno">
              <Div className="cartao-frente">
                <Div className="titulo">Seja Bem vindo!</Div>

                <Form className="container">
                  <Div className="container-input">
                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </Div>

                  <Div className="container-input">
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      required
                    />
                  </Div>

                  <Div className="container-botoes">
                    <Button className="button confirm" onClick={handleClick}>
                      Confirmar
                    </Button>
                    <Button className="button cancel" type="button">
                      Cancelar
                    </Button>
                  </Div>
                  <Button
                    className="button navigation"
                    type="button"
                    onClick={handleVerPerfil}
                  >
                    Ver Perfil
                  </Button>
                </Form>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};
