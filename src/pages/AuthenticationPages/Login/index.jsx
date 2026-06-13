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

    const usuarioValido = usuarios.find(
      (usuario) =>
        usuario.login === validarUsuario &&
        usuario.password === validarPassword,
    );

    if (usuarioValido) {
      setLogin(usuarioValido.typePerfil);
      handleClearForm();
      console.log(usuarioValido);

      let rotaDestino = "";
      if (usuarioValido.typePerfil === "mestre") rotaDestino = "/monsters";
      if (usuarioValido.typePerfil === "jogador") rotaDestino = "/usersPage";

      navigate(rotaDestino, {
        state: { typePerfil: usuarioValido.typePerfil },
      });
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
