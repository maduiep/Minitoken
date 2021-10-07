import styled from "styled-components"

export const DownloadContainer = styled.div`
    width: 100%;
    background-color: var(--accent-color);

`

export const DownloadContent = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 5rem 6.3rem;
   align-items: center;

   @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
  
`

export const DownloadText = styled.div`

    color: var(--white-color);
    h1 {
        line-height: 60px;
        font-weight: 700;
        font-size: 40px;
        margin: 6px 0px;

    }

    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 32px;
        padding: 1rem 1rem;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            line-height: 30px;
            font-weight: 600;
            font-size: 20px;
            margin-top: 1rem;

        }

        p {
            font-weight: 0;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
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
        
    }

    @media only screen and (max-width: 768px) {
        button {
            font-size: 16px;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }
    }

`