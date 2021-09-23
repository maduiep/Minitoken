import styled from "styled-components"

export const DownloadContainer = styled.div`
    width: 100%;
    height: 200px;
    background-color: var(--accent-color);
`

export const DownloadContent = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
`

export const DownloadText = styled.div`
    margin-top: 4rem;
    color: var(--white-color);
    h1 {
        line-height: 35px;
        font-weight: 700;
        padding-bottom: 12px;
    }

    p {
        font-weight: 400;
        font-size: 15px;
    }
`

export const DownloadBtnContainer = styled.div`
    margin-top: 5rem;
        button {
            border-radius: 50px;
        background: var(--white-color);
        white-space: nowrap;
        padding: 10px 22px;
        color: var(--accent-color);
        font-size: 16px;
        outline: none;
        border: none;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
    }
`

