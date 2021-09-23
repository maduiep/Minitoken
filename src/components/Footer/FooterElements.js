import styled from "styled-components"

export const FooterContainer = styled.div`
    
`

export const FooterMainText = styled.div`
    margin-top: 7rem;

    h1 {
        line-height: 35px;
        font-weight: 700;
        padding-bottom: 12px;
        color: var(--white-color);
        text-align: center;
    }
`


export const FooterBtns = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`


export const FooterBtnOne = styled.div`
    margin-right: 2rem;
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

        &:hover {
            transition: all 0.2s ease-in-out;
            background: var(--accent-color);
            color: var(--white-color);
        }
    }
`

export const FooterBtnTwo = styled.div`
    button {
        border-radius: 50px;
        border: 2px solid var(--white-color);
        white-space: nowrap;
        padding: 10px 22px;
        color: var(--white-color);
        font-size: 16px;
        outline: none;
        background: none;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            color: var(--accent-color);
        }
    }
`

export const FooterContents = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5rem 0 5rem 0;
`

export const FooterImg = styled.div`
    img {
        width: 10rem;
    }
`

export const FooterItems = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FooterItemLink = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    flex-direction: column;
    color: var(--text-color);
    font-size: 15px;
`

export const FooterLinks = styled.li`
   margin-bottom: 1rem;
   cursor: pointer;
`

export const FooterLineContainerOne = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 3rem;
`

export const FooterLineContainerTwo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
`

export const FooterLineOne = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--line-color);
`

export const FooterLineTwo = styled.div`
    width: 80%;
    height: 1px;
    background-color: var(--line-color);
`

export const FooterBottomContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    color: var(--text-color);
    font-size: 15px;
`

export const FooterBottomOne = styled.div`
    
`

export const FooterBottomTwo = styled.div`
    display: flex;
    justify-content: space-between;
`