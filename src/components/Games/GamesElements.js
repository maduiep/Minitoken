import styled from "styled-components";

export const GamesContainer = styled.div`
    margin: 10rem 5rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin: 2.5rem 2rem;
    }
`
  
export const GamesTextContent = styled.div`
   
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
        left: 60%;
        bottom: 0.5rem;
        width: 30rem;
    }

    @media screen and (max-width: 768px) {
        img {
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
    width: 350px;
    height: 350px;
    background: linear-gradient(128.8deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%);
    /* opacity: 0.5; */
    border: 2px solid #FFFFFF;
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

export const GameImage = styled.div`
    width: 10rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 15rem;
    }
`

export const ContentText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0em 2rem;
`

export const Left = styled.div`
    
    h4 {
        color: var(--white-color);
        font-size: 14px;
        padding-bottom: 0.5rem;
    }
    button {
        border: none;
        border-radius: 4px;
        background-color: #CDA771;
        padding: 5px 10px;
        color: var(--white-color);
        font-size: 10px;
    }
`

export const Right = styled.div`

`

export const LeftImgConatiner = styled.div`
    display: flex;
`

export const LeftImg = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    img {
        box-sizing: content-box;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        border: 3px solid #fff;

        &:not(:last-child) {
            margin-right: -1rem;
        }
    }
`

export const Views = styled.p`
    font-size: 12px;
    color: var(--text-color);
    padding-left: 1rem;
`