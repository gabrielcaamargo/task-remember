import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @keyframes appearBody {
    0% {
      opacity: 0;
    }

    50%{
      opacity: .5;
    }

    100%{
      opacity: 1;
    }
  }

  body{
    background-color: #EEE;
    font-family: "Montserrat", sans-serif;
    animation: 1s ease-in 0s 1 appearBody;
  }
`