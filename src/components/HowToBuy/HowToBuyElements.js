import styled from "styled-components";
import {FaArrowRight, FaArrowDown} from 'react-icons/fa'

export const HowToBuyContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin-top: 10rem;
    margin-bottom: 20rem;
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
    }

    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
        color: var(--text-color);
    }

`

export const HowToBuyRow = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`

export const HowToBuyRowOne = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const ArrowRight = styled(FaArrowRight)`
    font-size: 2rem;
    color: var(--accent-color);
    margin-left: 2rem;
    margin-top: 5rem;
`

export const ArrowDowns = styled(FaArrowDown)`
    font-size: 2rem;
    color: var(--accent-color);
    margin-left: 8rem;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const ArrowRightL = styled(FaArrowRight)`
    font-size: 2rem;
    color: var(--accent-color);
    margin-right: 2rem;
    margin-top: 5rem;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const ArrowRightR = styled(FaArrowRight)`
    font-size: 2rem;
    color: var(--accent-color);
    margin-left: 2rem;
    margin-top: 5rem;

    @media screen and (max-width: 768px) {
        display: none;
    }

    @media screen and (max-width: 480px) {
        display: none;
    }
`

export const HowToBuyRowTwo = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const HowToBuyRowThree = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

export const HowToBuyCard = styled.div`
    width: 295px;
    height: 200px;
    background-color: var(--card-color);
    border-radius: 20px;
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