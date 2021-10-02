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
    }
`

export const RoadmapImg = styled.div`
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
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
        text-align: center;
        color: var(--text-color);
    }

`

