import {campanhaImg, jogadoresImg, monstroImg } from "../../assets/data/imgs";
import { Div } from "../../components/Div";
import { Navbar } from "../../components/Header";
import { Button } from "../../components/Button";
import { ImagePolaroid } from "../../components/Img";
import "../../styles/pages/MasterPage.css";

export const MasterPage = () => {
  return (
    <>
      <Navbar title="PÁGINA DO MESTRE" typePerfil="mestre" />

      <main className="master-page">
        <section className="dashboard">
          <div className="campanha card">
            <h1>Campanha atual</h1>

            <div className="campanha-conteudo">
              <div className="campanha-polaroid">
                <ImagePolaroid src={campanhaImg} alt="Imagem da campanha" />
                </div>
              <div className="campanha-info">
                
                <h1>A Maldição de Strahd</h1>
                <h2>Sessao atual:</h2>
                <p>14 - O castelo de Ravenloft</p>
                <h2>Nivel Médio do Grupo: 5</h2>
                <h2>Jogadores: 5 / 6</h2>
                <p>Próxima sessão: 15/06/2026</p>

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
              <h2>Encontros</h2>
              <strong>18</strong>
              <Button className="button navigation">Ver encontros</Button>
            </div>

            <div className="card-resumo">
              <h2>Tesouros</h2>
              <strong>42</strong>
              <Button className="button navigation">Ver tesouros</Button>
            </div>
          </div>

          <div className="iniciativa card">
            <h2>Ordem de iniciativa</h2>
          </div>

          <div className="monstro card">
            <h2>Monstro em destaque</h2>
          </div>

          <div className="encontro card">
            <h2>Encontro rápido</h2>
          </div>

          <div className="npcs card">
            <h2>NPCs favoritos</h2>
          </div>

          <div className="anotacoes card">
            <h2>Anotações do mestre</h2>
          </div>

          <div className="acoes card">
            <h2>Ações rápidas</h2>
          </div>
        </section>
      </main>
    </>
  );
};
