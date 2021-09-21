import styled from "styled-components"
import { Link as LinkRouter } from 'react-router-dom'
import {FaGooglePlay} from 'react-icons/fa'

export const InfoContainer = styled.div`
    margin: 0 auto;
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5rem 5rem 5rem 7rem;

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
        font-size: 50px;
        line-height: 58.3px;
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
    margin: 1rem 0 2rem 0;
    p {
        font-size: 20px;
        line-height: 25px;
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
            line-height: 10px;
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

export const InfoBtn1Link = styled(LinkRouter)`
        margin-right: 5rem;
        button {
        border-radius: 50px;
        background: var(--accent-color);
        white-space: nowrap;
        padding: 15px 35px;
        color: var(--white-color);
        font-size: 16px;
        outline: none;
        border: none;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        @media screen and (max-width: 768px){
            margin-right: 1rem;
            button {
                border-radius: 50px;
                background: var(--accent-color);
                white-space: nowrap;
                padding: 5px 10px;
                color: var(--white-color);
                font-size: 14px;
                outline: none;
                border: none;
                transition: all 0.2s ease-in-out;
                text-decoration: none;
        }   }

        @media screen and (max-width: 480px){
            margin-right: 0.5rem;
            button {
                border-radius: 50px;
                background: var(--accent-color);
                white-space: nowrap;
                padding: 3px 7px;
                color: var(--white-color);
                font-size: 12px;
                outline: none;
                border: none;
                transition: all 0.2s ease-in-out;
                text-decoration: none;
        }   }

        &:hover {
            transition: all 0.2s ease-in-out;
            background: var(--white-color);
            color: var(--accent-color);
        }
    }
`

export const InfoBtn2Link = styled.button`
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