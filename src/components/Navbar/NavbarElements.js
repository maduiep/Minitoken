import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 6rem;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    background: var(--primary-color);

    @media screen and (max-width: 768px) {
        transition: 0.8s all;
    }
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    ${Container}

    @media only screen and (max-width: 768px) {
        align-items: flex-start;
    }

`
export const Wrapper = styled.div`
    @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
   } 

   @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
   } 
`

export const Img = styled.img`
    width: 10rem;

    @media screen and (max-width: 768px) {
        width: 9rem;
        margin-left: -100px;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: var(--white-color);
        float: right !important;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: var(--text-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 16px;
    height: 100%;
    cursor: pointer;
    font-family: "Pally-regular", sans-serif;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--accent-color);
    }

    &.active {
        color: var(--white-color);
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 16px;
    background: var(--accent-color);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--white-color);
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--white-color);
        color: var(--accent-color);
    }
`

export const ContentBtns = styled.div`
    
`