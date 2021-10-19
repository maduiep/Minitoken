import styled from "styled-components"

export const FaqContainer = styled.div `
    margin-bottom: 10rem;
    margin-top: 10rem;
`

export const FaqText =styled.h1`
    font-size: 40px;
    font-weight: 700;
    line-height: 45px;
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }
`

export const FaqWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const FaqAccordion = styled.div`
    width: 72rem;

    @media screen and (max-width: 768px) {
        width: 20rem;
    }
`

export const FaqItem = styled.div`
    background-color: var(--card-color);
    margin-bottom: 1rem;
    padding: 10px 20px;
    border-radius: 10px;
`

export const FaqTitle = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--white-color);
    margin-bottom: 0.5rem;
    cursor: pointer;
    margin-top: 0.5rem;
    span {
        font-size: 22px;
    }

    @media screen and (max-width: 768px) {
        span {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 480px) {
        span {
            font-size: 14px;
        }
    }

`

export const FaqContent = styled.div`
    color: var(--text-color);
    font-family: 'Rota';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
        line-height: 18px;
    }

    height: auto;
    max-height: ${(props) => props.selected === props.active ? '9999px' : '0px'};
    overflow: ${(props) => props.selected === props.active ? 'none' : 'hidden'};

    transition: ${(props) => props.selected === props.active ? 'cubic-bezier(1,0,1,0)' : 'all 0.5s cubic-bezier(0,1,0,1)'};
`