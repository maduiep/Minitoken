import styled from "styled-components"
// import { Link as LinkRouter } from 'react-router-dom'
import {FaGooglePlay} from 'react-icons/fa'

export const InfoContainer = styled.div`
    margin: 0 auto 10rem auto;
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 5rem 5rem 7rem;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 2rem 2rem 3rem;
    }

    @media screen and (max-width: 489px){
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
    justify-content: space-around;

    h1 {
        font-size: 58px;
        line-height: 62px;
        font-weight: 700;

        color: var(--white-color);
    }

    span {
        color: var(--secondary-color);
    }

    @media screen and (max-width: 768px){
        h1 {
            font-size: 30px;
            line-height: 38.3px;
            align-items: center;
        }
    }

    @media screen and (max-width: 480px){
        h1 {
            font-size: 15px;
            line-height: 28.3px;
            text-align: center;
        }
    }
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
            font-size: 15px;
            line-height: 20px;
            font-weight: 200;
            text-align: center;
            color: var(--text-color);
        }
    }

    @media screen and (max-width: 480px) {
        p {
            font-size: 10px;
            line-height: 12px;
            font-weight: 100;
            text-align: center;
            color: var(--text-color);
        }
    }
`

export const InfoHeading = styled.div`
    width: 100%;
`

export const InfoBtns = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        
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
    width: 180px;
    background: var(--accent-color);
    border-radius: 20px;
        background: var(--accent-color);
        white-space: nowrap;
        padding: 14px 32px;
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
    
`
export const Textdiv = styled.div`
`
export const InfoBtn2Link = styled.button`
        border-radius: 20px;
        white-space: nowrap;
        padding: 14px 32px;
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
        padding: 15px 35px;
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        padding: 3px 15px;
        font-size: 10px;
        text-align: center;
    }
`

export const ImgContainer = styled.div`
   img {
       width: 35rem;
       margin-top: 2rem;
       margin-left: -4rem;
       z-index: -1;
    }

   @media screen and (max-width: 768px) {
        img {
            width: 25rem;
            margin-top: 3.5rem;
        }
   }

   @media screen and (max-width: 480px) {
        img {
        width: 20rem;
        margin-top: 2.5rem;
        }
   }
`