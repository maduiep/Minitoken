import styled from "styled-components"

export const DownloadContainer = styled.div`
    width: 100%;
    background-color: var(--accent-color);

    @media screen and (max-width: 786px) {
       height: 400px;
   }
`

export const DownloadContent = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 5rem 6.3rem;
   align-items: center;
  

   @media screen and (max-width: 786px) {
       flex-direction: column;
   }
`

export const DownloadText = styled.div`

    color: var(--white-color);
    h1 {
        line-height: 60px;
        font-weight: 700;
        font-size: 40px;
        margin-bottom: 6px;

        @media screen and (max-width: 768px) {
            font-size: 24px;
            text-align: center;
        }
    }

    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 32px;

        @media screen and (max-width: 768px) {
            font-size: 16px;
            text-align: center;
            line-height: 22px;
            padding-bottom: 2rem;
        }
    }

    
`

export const DownloadBtnContainer = styled.div`

button {
    border-radius: 20px;
    white-space: nowrap;
    padding: 10px 25px;
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
        border: 2px solid var(--white-color);
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
}

`