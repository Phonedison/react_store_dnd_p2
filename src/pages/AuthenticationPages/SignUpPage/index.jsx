import { Div } from "../../../components/Div";
import { Navbar } from "../../../components/Header";
import { Form } from "../../../components/Form";
import { Input } from "../../../components/Input";
import { useState } from "react";
import { Button } from "../../../components/Button";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (password != confirmPassword) {
  }

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setLogin("");
    setPassword("");
    setConfirmPassword("");
    setMensagem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem(null);
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
                      onChange={(e) => setLogin(e.target.value)}
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
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};
