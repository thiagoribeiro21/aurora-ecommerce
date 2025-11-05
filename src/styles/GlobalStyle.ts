import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    /* Fallback para altura do header quando a CSS var não estiver definida */
    scroll-padding-top: var(--header-h, 64px);
  }
  html, body, #root {
    height: 100%;
  }

  #root{
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    /* Fallbacks para evitar valor inválido quando as vars não existem */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }


  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
