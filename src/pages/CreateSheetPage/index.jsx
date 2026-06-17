import { useState } from "react";
import { Div } from "../../components/Div";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Header";

export const CreateSheetPage = () => {
  const [character, setCharacter] = useState({
    name: "",
    race: "",
    classe: "",
    level: 1,
    background: "",
    alignment: "",
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const [createdSheet, setCreatedSheet] = useState(null);

  const handleChange = (e) => {
    setCharacter({
      ...character,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const getModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  const handleSubmit = () => {
    setCreatedSheet({ ...character });
  };

  return (
    <>
      <Navbar />

      <Div className="sheet-test">
        <Div className="sheet-card">
          <Div className="sheet-header">
            <h1>⚔️ Criação de Personagem ⚔️</h1>
            <h4>Forje seu próximo herói para a aventura.</h4>
          </Div>

          <div className="sheet-form">
            <input
              type="text"
              name="name"
              placeholder="Nome do Personagem"
              value={character.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="race"
              placeholder="Raça"
              value={character.race}
              onChange={handleChange}
            />

            <input
              type="text"
              name="classe"
              placeholder="Classe"
              value={character.classe}
              onChange={handleChange}
            />

            <input
              type="number"
              name="level"
              placeholder="Nível"
              value={character.level}
              onChange={handleChange}
            />

            <input
              type="text"
              name="background"
              placeholder="Antecedente"
              value={character.background}
              onChange={handleChange}
            />

            <input
              type="text"
              name="alignment"
              placeholder="Alinhamento"
              value={character.alignment}
              onChange={handleChange}
            />
          </div>

          <h2 className="sheet-title">Atributos</h2>

          <div className="attributes-grid">
            <div className="attribute-box">
              <label>Força</label>
              <input
                type="number"
                name="strength"
                value={character.strength}
                onChange={handleChange}
              />
            </div>

            <div className="attribute-box">
              <label>Destreza</label>
              <input
                type="number"
                name="dexterity"
                value={character.dexterity}
                onChange={handleChange}
              />
            </div>

            <div className="attribute-box">
              <label>Constituição</label>
              <input
                type="number"
                name="constitution"
                value={character.constitution}
                onChange={handleChange}
              />
            </div>

            <div className="attribute-box">
              <label>Inteligência</label>
              <input
                type="number"
                name="intelligence"
                value={character.intelligence}
                onChange={handleChange}
              />
            </div>

            <div className="attribute-box">
              <label>Sabedoria</label>
              <input
                type="number"
                name="wisdom"
                value={character.wisdom}
                onChange={handleChange}
              />
            </div>

            <div className="attribute-box">
              <label>Carisma</label>
              <input
                type="number"
                name="charisma"
                value={character.charisma}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            className="button navigation create-btn"
            onClick={handleSubmit}
          >
            Criar Ficha
          </Button>

          {createdSheet && (
            <Div className="sheet-result">
              <div className="sheet-result-header">
                <h2>📜 {createdSheet.name}</h2>

                <p className="character-subtitle">
                  {createdSheet.race} • {createdSheet.classe} • Nível{" "}
                  {createdSheet.level}
                </p>
              </div>

              <div className="sheet-info">
                <div>
                  <strong>Antecedente</strong>
                  <p>{createdSheet.background}</p>
                </div>

                <div>
                  <strong>Alinhamento</strong>
                  <p>{createdSheet.alignment}</p>
                </div>
              </div>

              <h3 className="attributes-title">⚔️ Atributos</h3>

              <div className="attributes-preview-grid">
                {[
                  {
                    name: "Força",
                    value: createdSheet.strength,
                  },
                  {
                    name: "Destreza",
                    value: createdSheet.dexterity,
                  },
                  {
                    name: "Constituição",
                    value: createdSheet.constitution,
                  },
                  {
                    name: "Inteligência",
                    value: createdSheet.intelligence,
                  },
                  {
                    name: "Sabedoria",
                    value: createdSheet.wisdom,
                  },
                  {
                    name: "Carisma",
                    value: createdSheet.charisma,
                  },
                ].map((attribute) => (
                  <div
                    key={attribute.name}
                    className="attribute-preview"
                  >
                    <span className="attribute-name">
                      {attribute.name}
                    </span>

                    <span className="attribute-value">
                      {attribute.value}
                    </span>

                    <span
                      className={`modifier ${
                        getModifier(attribute.value) < 0
                          ? "negative"
                          : "positive"
                      }`}
                    >
                      {getModifier(attribute.value) >= 0
                        ? "+"
                        : ""}
                      {getModifier(attribute.value)}
                    </span>
                  </div>
                ))}
              </div>
            </Div>
          )}
        </Div>
      </Div>
    </>
  );
};