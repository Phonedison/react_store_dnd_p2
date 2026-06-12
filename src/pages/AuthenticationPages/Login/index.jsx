import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";
import { useType } from "../../../contexts";

export const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useType();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState(null);

  // passando usuários para teste
  const usuarios = [
    { login: "mestre", password: "1234", typePerfil: "mestre" },
    { login: "jogador", password: "1234", typePerfil: "jogador" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setMensagem(null);

    const validarUsuario = user.trim();
    const validarPassword = password.trim();

    if (!validarUsuario || !validarPassword) {
      setMensagem("Por favor, preencha todos os campos!");
      return;
    }

    const isValid = usuarios.find(
      (usuario) => (usuario.login === user) & (usuario.password === password),
    );

    if (isValid) {
      setLogin(isValid.typePerfil);
      navigate("/monsters");
    } else {
      setMensagem("Usuário ou senha incorrétos!");
    }
    alert(mensagem);
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
                      name="text"
                      placeholder="login"
                      type="text"
                      required
                      onChange={(inputUser) => setUser(inputUser.target.value)}
                    />
                  </Div>

                  <Div className="container-input">
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      required
                      onChange={(inputPassword) =>
                        setPassword(inputPassword.target.value)
                      }
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
                </Form>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};
