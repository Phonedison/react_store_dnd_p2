import { campanhaImg, jogadoresImg, monstroImg, bauImg, espadaImg } from "../../assets/data/imgs";
import { Navbar } from "../../components/Header";
import { Button } from "../../components/Button";
import { ImagePolaroid } from "../../components/Img";
import "../../styles/pages/MasterPage.css";

export const MasterPage = () => {
  return (
    <>
      <Navbar title="PAGINA DO MESTRE" typePerfil="mestre" />

      <main className="master-page">
        <section className="dashboard">
          <div className="linha-dashboard">
            <div className="campanha card">
              <h1>Campanha atual</h1>

              <div className="campanha-conteudo">
                <div className="campanha-polaroid">
                  <ImagePolaroid src={campanhaImg} alt="Imagem da campanha" />
                </div>

                <div className="campanha-info">
                  <h1>A Maldicao de Strahd</h1>
                  <h2>Sessao atual:</h2>
                  <p>14 - O castelo de Ravenloft</p>
                  <h2>Nivel Médio do Grupo: 5</h2>
                  <h2>Jogadores: 5 / 6</h2>
                  <p>Proxima sessao: 15/06/2026</p>

                  <Button className="button navigation">
                    Gerenciar campanha
                  </Button>
                </div>
              </div>
            </div>

            <div className="resumos">
              <div className="card-resumo">
                <img src={jogadoresImg} alt="Jogadores" />
                <h2>Jogadores</h2>
                <strong>5 / 6</strong>
                <Button className="button navigation">Ver jogadores</Button>
              </div>

              <div className="card-resumo">
                <img src={monstroImg} alt="Mostrons" />
                <h2>Monstros</h2>
                <strong>312</strong>
                <Button className="button navigation">Ver monstros</Button>
              </div>

              <div className="card-resumo">
                <img src={espadaImg} alt="Espadas" />
                <h2>Encontros</h2>
                <strong>18</strong>
                <Button className="button navigation">Ver encontros</Button>
              </div>

              <div className="card-resumo">
                <img src={bauImg} alt="Bau" />
                <h2>Tesouros</h2>
                <strong>42</strong>
                <Button className="button navigation">Ver tesouros</Button>
              </div>
            </div>
          </div>

          <div className="linha-dashboard linha-dashboard-meio">
            <div className="iniciativa card">
              <h2>⚔ Ordem de iniciativa</h2>

              <div className="iniciativa-conteudo">
                <ol className="iniciativa-lista">
                  <li>
                    <span className="iniciativa-posicao">1</span>
                    <img src={jogadoresImg} alt="Arthur Pendragon" />
                    <strong>Arthur Pendragon</strong>
                    <span className="iniciativa-ponto">18</span>
                  </li>

                  <li>
                    <span className="iniciativa-posicao">2</span>
                    <img src={monstroImg} alt="Goblin" />
                    <strong>Goblin</strong>
                    <span className="iniciativa-ponto">15</span>
                  </li>

                  <li>
                    <span className="iniciativa-posicao">3</span>
                    <img src={jogadoresImg} alt="Elara Swiftfoot" />
                    <strong>Elara Swiftfoot</strong>
                    <span className="iniciativa-ponto">12</span>
                  </li>

                  <li>
                    <span className="iniciativa-posicao">4</span>
                    <img src={jogadoresImg} alt="Thorian Ironfist" />
                    <strong>Thorian Ironfist</strong>
                    <span className="iniciativa-ponto">11</span>
                  </li>

                  <li>
                    <span className="iniciativa-posicao">5</span>
                    <img src={monstroImg} alt="Dragao Anciao" />
                    <strong>Dragao Anciao</strong>
                    <span className="iniciativa-ponto">8</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="monstro card">
              <h2>Monstro em destaque</h2>

              <div className="monstro-conteudo">
                <img src={monstroImg} alt="Mostrons" />

                <div className="monstro-info">
                  <h3>Beholder</h3>
                  <strong>CR 13</strong>
                  <p>Aberracao media</p>
                  <p>PV: 180 | CA: 17</p>
                </div>
              </div>

              <Button className="button navigation">Ver ficha</Button>
            </div>

            <div className="encontro card">
              <h2>⚄ Encontro rapido</h2>

              <p>Gere um encontro aleatorio para sua campanha!</p>

              <div className="encontro-dado" aria-hidden="true">
                ⚂
              </div>

              <Button className="button navigation">Gerar encontro</Button>
            </div>
          </div>

          <div className="linha-dashboard">
            <div className="npcs card">
              <h2>⭐ NPCs favoritos</h2>

              <div className="npcs-lista">
                <div className="npc-favorito">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
                    alt="Avatar do jogador"
                  />
                  <strong>Strahd</strong>
                  <span>von Zarovich</span>
                </div>

                <div className="npc-favorito">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/047/824/751/small/armored-warrior-knight-with-hood-free-png.png"
                    alt="Avatar do jogador"
                  />
                  <strong>Ireena</strong>
                  <span>Kolyana</span>
                </div>

                <div className="npc-favorito">
                  <img
                    src="https://preview.redd.it/foto-de-perfil-facil-e-rapida-pra-rpg-v0-n6v6wrzujij81.png?width=647&format=png&auto=webp&s=09860ff02586aaf897a098243cd0d4f081007a63"
                    alt="Avatar do jogador"
                  />
                  <strong>Ismark</strong>
                  <span>Kolyana</span>
                </div>

                <div className="npc-favorito">
                  <img
                    src="https://png.pngtree.com/png-vector/20240420/ourmid/pngtree-pixel-art-wizard-character-for-rpg-game-in-retro-style-png-image_12302145.png"
                    alt="Avatar do jogador"
                  />
                  <strong>Rahadin</strong>
                </div>

                <button className="npc-adicionar" type="button">
                  <span>+</span>
                  Adicionar NPC
                </button>
              </div>

              <Button className="button navigation">Ver todos os NPCs</Button>
            </div>

            <div className="anotacoes card">
              <h2>Anotações do mestre</h2>
              <input type="text" />
            </div>

            <div className="acoes card">
              <h2>ações rápidas</h2>
              <div className="acoes-rapidas">
                <div className="acao-coluna1">
                  <Button className="button navigation button-com-icone">
                    <img className="button-img" src={espadaImg} /> NOVO ENCONTRO
                  </Button>
                  <Button className="button navigation">NOVO NPC</Button>
                </div>
                <div className="acao-coluna2">
                  <Button className="button navigation">SORTEAR MONTRO</Button>
                  <Button className="button navigation">ABRIR BESTIARIO</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
