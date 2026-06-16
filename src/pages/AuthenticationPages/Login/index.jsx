import { useState } from "react";
import { useNavigate } from "react-router";
import listaUsuarios from "../../../assets/data/conta.json";
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

  const handleClearForm = () => {
    setUser("");
    setPassword("");
    setMensagem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem(null);

    const validarUsuario = user.trim();
    const validarPassword = password.trim();

    if (!validarUsuario || !validarPassword) {
      const msgAviso = "Por favor, preencha todos os campos!";
      setMensagem(msgAviso);
      alert(msgAviso);
      return;
    }

    const usuarioValido = listaUsuarios.find(
      (usuario) =>
        usuario.login === validarUsuario &&
        usuario.password === validarPassword,
    );

    if (usuarioValido) {
      const perfil = usuarioValido;

      setLogin(perfil);
      handleClearForm();

      if (perfil.typePerfil === "mestre") {
        navigate("/masterPage", { state: { typePerfil: perfil } });
      } else if (perfil.typePerfil === "jogador") {
        navigate("/usersPage", { state: { typePerfil: perfil } });
      }
    } else {
      const msgErro = "Usuário ou senha incorretos!";
      setMensagem(msgErro);
      alert(msgErro);
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
