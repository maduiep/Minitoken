import styled from "styled-components"

export const NFTContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
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
        margin-top: 2rem;
        h1 {
            font-size: 30px;
            font-weight: 500;
            line-height: 35px;
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
       margin: 2rem 5rem;
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
        width: 350px;
        height: 220px;
        border-radius:5px;
        background-color: var(--content-color);

            img {
            float: left;
            margin: 1rem 1rem 1.5rem 1.5rem;
            width: 19rem;
            
        }
    }

`

export const NFTText = styled.div`
   width: 28rem;
   margin-top: 3rem;
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
        width: 20rem;
        margin-top: 2rem;
        h3 {
            font-size: 15px;
            padding-bottom: 1rem;
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
    margin-top: 1rem;
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
        padding: 10px 25px;
        font-size: 14px;
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
        width: 15rem;
        height: 10rem;
        img {
            width: 12rem;
            margin: 1rem 1rem;
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
        width: 15rem;
        height: 10rem;
        img {
            width: 12rem;
            margin: 1rem 1rem;
        }
    }
`