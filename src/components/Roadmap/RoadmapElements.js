import styled from "styled-components";

export const RoadmapContainer = styled.div`
    margin: 5rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        margin: 5rem 2rem;
    }
`

export const RoadEmpty = styled.div`
    margin-top: 10rem;
    margin-bottom: 10rem;
`

export const RoadmapHeading = styled.div`
    display: flex;
    flex-direction: column;
    h4 {
        font-size: 40px;
        font-weight: 700;
        line-height: 45px;
        color: var(--white-color);

        @media screen and (max-width: 768px) {
            font-size: 24px;
            text-align: center;
        }
    }
    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: var(--text-color);

        @media screen and (max-width: 768px) {
            font-size: 20px;
            text-align: center;
        }
    }

    @media screen and(max-width: 768px){
        align-items: center;
        justify-content: center;

    }
`

export const RoadmapMainContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const RoadmapImg = styled.div`
    justify-content: center;
    align-items: center;
    img {
        width: 35rem;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 20rem;
            margin: 1rem 0 1rem 0;
        }
    }
`

export const RoadmapTextContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
        justify-content: center;
        align-items: center;
    }
`

export const RoadmapContentOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
    }
`

export const RoadmapContentFour = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
    }
`

export const TextContainer = styled.div`
    width: 30rem;
    height: 8rem;
    display: flex;
    align-items: center;
    border: 2px solid var(--card-color);
    
    p {
        color: var(--text-color);
        padding: 1.2rem;
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
        text-align: center;
        color: var(--text-color);
    }


    @media screen and (max-width: 768px) {
        width: 20rem;
        height: 8rem;
        margin-bottom: 1rem;
        p {
            padding: 1rem;
            font-size: 14px;
        }
    }

`

export const Line = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: column;

    margin-right: 1rem;

    @media screen and (max-width: 768px) {
        margin-left: 0.5rem;
       
    }
`

export const Circle = styled.div`
    width: 35px;
    height: 35px;
    background-color: #B98AFA;
    color: #fff;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 300;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 25px;
        height: 25px;
        background-color: #B98AFA;
        color: #fff;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 300;
    }
`
