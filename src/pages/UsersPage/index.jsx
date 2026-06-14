import { useState } from "react";
import aventuras from "../../assets/data/aventuras.json";
import { Button } from "../../components/Button";
import { Div } from "../../components/Div";
import { Navbar } from "../../components/Header";
import { useType } from "../../contexts";
import { CardHistorico } from "../../features/Historico/CardHistorico";
import { ModalEdicao } from "../../features/Perfil/ModalEdicao";
import { OrbitalSeletor } from "../../features/Perfil/OrbitalSeletor";
import { useElementList } from "../../hooks";

export const UsersPage = () => {
  // const navigate = useNavigate();
  const { login } = useType();

  // Orbitais
  const [monstroSelecionado, setMonstroSelecionado] = useState(null);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  // Dados do perfil editável
  const [racaSelecionada, setRacaSelecionada] = useState(login?.raca);
  const [classeSelecionada, setClasseSelecionada] = useState(login?.classe);
  const [nivel, setNivel] = useState(login?.nivel);
  const [nome, setNome] = useState(login?.nome);
  const [bio, setBio] = useState(login?.bio);

  // Controle do modal de edição
  const [modalAberto, setModalAberto] = useState(false);

  // Controle do histórico
  const [verTodos, setVerTodos] = useState(false);

  // Listas da API
  const { dados: monstros, loading: loadingMonstros } = useElementList({
    element: "monsters",
    lang: "pt-BR",
  });

  const { dados: itensMagicos, loading: loadingItens } = useElementList({
    element: "magic-items",
    lang: "pt-BR",
  });

  const { dados: racas, loading: loadingRacas } = useElementList({
    element: "races",
  });

  const { dados: classes, loading: loadingClasses } = useElementList({
    element: "classes",
  });

  // Se verTodos for true mostra tudo, senão mostra só os dois primeiros
  const aventurasVisiveis = verTodos ? aventuras : aventuras.slice(0, 2);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  console.log(racaSelecionada);
  console.log(classeSelecionada);
  return (
    <>
      <title>D&D_Wiki - Perfil</title>
      <Navbar title="Perfil do Aventureiro" />

      <Div className="perfil-container">
        <Div className="perfil-card">
          {/* Botão de edição no topo direito do card */}
          <Div className="perfil-topo-direito">
            <Button className="button edit" onClick={abrirModal}>
              Editar perfil
            </Button>
          </Div>

          <Div className="perfil-header">
            <OrbitalSeletor
              itemSelecionado={monstroSelecionado}
              label="Monstro de estimação"
              listaItens={monstros}
              aoSelecionar={setMonstroSelecionado}
              loading={loadingMonstros}
            />

            <Div className="avatar-circular">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
                alt="Avatar do jogador"
              />
            </Div>

            <OrbitalSeletor
              itemSelecionado={itemSelecionado}
              label="Item mágico favorito"
              listaItens={itensMagicos}
              aoSelecionar={setItemSelecionado}
              loading={loadingItens}
            />
          </Div>

          {/* Nome vem do estado — atualiza quando o modal salvar */}
          <Div className="titulo">
            <h2>{nome}</h2>
          </Div>

          <Div className="perfil-badge-lista">
            <Div className="badge">
              Raça: {racaSelecionada || "Não definida"}
            </Div>
            <Div className="badge">
              Classe: {classeSelecionada || "Não definida"}
            </Div>
            <Div className="badge">Nível: {nivel}</Div>
          </Div>

          <Div className="quote-box">"{bio}"</Div>

          <Div className="titulo titulo-alternativo">
            <h3>Últimas Aventuras</h3>
          </Div>

          <Div className="historico">
            {/*
              aventurasVisiveis já foi calculado acima com slice ou sem.
              O map aqui não muda — só o array que ele percorre é diferente.
            */}
            {aventurasVisiveis.map((aventura) => (
              <CardHistorico
                key={aventura.id}
                titulo={aventura.titulo}
                personagem={aventura.personagem}
                status={aventura.status}
              />
            ))}
          </Div>

          {/* Só mostra o botão se tiver mais de 2 aventuras */}
          {aventuras.length > 2 && (
            <Button
              className="button navigation"
              onClick={() => setVerTodos(!verTodos)}
            >
              {verTodos ? "Menos" : `todas (${aventuras.length})`}
            </Button>
          )}
        </Div>
      </Div>

      {/* Modal de edição */}
      {modalAberto && (
        <ModalEdicao
          key={login.index}
          nome={nome}
          bio={bio}
          nivel={nivel}
          racas={racas}
          classes={classes}
          loadingRacas={loadingRacas}
          loadingClasses={loadingClasses}
          racaSelecionada={racaSelecionada}
          classeSelecionada={classeSelecionada}
          onSalvar={({
            novoNome,
            novaBio,
            novoNivel,
            novaRaca,
            novaClasse,
          }) => {
            setNome(novoNome);
            setBio(novaBio);
            setNivel(novoNivel);
            setRacaSelecionada(novaRaca);
            setClasseSelecionada(novaClasse);
            fecharModal();
          }}
          onFechar={fecharModal}
        />
      )}
    </>
  );
};
