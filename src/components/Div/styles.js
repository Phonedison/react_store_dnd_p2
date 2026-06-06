import styled, { css } from "styled-components";
import { doodleWiggle } from "../../../styles/animations";

export const Div = styled.div`
  ${(props) =>
    props.$name === "DoodleWrapper" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    `}

  ${(props) =>
    props.$name === "DoodleLine" &&
    css`
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: center;
      gap: 1.6rem;
      flex-wrap: wrap;
      position: relative;
      box-sizing: border-box;
    `}

    ${(props) =>
    props.$name === "DoodleLimit" &&
    css`
      width: 100%;
      height: 100%;
      max-height: 800px;
    `}

  ${(props) =>
    props.$name === "DoodleHeader" &&
    css`
      display: flex;
      align-items: center;
      gap: 1.6rem;
      margin-bottom: 2.4rem;
      z-index: 5;
    `}
  ${(props) =>
    props.$name === "DoodleButtonGroup" &&
    css`
      display: flex;
      align-items: center;
      gap: 1.6rem;
      z-index: 5;
    `}

  ${(props) =>
    props.$name === "DoodleCardScene" &&
    css`
      position: relative;
      perspective: 100rem;
      width: var(--card-width);
      height: var(--card-height);
      z-index: 2;

      &:hover .doodle-title {
        animation: ${doodleWiggle} 0.5s ease-in-out;
      }
    `}

  ${(props) =>
    props.$name === "DoodleCardInner" &&
    css`
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1);
      ${props.$scale &&
      css`
        &:hover {
          transform: scale(1.03);
        }
      `}
    `}

    ${(props) =>
    (props.$name === "DoodleCardFront" || props.$name === "DoodleCardBack") &&
    css`
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2.4rem;
      box-sizing: border-box;
      border: var(--border-width) solid var(--ink);
      border-radius: var(--sketch-radius-1);
      box-shadow: var(--shadow-offset) var(--shadow-offset) 0 var(--ink);
      background-image: repeating-linear-gradient(
        30deg,
        transparent,
        transparent 2.8rem,
        rgba(0, 0, 0, 0.06) 2.8rem,
        rgba(0, 0, 0, 0.06) 3rem
      );

      background-position: 0 1.6rem;
      background-color: ${props.$name === "DoodleCardFront"
        ? "var(--paper-front)"
        : "var(--paper-back)"};

      ${props.$name === "DoodleCardBack" &&
      css`
        transform: rotateY(180deg);
        border-radius: var(--sketch-radius-2);
      `}

      ${props.$name === "DoodleCardFront"}
    `}

    ${(props) =>
    props.$name === "DoodleTitle" &&
    css`
      font-size: 2.4rem;
      font-weight: 900;
      color: var(--ink);
      text-align: center;
      margin: 1rem 0 2rem 0;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      transform: rotate(-3deg);
      text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
      flex: 1;
    `}

${(props) =>
    props.$name === "DoodleHeaderTitle" &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 1.6rem;
    `}

    ${(props) =>
    props.$name === "DoodleTitleAlt" &&
    css`
      transform: rotate(2deg);
      margin: 0 0 1.6rem 0;
    `}

     ${(props) =>
    props.$name === "DoodleInputWrapper" &&
    css`
      position: relative;
    `}
`;
