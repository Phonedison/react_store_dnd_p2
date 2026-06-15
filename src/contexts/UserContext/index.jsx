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

// Tenta restaurar a sessão ao carregar o app
// Verifica se tem um login salvo e se tem perfil correspondente
const restaurarSessao = () => {
  const loginSalvo = localStorage.getItem(CHAVE_SESSAO);
  if (!loginSalvo) return null;

  const perfilSalvo = lerPerfil(loginSalvo);
  return perfilSalvo || null;
};

export const UserProvider = ({ children }) => {
  // useState com lazy init — tenta restaurar a sessão uma vez ao iniciar
  const [login, setLoginState] = useState(() => restaurarSessao());

  const setLogin = (usuarioDoJson) => {
    const dadosSalvos = lerPerfil(usuarioDoJson.login);
    const perfilFinal = dadosSalvos
      ? { ...usuarioDoJson, ...dadosSalvos }
      : usuarioDoJson;

    // Salva qual usuário está logado para restaurar depois
    localStorage.setItem(CHAVE_SESSAO, usuarioDoJson.login);
    setLoginState(perfilFinal);
  };

  const atualizarPerfil = (novosDados) => {
    const perfilAtualizado = { ...login, ...novosDados };
    setLoginState(perfilAtualizado);
    salvarPerfil(login.login, perfilAtualizado);
  };

  const sair = () => {
    // Remove só a sessão ativa — o perfil salvo continua para o próximo login
    localStorage.removeItem(CHAVE_SESSAO);
    setLoginState(null);
  };

  return (
    <UserContext.Provider value={{ login, setLogin, sair, atualizarPerfil }}>
      {children}
    </UserContext.Provider>
  );
};