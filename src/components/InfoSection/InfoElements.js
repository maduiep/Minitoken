// import styled from "styled-components";

// export const InfoContainer = styled.div`
//     color: var(--white-color);
//     background: var(--primary-color);

//     @media screen and (max-width: 768px) {
//         padding: 100px 0;
//     }
// `

// export const InfoWrapper = styled.div`
//     display: grid;
//     z-index: 1;
//     height: 860px;
//     width: 100%;
//     max-width: 1100px;
//     margin-right: auto;
//     margin-left: auto;
//     padding: 0 24px;
//     justify-content: center;
// `

// export const InfoRow = styled.div`
//     displaY: grid;
//     grid-auto-columns: minmax(auto, 1fr);
//     align-items: center;
//     grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//     @media screen and (max-width: 768px) {
//         grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
//     }
// `

// export const Column1 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `

// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `

// export const TextWrapper = styled.div`
//     max-width: 540px;
//     padding-top: 0;
//     padding-bottom: 60px;
// `

// export const Heading = styled.h1`
//     margin-bottom: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;
//     color: var(--accent-color);
//     @media screen and (max-width: 480px) {
//         font-size: 10px;
//     }
// `

// export const Subtitle = styled.p`
//     max-width: 440px;
//     margin-bottom: 35px;
//     font-size: 18px;
//     line-height: 24px;
//     color: var(--accent-color);
// `

// export const BtnWrap = styled.div`
//     display: flex;
//     justify-content: flex-start;
    
// `

// export const ImgWrap = styled.div`
//     max-width: 555px;
//     height: 100%;
// `

// export const Img = styled.img`
//     width: 100%;
//     margin: 0 0 10px 0;
//     padding-right: 0;
// `

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