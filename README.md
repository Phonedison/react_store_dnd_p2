# ⚔️ D&D Portal 

Aplicação web temática de **Dungeons & Dragons**, desenvolvida em **React** com **Vite**, como projeto em grupo do **Serratec**. A plataforma funciona como um portal de aventuras: permite criar fichas de personagem, consultar um bestiário e catálogo de itens via API oficial do D&D 5e, gerenciar perfil de jogador e acessar um dashboard exclusivo para o Mestre conduzir suas campanhas.

## 📱 Funcionalidades

- **Autenticação**: login e cadastro de usuários, com sessão persistida via `localStorage`. Todo novo cadastro é criado como perfil **jogador**.
- **Perfis diferenciados**: usuários do tipo **mestre** têm acesso a páginas exclusivas (Bestiário e Página do Mestre); usuários **jogador** têm acesso às demais funcionalidades.
- **Rotas protegidas**: páginas internas só são acessíveis após login (`ProtectedRoute`), redirecionando para a tela de login quando necessário.
- **Perfil do Aventureiro**: edição de nome, bio, nível, raça e classe; seleção de monstro de estimação e item mágico favorito (consultados na API); histórico de aventuras já vividas.
- **Bestiário** *(restrito ao mestre)*: listagem paginada de monstros do D&D 5e, com busca por nome.
- **Catálogo de itens**: listagem paginada de equipamentos do D&D 5e, com busca por nome.
- **Criação de ficha de personagem**: formulário completo com atributos (Força, Destreza, Constituição, Inteligência, Sabedoria, Carisma), cálculo automático de modificadores e pré-visualização da ficha criada.
- **Página do Mestre** *(restrito ao mestre)*: dashboard de campanha com resumo de jogadores, monstros, encontros e tesouros, ordem de iniciativa, monstro em destaque, gerador de encontros aleatórios, anotações de sessão (persistidas no perfil) e NPCs favoritos.
- **Exportação em JSON**: hook e componente reutilizáveis para exportar qualquer elemento (ficha, monstro, item) como arquivo `.json` para download.

## 🛠️ Tecnologias

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router 7](https://reactrouter.com/) — roteamento e rotas protegidas
- [Styled Components](https://styled-components.com/) — componentes estilizados (`Div`, `Button`, etc.)
- [Axios](https://axios-http.com/) — consumo de API
- [D&D 5e API](https://www.dnd5eapi.co/) — monstros, itens, raças e classes (com suporte a `pt-BR`)
- [ESLint](https://eslint.org/) — padronização de código

## 📂 Estrutura do projeto

```
react_store_dnd_p2/
├── index.html
├── src/
│   ├── App.jsx                       # Tela de login (rota raiz de autenticação)
│   ├── main.jsx                      # Bootstrap da aplicação, providers e router
│   ├── components/                   # Componentes genéricos e reutilizáveis
│   │   ├── Button/
│   │   ├── Div/                      # Wrapper estilizado de div
│   │   ├── Form/
│   │   ├── Header/                   # Navbar
│   │   ├── Img/                      # Imagem estilo polaroid
│   │   └── Input/                    # Inputs (incluindo busca)
│   ├── features/                     # Componentes específicos de domínio
│   │   ├── Historico/CardHistorico/  # Card de aventura no histórico do perfil
│   │   ├── Item/CardItem/            # Card de item do catálogo
│   │   ├── Moster/CardMonster/       # Card de monstro do bestiário
│   │   └── Perfil/
│   │       ├── ModalEdicao/          # Modal de edição de perfil
│   │       └── OrbitalSeletor/       # Seletor orbital (monstro/item favorito)
│   ├── contexts/
│   │   ├── index.jsx                 # Criação do contexto + hook useType
│   │   └── UserContext/              # Provider de autenticação/sessão/perfil
│   ├── hooks/
│   │   └── index.jsx                 # useElementList, useElementListImage
│   ├── pages/
│   │   ├── AuthenticationPages/
│   │   │   ├── Login/
│   │   │   ├── SignUpPage/
│   │   │   └── Error/                # Página 404 / acesso negado
│   │   ├── HomePage/                 # Portal inicial com navegação por cards
│   │   ├── UsersPage/                # Perfil do Aventureiro
│   │   └── RpgPages/
│   │       ├── ItemsPage/            # Catálogo de itens
│   │       ├── Monsters/             # Bestiário (somente mestre)
│   │       ├── TablePage/            # Dashboard do mestre (somente mestre)
│   │       └── CreateSheetPage/      # Criação de ficha de personagem
│   ├── services/
│   │   ├── dndAPI/                   # Instância Axios + getElements (D&D 5e API)
│   │   ├── usersStorage/             # Simulação de GET/POST de usuários (localStorage)
│   │   └── JsonExport/               # Hook UseElementJSON + componente JSONExport
│   ├── styles/                       # CSS global e por página
│   ├── utils/
│   │   └── routes/                   # Definição das rotas e ProtectedRoute
│   └── assets/                       # Imagens e dados estáticos (ex: contas de teste)
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

### Passos

```bash
# Clone o repositório
git clone https://github.com/Phonedison/react_store_dnd_p2.git

# Acesse a pasta do projeto
cd react_store_dnd_p2

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Outros scripts disponíveis:

```bash
npm run build     # Gera a build de produção
npm run preview   # Pré-visualiza a build de produção
npm run lint       # Roda o ESLint no projeto
```

## 🔑 Contas de teste

O projeto já vem com algumas contas fixas para teste (login / senha):

| Login | Senha | Perfil |
|---|---|---|
| `mestre` | `1234` | Mestre |
| `jogador1` | `1234` | Jogador |
| `jogador2` | `1234` | Jogador |

> Novas contas criadas pela tela de cadastro são sempre do tipo **jogador** e ficam salvas no `localStorage` do navegador.

## 🌐 API utilizada

O projeto consome a [D&D 5e API](https://www.dnd5eapi.co/), API pública e gratuita com dados oficiais do sistema Dungeons & Dragons 5ª edição, incluindo suporte à tradução para português (`pt-BR`) em vários endpoints (monstros, itens, raças e classes).

## 👥 Membros do grupo

| Nome | GitHub |
|---|---|
| Igor Brian | [@Bryanxrt](https://github.com/Bryanxrt) |
| João Vitor Clemente Ferreira | [@JClemente-web](https://github.com/JClemente-web) |
| João Pedro Motta | [@joaopedrobr3](https://github.com/joaopedrobr3) |
| Lucas Leal da Silva | [@Phonedison](https://github.com/Phonedison) |
| Matheus | [@zMatheus77](https://github.com/zMatheus77) |
| Yan Martins de Oliveira | [@YanYMO](https://github.com/YanYMO) |

## 🧩 Funções do grupo

| Nome | GitHub |
|---|---|
| Igor Brian | Criação e estruturação da página do Mestre |
| João Vitor Clemente Ferreira | Criação e estruturação da página de itens |
| João Pedro Motta | Criação e estruturação da página Home |
| Lucas Leal da Silva | Criação e estruturação da página de monstros, login e register. Também ficou responsável pela estilização.  |
| Matheus | Criação e estruturação da página de Ficha |
| Yan Martins de Oliveira | Criação e estruturação da página de Perfil de Usuário |

## 📄 Licença

Projeto acadêmico desenvolvido para fins de estudo no curso da **Serratec**.
