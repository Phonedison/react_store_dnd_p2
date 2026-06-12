import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Div } from "../../components/Div";
import { Navbar } from "../../components/Header";
import { useElementList } from "../../hooks";
import { OrbitalSeletor } from "../../features/Perfil/OrbitalSeletor";
import { CardHistorico } from "../../features/Historico/CardHistorico";
import aventuras from "../../assets/data/aventuras.json";

export const UsersPage = () => {
  const navigate = useNavigate();

  // Estado do monstro selecionado no orbital esquerdo
  // Começa null — sem seleção, mostra placeholder
  const [monstroSelecionado, setMonstroSelecionado] = useState(null);

  // Estado do item/arma selecionado no orbital direito
  const [itemSelecionado, setItemSelecionado] = useState(null);

  // Busca a lista de monstros da API — mesmo hook que a MonstersPage usa
  const { dados: monstros, loading: loadingMonstros } = useElementList({
    element: "monsters",
    lang: "pt-BR",
  });

  // Busca a lista de equipamentos da API
  const { dados: itensMagicos, loading: loadingEquipamentos } = useElementList({
    element: "magic-items",
    lang: "pt-BR",
  });

  const handleVoltar = () => navigate("/login");

  return (
    <>
      <title>D&D_Wiki - Perfil</title>
      <Navbar title={"Perfil do Aventureiro"} />
      <Div className="perfil-container">
        <Div className="perfil-cabecalho"></Div>
        <Div className="perfil-card">
          <Div className="titulo-cabecalho">
            {/* <Button className="button return" onClick={handleVoltar}>
              Voltar
            </Button> */}
            {/* <Div className="titulo">
              <h1>Perfil do Aventureiro</h1>
            </Div> */}
            <Button className="button edit" onClick={handleVoltar}>
              Editar perfil
            </Button>
          </Div>
          <Div className="perfil-header">
            {/* Orbital esquerdo — monstros */}
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

            {/* Orbital direito — equipamentos */}
            <OrbitalSeletor
              itemSelecionado={itemSelecionado}
              label="Item mágico favorito"
              listaItens={itensMagicos}
              aoSelecionar={setItemSelecionado}
              loading={loadingEquipamentos}
            />
          </Div>

          <Div className="titulo">
            <h2>Arthur Pendragon</h2>
          </Div>

          <Div className="perfil-badge-lista">
            <Div className="badge">Raça: Humano</Div>
            <Div className="badge">Classe: Paladino</Div>
            <Div className="badge">Aventureiro: Nível 5</Div>
          </Div>

          <Div className="quote-box">
            "A luz do alvorecer guia minha lâmina. Não recuaremos enquanto as
            sombras de Barovia não forem dissipadas."
          </Div>

          <Div className="titulo titulo-alternativo">
            <h3>Últimas Aventuras</h3>
          </Div>

          {/*
            O map percorre o array aventuras.json e para cada objeto
            cria um CardHistorico passando os dados como props.
            O key={aventura.id} é obrigatório para o React identificar cada item.
          */}
          <Div className="historico">
            {aventuras.map((aventura) => (
              <CardHistorico
                key={aventura.id}
                titulo={aventura.titulo}
                personagem={aventura.personagem}
                status={aventura.status}
              />
            ))}
          </Div>
        </Div>
      </Div>
    </>
  );
};
