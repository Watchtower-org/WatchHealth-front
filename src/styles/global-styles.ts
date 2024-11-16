import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Roboto", sans-serif;
  }

  html {
    font-size: 62.5%; //use "rem" as px
    height: 100vh;
  }

  body {
    height: 100vh;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.neutral}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }
`;
