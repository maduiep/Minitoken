import styled from "styled-components"

export const NFTContainer = styled.div`
    margin: 10rem 4rem 10rem 4rem;
    /* margin: 0 auto; */
`

export const NFTHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 45px;
        color: var(--white-color);
    }

    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
        color: var(--text-color);
    }

    @media screen and (max-width: 768px) {
            h1 {
            font-size: 35px;
            font-weight: 400;
            line-height: 35px;
            color: var(--white-color);
        }

        p {
            font-size: 15px;
            line-height: 20px;
            font-weight: 200;
            text-align: center;
            color: var(--text-color);
        }
    }

    @media screen and (max-width: 480px) {
            h1 {
            font-size: 25px;
            font-weight: 200;
            line-height: 25px;
            color: var(--white-color);
        }

        p {
            font-size: 15px;
            line-height: 20px;
            font-weight: 200;
            text-align: center;
            color: var(--text-color);
        }
    }
`

export const NFTContent = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`


export const NFTMainCard = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`


export const NFTCardMainImg = styled.div`
    width: 450px;
    height: 315px;
    border-radius: 10px;
    background-color: var(--content-color);

    img {
        float: left;
        margin: 2rem 0rem 2rem 1.5rem;
        width: 25rem;
        
    }

    @media screen and (max-width: 768px){
        margin: 0 auto;
        width: 325px;
        height: 215px;
        margin-bottom: 2rem;

        img {
            float: left;
            margin: 1rem 0rem 1rem 1rem;
            width: 18rem;
            
        }
    }
`

export const NFTText = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 2rem;
    h3 {
        font-size: 25px;
        padding-bottom: 1rem;
        color: var(--white-color);
    }

    p {
        font-size: 15px;
        line-height: 20px;
        font-weight: 300;
        color: var(--text-color);
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        h3 {
        font-size: 20px;
        padding-bottom: 1rem;
        /* padding-left: 3rem; */
        color: var(--white-color);
    }

        p {
            font-size: 12px;
            line-height: 15px;
            font-weight: 200;
            color: var(--text-color);
            padding-bottom: 2rem;
        }
    }
`

export const NFTBtns = styled.div`
    display: flex;
`

export const Btn1 = styled.button`
    border-radius: 50px;
    white-space: nowrap;
    padding: 15px 35px;
    color: var(--white-color);
    font-size: 16px;
    outline: none;
    border: 2px solid var(--accent-color);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    margin-right: 3rem;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--white-color);
        color: var(--accent-color);
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 10px 25px;
        margin-right: 1rem;
    }
`

export const Btn2 = styled.button`
    border-radius: 50px;
    white-space: nowrap;
    padding: 15px 35px;
    color: var(--white-color);
    font-size: 16px;
    outline: none;
    border: 2px solid var(--content-color);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--white-color);
        color: var(--accent-color);
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 10px 25px;
    }
`

