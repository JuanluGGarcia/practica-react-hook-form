import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    
    font-family: "Space Grotesk", sans-serif;
    background-image: url('/assets/images/bg-main-mobile.png');
    background-repeat: no-repeat;
    background-size: 100% 250px;

    @media screen and (min-width: 750px) {
      background-image: url('/assets/images/bg-main-desktop.png');
      background-repeat: no-repeat;
      background-size: 350px;
      height: 100vh 100%;
    }
    /* max-width: 800px; */
    /* margin-inline: auto; */
    

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
