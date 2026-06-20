import { Div } from "../../../components/Div";
import { Navbar } from "../../../components/Header";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import { useType } from "../../../contexts";
import { postUsuario } from "../../../services/usersStorage";

export const SignUp = () => {
  const navigate = useNavigate();
  const { setLogin } = useType();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensagem, setMensagem] = useState(null);

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setLoginInput("");
    setPassword("");
    setConfirmPassword("");
    setMensagem(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem(null);

    const nomeValido = name.trim();
    const emailValido = email.trim();
    const loginValido = login.trim();

    if (!nomeValido || !emailValido || !loginValido || !password || !confirmPassword) {
      setMensagem("Por favor, preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      setMensagem("As senhas não coincidem!");
      return;
    }

    try {
      const usuarioCriado = await postUsuario({
        nome: nomeValido,
        email: emailValido,
        login: loginValido,
        password,
      });

      // Loga automaticamente com o usuário recém-criado.
      // O UserContext mescla com qualquer perfil salvo no localStorage
      // para esse login (não deve existir nenhum ainda, mas mantém o padrão).
      setLogin(usuarioCriado);
      handleClearForm();
      navigate("/", { replace: true });
    } catch (error) {
      setMensagem(error.message);
    }
  };

  return (
    <>
      <title>D&D - Cadastro</title>
      <Navbar title={"Cadastro"} />

      <Div className="signUp-container">
        <Div className="cabecalho">
          <Div className="titulo-home">
            <h2>
              Crie sua conta e tenha acesso à todo o conteudo do nosso site!
            </h2>
          </Div>
        </Div>
        <Div className="borda-rabisco">
          <Div className="cartao sign">
            <Div className="cartao-interno">
              <Div className="cartao-frente">
                <Div className="titulo">Cadastro</Div>
                <Form className="container" onSubmit={handleSubmit}>
                  <Div className="container-input">
                    <Input
                      name="text"
                      placeholder="nome"
                      type="text"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Div>

                  <Div className="container-input">
                    <Input
                      name="text"
                      placeholder="e-mail"
                      type="text"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Div>

                  <Div className="container-input">
                    <Input
                      name="text"
                      placeholder="login"
                      type="text"
                      value={login}
                      required
                      onChange={(e) => setLoginInput(e.target.value)}
                    />
                  </Div>
                  <Div className="container-imput">
                    <Input
                      name="text"
                      placeholder="senha"
                      type="password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Div>
                  <Div className="container-imput">
                    <Input
                      name="password"
                      placeholder="confirmar senha"
                      type="password"
                      value={confirmPassword}
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
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