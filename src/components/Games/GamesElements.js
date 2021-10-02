import styled from "styled-components";

export const GamesContainer = styled.div`
    margin: 10rem 4 gitrem;
    margin: 10rem 6rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
       
    }
`
  
export const GamesTextContent = styled.div`
   
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const GamesText = styled.div`
    /* margin-left: 2rem; */
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

    @media screen and (max-width: 768px) {
        /* margin-bottom: 1rem;
        margin-right: 5rem; */
        align-items: center;
        h4 {
            font-size: 24px;
            font-weight: 700;
            line-height: 45px;
            font-size: 20px;
            color: var(--white-color);
            text-align: center;
        }

        p {
            font-size: 20px;
            line-height: 30px;
            font-weight: 400;
            color: var(--text-color);
        }
    }
`

export const GamesImg = styled.div`
    position: relative;
    
    img {
        position: absolute;
        left: 70%;
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
        justify-content: space-around;
        align-items: center;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

export const GamesContent = styled.div`
    width: 380px;
    height: 380px;
    background: linear-gradient(128.8deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 80%);
    // border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: inset 5px 5px 10px rgba(255, 255, 255, 0.1), inset -6px -5px 10px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(100px);
    border-radius: 24px;

    
    @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
        margin: 0.5rem 0;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 300px;
    }
`

export const GameImage = styled.div`
    
    img {
        width: 12.5rem;
        position: absolute;
        left: 20%;
        bottom: 1px;
        
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
        width: 20rem;
        margin-top: -60px;
    }

    @media screen and (max-width: 768px) {
            img {
            width: 12rem;
        }
    }
`

export const ContentText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: -1rem 2rem;
`

export const Left = styled.div`
    
    h4 {
        color: var(--white-color);
        font-size: 20px;
        padding-bottom: 0.5rem;
    }
    button {
        border: none;
        border-radius: 100px;
        background-color: #D6A907;
        padding: 5px 10px;
        color: var(--white-color);
        font-size: 10px;
    }

    @media screen and (max-width: 768px) {
        h4 {
            color: var(--white-color);
            font-size: 12px;
            padding-bottom: 0.5rem;
        }

        button {
            border: none;
            font-size: 10px;
            border-radius: 4px;
            background-color: #CDA771;
            padding: 4px 8px;
            color: var(--white-color);
            font-size: 10px;
        }
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
        height: 1.6rem;
        width: 1.6rem;
        border-radius: 50%;
        border: 3px solid #fff;

        &:not(:last-child) {
            margin-right: -1rem;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;

        img {
            box-sizing: content-box;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            border: 2px solid #fff;

            &:not(:last-child) {
                margin-right: -1rem;
            }
        }

    }
`

export const Views = styled.p`
    font-size: 12px;
    color: var(--text-color);
    padding-left: 1rem;
    font-family: 'Rota-medium', sans-serif;
`