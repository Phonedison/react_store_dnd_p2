import styled, { css } from "styled-components";

export const Div = styled.div`
  ${(props) =>
    props.$name === "DivStack" &&
    css`
      z-index: 300;
      width: 100%;
      max-width: 20rem;
      transition: 0.25s ease-in-out;
      &:hover {
        transform: rotate(5deg);

        ${(props) =>
          props.$name === "DivCard" &&
          css`
            &:before {
              transform: translateY(-2%) rotate(-4deg);
            }
            &::after {
              transform: translateY(2%) rotate(4deg);
            }
          `}
      }
    `}

  ${(props) =>
    props.$name === "DivCard" &&
    css`
      aspect-ratio: 2 / 2;
      border: 0.2rem solid;
      background-color: var(--bg-color);
      position: relative;
      transition: 0.15s ease;
      cursor: pointer;
      padding: 5% 5% 15% 5%;
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 100%;
        max-height: 30rem;
        width: 100%;
        max-width: 30rem;
        border: 0.2rem solid;
        background-color: var(--bg-color);
        transform-origin: center center;
        z-index: -1;
        transition: 0.15s ease;
        top: 0;
        left: 0;
      }

      &:before {
        transform: translateY(-2%) rotate(-6deg);
      }

      &:after {
        transform: translateY(2%) rotate(6deg);
      }
    `}

    ${(props) =>
    props.$name === "DivImage" &&
    css`
      width: 100%;
      border: 0.2rem solid;
      background-color: var(--ink);
      aspect-ratio: 1/1;
      position: relative;
    `}
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
