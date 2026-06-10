import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Div } from "../../components/Div";

export const UsersPage = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/login");
  };

  return (
    <>
      <title>D&D - Perfil</title>

      <Div className="container">
        <Div className="cabecalho">
          <Div className="titulo-cabecalho">
            <Button className="button return" onClick={handleVoltar}>
              Voltar
            </Button>
            <Div className="titulo">
              <h1>Perfil do Aventureiro</h1>
            </Div>
            <Div />
          </Div>
        </Div>

        <Div className="perfil-card">
          <Div className="perfil-header">
            <Div className="item-orbital">
              Beholder
              <span className="label-orbital">Monstro Favorito</span>
            </Div>

            <Div className="avatar-circular">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
                alt="Avatar do jogador"
              />
            </Div>

            <Div className="item-orbital">
              Espada Longa
              <span className="label-orbital">Arma Favorita</span>
            </Div>
          </Div>

          <Div className="titulo">
            <h2>Arthur Pendragon</h2>
          </Div>

          <Div className="perfil-badge-lista">
            <Div className="badge">Humano</Div>
            <Div className="badge">Paladino</Div>
            <Div className="badge">Nível 5</Div>
          </Div>

          <Div className="quote-box">
            "A luz do alvorecer guia minha lâmina. Não recuaremos enquanto as
            sombras de Barovia não forem dissipadas."
          </Div>

          <Div className="titulo titulo-alternativo">
            <h3>Últimas Aventuras</h3>
          </Div>

          <Div className="historico-card">
            <Div>
              <h3>A Maldição de Strahd</h3>
              <p>Personagem: Arthur, Paladino da Devoção</p>
            </Div>
            <Div className="status-tag em-andamento">Em Andamento</Div>
          </Div>

          <Div className="historico-card">
            <Div>
              <h3>A Mina Perdida de Phandelver</h3>
              <p>Personagem: Thorian, o Bárbaro</p>
            </Div>
            <Div className="status-tag concluida">Concluída</Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};
