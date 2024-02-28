import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    
    margin: 0;
    font-family: "Space Grotesk", sans-serif;
    max-width: 800px;
    margin-inline: auto;

    /* background-image: url('/assets/images/bg-main-mobile.png');
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%; */
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
