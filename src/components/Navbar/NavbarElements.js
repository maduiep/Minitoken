import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px) {
        transition: 0.8s all;
    }
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    
    ${Container}
`

export const NavLogo = styled(LinkRouter)`
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    align-items: center;
    color: var(--white-color);
    margin-left: 1rem;
    font-weight: bold;
    text-decoration: none;

    img {
        width: 10rem;
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
    color: var(--white-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    font-size: 16px;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: var(--accent-color);
        border-bottom: 3px solid var(--accent-color);
    }

    &.active {
        color: var(--white-color);
        border-bottom: 3px solid var(--accent-color);
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
    border-radius: 50px;
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

