import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #0D0E2D;
        --accent-color: #F97272;
        --secondary-color: #B98AFA;
        --tertiary-color: #B4C9E5;
        --text-color: #B4C9E5;
        --white-color: #ffffff; 
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        background: var(--primary-color);
        font-family: 'Space Grotesk', 'Darker Grotesque', 'Jua', sans-serif;
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