import styled from "styled-components";

export const AboutContainer = styled.div``


export const AboutWrapper = styled.div`
    position: relative;
    margin: 5rem 10rem;

    h2 {
        font-size: 40px;
        font-weight: bold;
        color: var(--white-color);
        position: absolute;
        top: 20%;
        left: 36%;
    }

    @media screen and (max-width: 768px){
        position: relative;
        margin: 5rem 5rem;
        h2 {
            font-size: 24px;
            position: static;
            font-weight: normal;
            text-align: center;
        }
    }
`
export const AboutImg = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 35rem;
        margin-top: 2rem;
    }

    p {
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;
        color: var(--text-color);
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;

        p {
            margin-top: 2rem;
            font-size: 15px;
            font-weight: 200;
            text-align: center;
            color: var(--text-color);
        }
        img {
            width: 30rem;
            margin-top: 2rem;
        }
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column-reverse;

        p {
            margin-top: 2rem;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
            color: var(--text-color);
        }
        img {
            width: 20rem;
            margin-top: 2rem;
        }
    }
`

export const AboutContentWrap = styled.div`
    position: absolute;
    bottom: 20%;
    margin-left: 35rem;
    
    img {
        width: 10rem;
        margin-top: 5rem;
    }

    @media screen and (max-width: 768px) {
        position: static;
        margin-left: 0;
        margin-top: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: none;
        }
    }
`

export const AboutLink = styled.button`
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