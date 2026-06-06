import { keyframes } from "styled-components";

//animação das frases balançando
export const doodleWiggle = keyframes`
  0%,
  100% {
    transform: rotate(-3deg);
  }

  25% {
    transform: rotate(2deg);
  }

  50% {
    transform: rotate(-4deg);
  }

  75% {
    transform: rotate(1deg);
  }
`;
