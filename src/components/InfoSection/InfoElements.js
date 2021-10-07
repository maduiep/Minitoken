import styled from "styled-components"
// import { Link as LinkRouter } from 'react-router-dom'
import {FaGooglePlay} from 'react-icons/fa'

export const InfoContainer = styled.div`

`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5rem 10rem;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 2rem 2rem 3rem;
    }

    @media screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem 1rem 1rem 2rem;
    }
   
`

export const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 99;

`

export const InfoPara = styled.div`
    margin: 2rem 0 4rem 0;
    p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;
        color: var(--text-color);
    }

    @media screen and (max-width: 768px) {
       p {
           justify-content: center;
           align-items: center;
           text-align: center;
           font-size: 16px;
       }
    }
`

export const InfoHeading = styled.div`
    width: 100%;

    h1 {
        font-size: 58px;
        line-height: 62px;
        font-weight: 700;

        color: var(--white-color);
    }

    span {
        color: var(--secondary-color);
    }

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 28px;
            line-height: 42px;
            font-weight: 700;
            text-align: center;
        }
    }
`

export const InfoBtns = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`

export const DownloadIcon = styled(FaGooglePlay)`
    padding-top: 2px;
    font-size: 15px;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        margin-left: 5px;
    }

    @media screen and (max-width: 480px) {
        font-size: 6px;
    }
`

export const InfoBtnMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 58px;
    background: var(--accent-color);
    border-radius: 20px;
    background: var(--accent-color);
    white-space: nowrap;
    color: var(--white-color);
    font-size: 20px;
    font-family: "Pally-bold", sans-serif;
    margin-right: 2rem;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    
    &:hover{
        background: var(--white-color);
        color: var(--accent-color);
        img{
            filter: invert(19%) sepia(7%) saturate(9738%) hue-rotate(313deg) brightness(80%) contrast(156%);
            transition: all 0.2s ease-in-out; 
        }   
    }

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 48px;
        font-size: 16px;
    }
    
`
export const Textdiv = styled.div`
`
export const InfoBtn2Link = styled.button`
        border-radius: 20px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 58px;
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
        }
        @media screen and (max-width: 768px) {
        width: 100px;
        height: 48px;
        font-size: 16px;
    }
`

export const Img = styled.img`
    width: 35rem;
    margin-top: 2rem;
    margin-left: -5rem;
    z-index: -99;

    
    @media screen and (max-width: 768px) {
        width: 20rem;
        margin-top: 3rem;
        margin-left: 0;
    }
`