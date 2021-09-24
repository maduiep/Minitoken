import styled from "styled-components";

export const GamesContainer = styled.div`
    margin: 5rem 4rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin: 2.5rem 2rem;
    }
`
  
export const GamesTextContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const GamesText = styled.div`
    margin-bottom: 2rem;
    h4 {
        font-size: 40px;
        font-weight: 700;
        line-height: 45px;
        color: var(--white-color);
    }

    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: var(--text-color);
    }
`

export const GamesImg = styled.div`
    position: relative;
    
    img {
        position: absolute;
        top: 0rem;
        left: 3.5rem;
        width: 30rem;
    }

    @media screen and (max-width: 768px) {
        img {
        /* position: static;
        width: 15rem;
        margin-top: 1.5rem; */
        display: none;
        }
    }
`

export const GamesBoxContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const GamesContent = styled.div`
    width: 390px;
    height: 350px;
    background: linear-gradient(128.8deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 0.5;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: inset 5px 5px 10px rgba(255, 255, 255, 0.1), inset -6px -5px 10px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(100px);
    border-radius: 24px;

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 300px;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 250px;
    }
`

export const GamesContentCenter = styled.div`
    width: 390px;
    height: 350px;
    background: linear-gradient(128.8deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 0.5;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: inset 5px 5px 10px rgba(255, 255, 255, 0.1), inset -6px -5px 10px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(100px);
    border-radius: 24px;

    @media screen and (max-width: 768px) {
        width: 350px;
        height: 300px;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 250px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

export const GameImage = styled.div`
    img {
        width: 12.5rem;
        position: absolute;
        left: 20%;
        bottom: 1px;
        color: transparent;
    }

    @media screen and (max-width: 768px) {
        img {
            position: static;
            width: 10rem;
        }
    }
`

export const ContentImg = styled.div`
    img {
        opacity: 100;
        width: 20rem;
    }
`

export const ContentBtns = styled.div`
    img {
       width: 20rem;
    }
`