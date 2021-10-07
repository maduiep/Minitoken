import styled from "styled-components";

export const HowToBuyContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin-top: 10rem;
    margin-bottom: 20rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const HowToBuyHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 5rem;
    h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 45px;
        color: var(--white-color);

        @media screen and (max-width: 768px) {
            font-size: 24px;
            text-align: center;
        }
    }

    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
        color: var(--text-color);

        @media screen and (max-width: 768px) {
            font-size: 20px;
            
        }
    }

`

export const HowToBuyRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const HowToBuyRowOne = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`


export const HowToBuyRowTwo = styled.div`
    display: flex;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const HowToBuyRowThree = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const HowToBuyCard = styled.div`
    width: 270px;
    height: 200px;
    background-color: var(--card-color);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        width: 250px;
        height: 180px;
    }
`

export const CardText = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1.5rem;

    p {
        padding: 1rem 0 1rem 0;
        color: var(--text-color);
        font-size: 14px;
    }
`

export const CardText2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1.5rem;

    p {
        padding: 0.5rem 0 1rem 0;
        color: var(--text-color);
        font-size: 14px;
    }
`

export const CardText3 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1.5rem;

    p {
        padding: 0.5rem 0 1rem 0;
        color: var(--text-color);
        font-size: 14px;
    }
`