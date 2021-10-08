import styled from "styled-components"

export const NFTContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
   
`

export const NFTEmpty = styled.div`
    margin-top: 10rem;
    margin-bottom: 10rem;
`

export const NFTHeading = styled.div`
    display: flex;
    flex-direction: column;
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
        margin: 2rem 0rem;
        h1 {
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
        }

            p {
            font-size: 16px;
            line-height: 20px;
            font-weight: 200;
            text-align: center;
            color: var(--text-color);
        }
    }
    
`

export const NFTContent = styled.div`
    margin: 5rem 10rem;
    display: flex;

    @media screen and (max-width: 768px) {
        margin: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`


export const NFTMainCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5rem;

    @media screen and (max-width: 768px){
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
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

    @media screen and (max-width: 768px) {
        width: 340px;
        height: 225px;
        border-radius:5px;
        background-color: var(--content-color);
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 19rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 1.3rem;
        }
    }

`

export const NFTText = styled.div`
   width: 28rem;
   margin-top: 3rem;
    h3 {
        font-size: 32px;
        padding-bottom: 1rem;
        color: var(--white-color);
    }

    p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;
        color: var(--text-color);
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        width: 20rem;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            font-size: 16px;
            padding-bottom: 1rem;
            color: var(--white-color);
        }

        p {
            font-size: 12px;
            line-height: 15px;
            font-weight: 200;
            color: var(--text-color);
            padding-bottom: 2rem;
            text-align: center;
        }
    }

`

export const NFTBtns = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const Btn1 = styled.button`
    border-radius: 20px;
    white-space: nowrap;
    padding: 12px 32px;
    color: var(--accent-color);
    font-size: 20px;
    outline: none;
    border: 2px solid var(--accent-color);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    font-family: "Pally-bold", sans-serif;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--white-color);
        color: var(--accent-color);
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
    padding: 15px 35px;
    font-size: 14px;
    }

    @media screen and (max-width: 480px) {
    padding: 3px 15px;
    font-size: 10px;
    text-align: center;
    }
`

export const Btn2 = styled.button`
    border-radius: 20px;
    white-space: nowrap;
    padding: 15px 35px;
    color: var(--white-color);
    font-size: 16px;
    outline: none;
    border: 2px solid var(--content-color);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: none;
    margin-left: 2rem;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--content-color);
        color: var(--accent-color);
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        padding: 10px 25px;
        font-size: 14px;
    }
`

export const NFTSmallCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center; 
        margin: 2rem 0 5rem 0;
        display: flex;
    }
`
export const SmallCard = styled.div`
    width: 17rem;
    height: 11rem;
    border-radius: 10px;
    background-color: var(--content-color);

    img {
        width: 15rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 14rem;
        height: 9rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 13rem;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const SmallCardCenter = styled.div`
    width: 17rem;
    height: 11rem;
    border-radius: 10px;
    background-color: var(--content-color);
    margin: 1.5rem 0 1.5rem 0;

    img {
        width: 15rem;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 14rem;
        height: 9rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 13rem;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`