import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";

export const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/monsters");
  };

  return (
    <>
      <title>D&D - Login</title>
      <Div className="container">
        <Div className="borda-rabisco">
          <Div className="cartao-frente">
            <Div className="titulo">Seja Bem vindo!</Div>
            <Form className="container">
              <Div className="container-input">
                <Input name="email" placeholder="Email" type="email" required />
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
                <Button className="button cancel">Cancelar</Button>
              </Div>
            </Form>
          </Div>
        </Div>
      </Div>
    </>
  );
};
