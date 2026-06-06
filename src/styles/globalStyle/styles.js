import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --ink: #323232;
  --paper-front: #fff9e6;
  --paper-back: #e6f0ff;
  --bg-color: #ffffff;
  --primary-btn: #ff6b6b;
  --primary-btn-hover: #ff5252;
  --secondary-btn: #4ecdc4;
  --secondary-btn-hover: #3bbfb6;
  --switch-bg: #ffe66d;
  --input-focus: #2d8cf0;
  --input-placeholder:#666;
  --paper-white: #fffdf5;

  /* Estilização  do arredondamento das bordas */
  --sketch-radius-1: .8rem 2.4rem .8rem 2.4rem / 2.4rem .8rem 2.4rem .8rem;
  --sketch-radius-2: 2.4rem .8rem 2.4rem .8rem / .8rem 2.4rem .8rem 2.4rem;
  --sketch-radius-btn: 1.6rem .5rem 1.6rem .5rem / .5rem 1.6rem .5rem 1.6rem;

  font-family: "Comic Sans MS", "Chalkboard SE", "Marker Felt", "Gochi Hand",
    sans-serif;

  --lato:"Lato";
  --krona:"Krona One";
  --germania:"Germania One";

    --card-width: 30rem;
  --card-height: 35rem;
  --input-width: 25rem;
  --input-height: 4rem;
  --btn-width: 12rem;
  --btn-height: 4rem;

  --border-width: .2rem;
  --shadow-offset: .4rem;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

html{
  font-size: 62.5%;
  line-height: 1.5;
}

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    text-rendering: optimizeSpeed;
    user-select: none;
    font-family:var(--lato);
    /* altera a cor com base no valor do parâmetro passado  */
    background-color: ${(props) => props.color || "#ffffff"};
    transition: background-color 0.5s ease;

    display:flex;
    justify-content: center;
    align-items:center;
  }

body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
}

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
}

  html:focus-within {
    scroll-behavior: smooth;
}

  img {
    max-width: 100%;
    display: block;
}

  input,
  button,
  textarea,
  select {
    font: inherit;
}

h1,h2,h3,h4,h5,h6{
font-family: var(--germania);
  }
`;
