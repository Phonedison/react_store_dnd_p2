import { useState } from "react";
import { Button } from "../../../components/Button";
import { Div } from "../../../components/Div";
import { Input } from "../../../components/Input";

// Array de 1 a 20 gerado pelo código — sem precisar de API
// Array.from cria um array de 20 posições
// O map transforma cada posição em seu número correspondente
const NIVEIS = Array.from({ length: 20 }, (_, i) => i + 1);

export const ModalEdicao = ({
  nome,
  bio,
  nivel,
  racas,
  classes,
  loadingRacas,
  loadingClasses,
  racaSelecionada,
  classeSelecionada,
  onSalvar,
  onFechar,
}) => {
  // Cópias locais dos valores — só afetam o modal enquanto está aberto
  const [novoNome, setNovoNome] = useState(nome);
  const [novaBio, setNovaBio] = useState(bio);
  const [novoNivel, setNovoNivel] = useState(nivel);
  const [novaRaca, setNovaRaca] = useState(racaSelecionada);
  const [novaClasse, setNovaClasse] = useState(classeSelecionada);

  const handleSalvar = () => {
    onSalvar({ novoNome, novaBio, novoNivel, novaRaca, novaClasse });
  };

  return (
    <>
      <Div className="modal-overlay" onClick={onFechar} />

      <Div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <Div className="titulo titulo-alternativo">
          <h2>Editar Perfil</h2>
        </Div>

        <Div className="modal-campo">
          <label htmlFor="nome">Nome do aventureiro</label>
          <Input
            id="nome"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            placeholder="Seu nome"
            type="text"
          />
        </Div>

        <Div className="modal-campo">
          <label htmlFor="bio">Citação / Bio</label>
          <Input
            id="bio"
            value={novaBio}
            onChange={(e) => setNovaBio(e.target.value)}
            placeholder="Sua frase de efeito"
            type="text"
          />
        </Div>

        <Div className="modal-campo">
          <label htmlFor="raca">Raça</label>
          <select
            id="raca"
            className="input-select"
            value={novaRaca?.index || ""}
            onChange={(e) => {
              // Encontra o objeto completo da raça pelo index selecionado
              const racaEscolhida = racas.find((r) => r.index === e.target.value);
              setNovaRaca(racaEscolhida || null);
            }}
          >
            <option value="">
              {loadingRacas ? "Carregando..." : "Selecione uma raça"}
            </option>
            {racas.map((raca) => (
              <option key={raca.index} value={raca.index}>
                {raca.name}
              </option>
            ))}
          </select>
        </Div>

        <Div className="modal-campo">
          <label htmlFor="classe">Classe</label>
          <select
            id="classe"
            className="input-select"
            value={novaClasse?.index || ""}
            onChange={(e) => {
              const classeEscolhida = classes.find((c) => c.index === e.target.value);
              setNovaClasse(classeEscolhida || null);
            }}
          >
            <option value="">
              {loadingClasses ? "Carregando..." : "Selecione uma classe"}
            </option>
            {classes.map((classe) => (
              <option key={classe.index} value={classe.index}>
                {classe.name}
              </option>
            ))}
          </select>
        </Div>

        <Div className="modal-campo">
          <label htmlFor="nivel">Nível (1–20)</label>
          <select
            id="nivel"
            className="input-select"
            value={novoNivel}
            onChange={(e) => setNovoNivel(Number(e.target.value))}
          >
            {/*
              NIVEIS é o array [1,2,3...20] que criamos acima.
              O map transforma cada número em uma option.
              Number(e.target.value) converte string para número
              porque o value do select sempre vira string.
            */}
            {NIVEIS.map((n) => (
              <option key={n} value={n}>
                Nível {n}
              </option>
            ))}
          </select>
        </Div>

        <Div className="modal-botoes">
          <Button className="button cancel" onClick={onFechar}>
            Cancelar
          </Button>
          <Button className="button confirm" onClick={handleSalvar}>
            Salvar
          </Button>
        </Div>

      </Div>
    </>
  );
};