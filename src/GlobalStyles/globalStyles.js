import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
    outline: 0;
 }

 :root {
     --azul-claro: #3a86ff;
     --icone-estrela: #FEB002;
     --icones-coracao: #FF0000; 
     --preto: #110A07;
     --cinza: #4A4A4A;
     --cinza-claro: #6E6F72;
     --background-botao: #064BB5;
     --background: #FFFFFF;
     --background-texto: #BCFF5E;
 }

 body{
     background-color: var(--background);
     color: var(--preto);
 }
 
 body, input, button {
    font-family: 'Poppins', sans-serif;   
    font-size: 1rem; 
 }
 h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;  
    font-weight: 900;
 }
 button {
     cursor: pointer;
     background-color: var(--background-botao);
 }
 a {
     text-decoration: none;
 }
  li {
    list-style: none;
  }

`;
