import React from 'react'
import {BASE_URL} from '../../commonVariables'
import {
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

import { FaBars } from 'react-icons/fa'

function Navbar() {
    return (
        <Nav>
           <NavbarContainer>
               <NavLogo to="/">
                    <img className="userList__profile"
                        src={`${BASE_URL}/images/Group 1.svg`}
                        alt="img" 
                    />
                </NavLogo>
               <MobileIcon>
                   <FaBars />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="home">Home</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="about">About Us</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="games">Games</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="nft">NFT</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="roadmap">Roadmap</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="howtobuy">How to Buy</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="whitepaper">Whitepaper</NavLinks>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                    <NavBtnLink to="connectwallet">Connect Wallet</NavBtnLink>
                </NavBtn>
           </NavbarContainer>
        </Nav>
    )
}

export default Navbar
