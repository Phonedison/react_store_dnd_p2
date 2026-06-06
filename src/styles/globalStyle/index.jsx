import { useEffect, useState } from "react";
import { GlobalStyles } from "./styles";

//array da lista de cores
let color = [
  "#666",
  "#fff9e6",
  "#ff6b6b",
  "#ff5252",
  "#e6f0ff",
  "#4ecdc4",
  "#ffffff",
  "#3bbfb6",
  "#ffe66d",
  "#ffd166",
  "#06d6a0",
  "#2d8cf0",
];

// Função para escolher a cor de forma aleatória
const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * color.length) + 1;
  return color[randomIndex];
};

//Componente para renderizar a cor do background
export const BackgroundColorComponents = () => {
  const [background, setBackground] = useState("#fff");

  useEffect(() => {
    const timer = setTimeout(() => setBackground(randomColor()), 6000);
    return () => clearTimeout(timer);
  });

  //estilização do background passando a cor setada no método randomColor
  return <GlobalStyles color={background} />;
};
