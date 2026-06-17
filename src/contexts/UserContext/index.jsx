import { useState } from "react";
import { UserContext } from "..";

const chaveStorage = (login) => `perfil_${login}`;
const CHAVE_SESSAO = "sessao_ativa";

const lerPerfil = (login) => {
  const salvo = localStorage.getItem(chaveStorage(login));
  return salvo ? JSON.parse(salvo) : null;
};

const salvarPerfil = (login, dados) => {
  localStorage.setItem(chaveStorage(login), JSON.stringify(dados));
};

const restaurarSessao = () => {
  const loginSalvo = localStorage.getItem(CHAVE_SESSAO);
  if (!loginSalvo) return null;

  const perfilSalvo = lerPerfil(loginSalvo);
  return perfilSalvo || null;
};

export const UserProvider = ({ children }) => {
  const [login, setLoginState] = useState(() => restaurarSessao());

  const setLogin = (usuarioDoJson) => {
    const dadosSalvos = lerPerfil(usuarioDoJson.login);
    const perfilFinal = dadosSalvos
      ? { ...usuarioDoJson, ...dadosSalvos }
      : usuarioDoJson;

    localStorage.setItem(CHAVE_SESSAO, usuarioDoJson.login);
    setLoginState(perfilFinal);
  };

  const atualizarPerfil = (novosDados) => {
    const perfilAtualizado = { ...login, ...novosDados };
    setLoginState(perfilAtualizado);
    salvarPerfil(login.login, perfilAtualizado);
  };

  const sair = () => {
    localStorage.removeItem(CHAVE_SESSAO);
    setLoginState(null);
  };

  return (
    <UserContext.Provider value={{ login, setLogin, sair, atualizarPerfil }}>
      {children}
    </UserContext.Provider>
  );
};
