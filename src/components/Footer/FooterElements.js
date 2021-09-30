import styled from "styled-components"

export const FooterContainer = styled.div`
    
`

export const FooterMainText = styled.div`
    margin-top: 0;

    h1 {
        line-height: 54px;
        font-weight: 700;
        padding-bottom: 12px;
        color: var(--white-color);
        text-align: center;
        font-size: 48px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 5rem;

        h1 {
            line-height: 25px;
            font-size: 24px;
            font-weight: 500;
            padding-bottom: 12px;
            color: var(--white-color);
            text-align: center;
        }
    }
`


export const FooterBtns = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`


export const FooterBtnOne = styled.div`
    margin-right: 2rem;
    button {
        border-radius: 20px;
white-space: nowrap;
padding: 12px 32px;
color: var(--accent-color);
font-size: 20px;
outline: none;
border: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
background: none;
font-family: "Pally-bold", sans-serif;
cursor: pointer;
background: var(--white-color);

&:hover {
    transition: all 0.2s ease-in-out;
    background: var(--accent-color);
    color: var(--white-color);
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

export const FooterBtnTwo = styled.div`
    button {
        border-radius: 20px;
white-space: nowrap;
padding: 12px 32px;
color: var(--white-color);
font-size: 20px;
outline: none;
border: 2px solid var(--white-color);
transition: all 0.2s ease-in-out;
text-decoration: none;
background: none;
font-family: "Pally-bold", sans-serif;
cursor: pointer;

        &:hover {
            transition: all 0.2s ease-in-out;
            color: var(--accent-color);
            border: 2px solid var(--accent-color);
        }
    }

    @media screen and (max-width: 768px) {
        button {
            padding: 8px 20px;
        }
    }
`

export const FooterContents = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5rem 0 5rem 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FooterImg = styled.div`
    img {
        width: 10rem;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 8rem;
            margin-bottom: 2rem;
        }
    }
`

export const FooterItems = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FooterItemLink = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    flex-direction: column;
    color: var(--text-color);
    font-size: 15px;
    font-family: "Rota-regular", sans-serif;


    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const FooterLinks = styled.li`
   margin-bottom: 1rem;
   cursor: pointer;

   &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--accent-color);
}
`

export const FooterLineContainerOne = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        margin-top: 5rem;
        margin-bottom: 1.5rem;
    }
`

export const FooterLineContainerTwo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`

export const FooterLineOne = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--line-color);
`

export const FooterLineTwo = styled.div`
    width: 80%;
    height: 1px;
    background-color: var(--line-color);
`

export const FooterBottomContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    color: var(--text-color);
    font-size: 15px;
    font-family: "Rota-medium", sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FooterBottomOne = styled.div`
    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }
`

export const FooterBottomTwo = styled.div`
    display: flex;
    justify-content: space-between;
`