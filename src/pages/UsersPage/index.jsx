import { useState } from "react";
import { Button } from "../../components/Button";
import { Div } from "../../components/Div";
import { Navbar } from "../../components/Header";
import { useType } from "../../contexts";
import { CardHistorico } from "../../features/Historico/CardHistorico";
import { ModalEdicao } from "../../features/Perfil/ModalEdicao";
import { OrbitalSeletor } from "../../features/Perfil/OrbitalSeletor";
import { useElementList } from "../../hooks";

export const UsersPage = () => {
  const { login, atualizarPerfil } = useType();

  const [monstroSelecionado, setMonstroSelecionado] = useState(
    login?.monstroFavorito ?? null
  );
  const [itemSelecionado, setItemSelecionado] = useState(
    login?.itemFavorito ?? null
  );
  const [racaSelecionada, setRacaSelecionada] = useState(login?.raca ?? null);
  const [classeSelecionada, setClasseSelecionada] = useState(login?.classe ?? null);
  const [nivel, setNivel] = useState(login?.nivel ?? null);
  const [nome, setNome] = useState(login?.nome ?? "");
  const [bio, setBio] = useState(login?.bio ?? "");

  const [modalAberto, setModalAberto] = useState(false);
  const [verTodos, setVerTodos] = useState(false);

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

  const aventuras = login?.aventuras || [];
  const aventurasVisiveis = verTodos ? aventuras : aventuras.slice(0, 2);

  // Quando o orbital muda, atualiza o estado local e persiste
  const handleSelecionarMonstro = (monstro) => {
    setMonstroSelecionado(monstro);
    atualizarPerfil({ monstroFavorito: monstro });
  };

  const handleSelecionarItem = (item) => {
    setItemSelecionado(item);
    atualizarPerfil({ itemFavorito: item });
  };

  // Quando o modal salva, atualiza os estados locais e persiste tudo de uma vez
  const handleSalvarPerfil = ({ novoNome, novaBio, novoNivel, novaRaca, novaClasse }) => {
    setNome(novoNome);
    setBio(novaBio);
    setNivel(novoNivel);
    setRacaSelecionada(novaRaca);
    setClasseSelecionada(novaClasse);

    atualizarPerfil({
      nome: novoNome,
      bio: novaBio,
      nivel: novoNivel,
      raca: novaRaca,
      classe: novaClasse,
    });

    setModalAberto(false);
  };

  return (
    <>
      <title>D&D - Perfil</title>

      <Navbar title={"Perfil do Aventureiro"} />

      <Div className="perfil-container">
        <Div className="perfil-card">

          <Div className="perfil-topo-direito">
            <Button className="button edit" onClick={() => setModalAberto(true)}>
              Editar perfil
            </Button>
          </Div>

          <Div className="perfil-header">
            <OrbitalSeletor
              itemSelecionado={monstroSelecionado}
              label="Monstro de estimação"
              listaItens={monstros}
              aoSelecionar={handleSelecionarMonstro}
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
              aoSelecionar={handleSelecionarItem}
              loading={loadingItens}
            />
          </Div>

          <Div className="titulo">
            <h2>{nome}</h2>
          </Div>

          <Div className="perfil-badge-lista">
            <Div className="badge">
              Raça: {racaSelecionada?.name || racaSelecionada || "Não definida"}
            </Div>
            <Div className="badge">
              Classe: {classeSelecionada?.name || classeSelecionada || "Não definida"}
            </Div>
            <Div className="badge">
              Nível: {nivel || "Não definido"}
            </Div>
          </Div>

          <Div className="quote-box">
            "{bio || "Nenhuma citação definida ainda."}"
          </Div>

          <Div className="titulo titulo-alternativo">
            <h3>Últimas Aventuras</h3>
          </Div>

          <Div className="historico">
            {aventuras.length === 0 ? (
              <p>Nenhuma aventura registrada ainda.</p>
            ) : (
              aventurasVisiveis.map((aventura) => (
                <CardHistorico
                  key={aventura.id}
                  titulo={aventura.titulo}
                  personagem={aventura.personagem}
                  status={aventura.status}
                />
              ))
            )}
          </Div>

          {aventuras.length > 2 && (
            <Button
              className="button navigation"
              onClick={() => setVerTodos(!verTodos)}
            >
              {verTodos ? "Menos" : `Todas (${aventuras.length})`}
            </Button>
          )}

        </Div>
      </Div>

      {modalAberto && (
        <ModalEdicao
          nome={nome}
          bio={bio}
          nivel={nivel}
          racas={racas}
          classes={classes}
          loadingRacas={loadingRacas}
          loadingClasses={loadingClasses}
          racaSelecionada={racaSelecionada}
          classeSelecionada={classeSelecionada}
          onSalvar={handleSalvarPerfil}
          onFechar={() => setModalAberto(false)}
        />
      )}
    </>
  );
};