import { useNavigate } from "react-router";
import { ButtonComponents } from "../../../components/Button";
import { DivComponents } from "../../../components/Div";
import { FormComponents } from "../../../components/Form";
import { InputComponents } from "../../../components/Input";
import { BackgroundColorComponents } from "../../../styles/globalStyle";

export const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/monsters");
  };

  return (
    <>
      <BackgroundColorComponents />
      <title>Login</title>
      <DivComponents $name="DoodleWrapper">
        <DivComponents $name="DoodleCardScene">
          <DivComponents $name="DoodleCardInner">
            <DivComponents $name="DoodleCardFront">
              <DivComponents $name="DoodleTitle" className="doodle-title">
                Seja Bem vindo!
              </DivComponents>
              <FormComponents>
                <DivComponents $name="DoodleInputWrapper">
                  <InputComponents
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </DivComponents>
                <DivComponents $name="DoodleInputWrapper">
                  <InputComponents
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                </DivComponents>
                <DivComponents $name="DoodleButtonGroup">
                  <ButtonComponents tipo="confirm" onClick={handleClick}>
                    Confirmar
                  </ButtonComponents>
                  <ButtonComponents tipo="cancel">Cancelar</ButtonComponents>
                </DivComponents>
              </FormComponents>
            </DivComponents>
          </DivComponents>
        </DivComponents>
      </DivComponents>
    </>
  );
};
