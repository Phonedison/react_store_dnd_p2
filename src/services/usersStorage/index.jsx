import contaInicial from "../../assets/data/conta.json";

const CHAVE_USUARIOS_CADASTRADOS = "usuarios_cadastrados";

const lerCadastrados = () => {
  const salvos = localStorage.getItem(CHAVE_USUARIOS_CADASTRADOS);
  return salvos ? JSON.parse(salvos) : [];
};

const salvarCadastrados = (lista) => {
  localStorage.setItem(CHAVE_USUARIOS_CADASTRADOS, JSON.stringify(lista));
};

/**
 * Simula um "GET /usuarios": junta os usuários fixos do conta.json
 * com os que foram cadastrados em tempo de execução (localStorage).
 *
 * @returns {Promise<Array>} Lista completa de usuários.
 */
export const getUsuarios = () => {
  return Promise.resolve([...contaInicial, ...lerCadastrados()]);
};

/**
 * Simula um "POST /usuarios": cria um novo usuário "jogador" e persiste
 * no localStorage, para que ele exista entre recarregamentos da página.
 * * @description
 * Força `typePerfil: "jogador"` independente do que for passado, garantindo
 * que o cadastro público nunca crie um usuário "mestre". Rejeita a Promise
 * se o login já estiver em uso, simulando uma resposta de erro de uma API real.
 *
 * @param {{nome: string, email: string, login: string, password: string}} dados
 * @returns {Promise<Object>} O usuário criado.
 */
export const postUsuario = (dados) => {
  return getUsuarios().then((todos) => {
    const loginDuplicado = todos.some((u) => u.login === dados.login);

    if (loginDuplicado) {
      return Promise.reject(new Error("Esse login já está em uso."));
    }

    const novoUsuario = {
      ...dados,
      typePerfil: "jogador",
      aventuras: [],
    };

    const cadastrados = lerCadastrados();
    salvarCadastrados([...cadastrados, novoUsuario]);

    return novoUsuario;
  });
};