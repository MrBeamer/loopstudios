import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1,
h2, h3 {
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
}

body {
  font-family: "Alata", sans-serif;
}
`;
