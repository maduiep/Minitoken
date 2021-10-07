import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Nav, 
    NavbarContainer,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
   
    Img
} from './NavbarElements'

import { FaBars } from 'react-icons/fa'

function Navbar({toggle}) {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <Nav>
           <NavbarContainer>
               
                    <Img className="userList__profile"
                        src={`${BASE_URL}/images/Group 1.svg`}
                        alt="img" 
                    />
                    <MobileIcon onClick={toggle}>
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
