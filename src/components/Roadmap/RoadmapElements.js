import styled from "styled-components";

export const RoadmapContainer = styled.div`
    margin: 5rem 4rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin: 2.5rem 2rem;
    }
`

export const RoadmapHeading = styled.div`
    h4 {
        font-size: 40px;
        font-weight: 700;
        line-height: 45px;
        color: var(--white-color);
    }
    p {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: var(--text-color);
    }
`

export const RoadmapMainContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export const RoadmapImg = styled.div`
    img {
        width: 30rem;
    }
`

export const RoadmapTextContent = styled.div`

`