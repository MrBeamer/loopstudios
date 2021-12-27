import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap");
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

h1,
h2 {
  margin: 0;
  padding: 0;
  font-family: "Josefin Sans", sans-serif;
}

body {
  font-family: "Alata", sans-serif;
}
`;
