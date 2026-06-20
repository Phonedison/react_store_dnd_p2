import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";
import { useType } from "../../../contexts";
import { getUsuarios } from "../../../services/usersStorage";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLogin } = useType();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState(null);

  const caminho = location.state?.from?.pathname || "/";

  const handleClearForm = () => {
    setUser("");
    setPassword("");
    setMensagem(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem(null);

    const validarUsuario = user.trim();
    const validarPassword = password.trim();

    if (!validarUsuario || !validarPassword) {
      setMensagem("Por favor, preencha todos os campos!");
      return;
    }

    const listaUsuarios = await getUsuarios();
    const usuarioValido = listaUsuarios.find(
      (usuario) =>
        usuario.login === validarUsuario &&
        usuario.password === validarPassword,
    );

    if (usuarioValido) {
      setLogin(usuarioValido);
      handleClearForm();
      navigate(caminho, { replace: true });
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
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

                <Form className="container" onSubmit={handleSubmit}>
                  <Div className="container-input">
                    <Input
                      name="text"
                      placeholder="login"
                      type="text"
                      value={user}
                      required
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </Div>

                  <Div className="container-input">
                    <Input
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Div>

                  <Div className="container-botoes">
                    <Button className="button confirm" type="submit">
                      Confirmar
                    </Button>
                    <Button
                      className="button cancel"
                      type="button"
                      onClick={handleClearForm}
                    >
                      Cancelar
                    </Button>
                  </Div>
                </Form>
                {mensagem && <Div className="erro-mensagem">{mensagem}</Div>}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};