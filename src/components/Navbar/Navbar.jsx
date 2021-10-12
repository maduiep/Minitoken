import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { HashLink } from 'react-router-hash-link';  
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

    const styles = {
        color: "#B4C9E5",
        '&:hover': {
            color: '#F97272',
        }
    }

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <Nav>
           <NavbarContainer>
                    <Img className="userList__profile"
                        src="./images/Group 1.svg"
                        alt="img" 
                    />
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
               
               <NavMenu data-aos="fade-in">
                   <NavItem>
                   <NavLinks>
                        <HashLink style={styles} scrollIntoView
                        smooth to="#info">Home</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                        <HashLink style={styles} scrollIntoView
                        smooth to="#about">About Us</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                       <HashLink style={styles} scrollIntoView
                        smooth to="#games">Games</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                       <HashLink style={styles} scrollIntoView
                        smooth to="#nft">NFT</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                   <NavLinks>
                       <HashLink style={styles} scrollIntoView
                        smooth to="#roadmap">Roadmap</HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                        <HashLink style={styles} scrollIntoView
                            smooth to="#howtobuy">How To Buy
                        </HashLink>
                       </NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks>
                            <HashLink style={styles} scrollIntoView
                                smooth to="#whitepaper">Whitepaper
                            </HashLink>
                       </NavLinks>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                    <NavBtnLink>
                        {/* <HashLink style={{color: '#fff'}} scrollIntoView
                            smooth to="#footer"> */}
                                Connect Wallet
                        {/* </HashLink> */}
                    </NavBtnLink>
                </NavBtn>
           </NavbarContainer>
        </Nav>
    )
}

export default Navbar
