import styled from "styled-components"

export const DownloadContainer = styled.div`
    width: 100%;
    background-color: var(--accent-color);

    @media screen and (max-width: 786px) {
       height: 250px;
   }
`

export const DownloadContent = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 6rem 10rem;
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
    }

    p {
        font-weight: 400;
        font-size: 15px;
    }

    @media screen and (max-width: 786px) {
        margin-top: 2rem;
        text-align: center;
        h1 {
            font-weight: 600;
            line-height: 30px;
            font-size: 16px;
        }

        p {
            font-weight: 400;
            font-size: 12px;
        }
    }
`

export const DownloadBtnContainer = styled.div`
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

