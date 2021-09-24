import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #0D0E2D;
        --accent-color: #F97272;
        --secondary-color: #B98AFA;
        --tertiary-color: #B4C9E5;
        --text-color: #B4C9E5;
        --content-color: #20213D;
        --white-color: #ffffff; 
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
        // outline: 1px solid red;
    }
    @font-face {
        font-family: 'Pally-Variable';
        src: url('../fonts/Pally-Variable.woff2') format('woff2'),
             url('../fonts/Pally-Variable.woff') format('woff'),
             url('../fonts/Pally-Variable.ttf') format('truetype');
             font-weight: 400 700;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Pally-Regular';
        src: url('../fonts/Pally-Regular.woff2') format('woff2'),
             url('../fonts/Pally-Regular.woff') format('woff'),
             url('../fonts/Pally-Regular.ttf') format('truetype');
             font-weight: 400;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Pally-Medium';
        src: url('../fonts/Pally-Medium.woff2') format('woff2'),
             url('../fonts/Pally-Medium.woff') format('woff'),
             url('../fonts/Pally-Medium.ttf') format('truetype');
             font-weight: 500;
             font-display: swap;
             font-style: normal;
      }
      
      
      @font-face {
        font-family: 'Pally-Bold';
        src: url('../fonts/Pally-Bold.woff2') format('woff2'),
             url('../fonts/Pally-Bold.woff') format('woff'),
             url('../fonts/Pally-Bold.ttf') format('truetype');
             font-weight: 700;
             font-display: swap;
             font-style: normal;
      }

      @font-face {
        font-family: 'Rota-Medium';
        src: url('../fonts/Rota-medium.otf') format('otf');
             font-weight: 500;
             font-display: swap;
             font-style: normal;
      }


      @font-face {
        font-family: 'Rota-Regular';
        src: url('../fonts/Rota-regular.otf') format('otf');
             font-weight: 500;
             font-display: swap;
             font-style: normal;
      }

    body{
        background: var(--primary-color);
        font-family: 'Space Grotesk', 'Darker Grotesque', 'Jua', sans-serif;
        font-family: 'Pally-Bold', sans-serif;
    }
    p{
        font-family: 'Rota-Regular';
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`

export default GlobalStyle;