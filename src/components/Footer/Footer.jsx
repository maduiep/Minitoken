import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    FooterContainer,
    FooterMainText,
    FooterBtns,
    FooterBtnOne,
    FooterBtnTwo,
    FooterContents,
    FooterImg,
    FooterItems,
    FooterItemLink,
    FooterLinks,
    FooterLineContainerOne,
    FooterLineContainerTwo,
    FooterLineOne,
    FooterLineTwo,
    FooterBottomContainer,
    FooterBottomOne,
    FooterBottomTwo
} from './FooterElements'

function Footer() {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <FooterContainer id="footer" data-aos="fade-down" data-aos-easing="linear">
            <FooterLineContainerOne>
                <FooterLineOne></FooterLineOne>
            </FooterLineContainerOne>
            <FooterMainText data-aos="fade-down" data-aos-easing="linear">
                <h1>Get ready for a website for <br/> you and your games!</h1>
            </FooterMainText>
            <FooterBtns data-aos="zoom-in">
                <FooterBtnOne>
                    <button>Sign up</button>
                </FooterBtnOne>

                <FooterBtnTwo>
                    <button>Login</button>
                </FooterBtnTwo>
            </FooterBtns>
            <FooterContents>
                <FooterImg data-aos="fade-down" data-aos-easing="linear">
                    <img className="userList__profile"
                        src="./images/Group 1.svg"
                        alt="img" 
                    />
                </FooterImg>
                <FooterItems data-aos="fade-down" data-aos-easing="linear">
                    <FooterItemLink>
                        <FooterLinks to="home">Home</FooterLinks>
                        <FooterLinks to="about">About Us</FooterLinks>
                        <FooterLinks to="games">Games</FooterLinks>
                        <FooterLinks to="nft">NFT</FooterLinks>
                    </FooterItemLink>

                    <FooterItemLink>
                        <FooterLinks to="roadmap">Roadmap</FooterLinks>
                        <FooterLinks to="howtobuy">How to Buy</FooterLinks>
                        <FooterLinks to="connectwallet">Connect Wallet</FooterLinks>
                        <FooterLinks to="connectwallet"></FooterLinks>
                        <FooterLinks to="connectwallet"></FooterLinks>
                    </FooterItemLink>

                    <FooterItemLink>
                        <FooterLinks to="home">Twitter</FooterLinks>
                        <FooterLinks to="telegram">Telegram</FooterLinks>
                        <FooterLinks to="dsicord">Discord</FooterLinks>
                        <FooterLinks to="instagram">Instagram</FooterLinks>
                    </FooterItemLink>
                </FooterItems>
            </FooterContents>
            <FooterLineContainerTwo>
                <FooterLineTwo></FooterLineTwo>
            </FooterLineContainerTwo>

            <FooterBottomContainer>
                <FooterBottomOne>
                    Game Duckis a sample project for Dazeign. © 2021 Dazeign, All rights reserved.
                </FooterBottomOne>
                <FooterBottomTwo>
                    <h4>Terms & Conditions</h4>
                    <h4>Privacy Policy</h4>
                </FooterBottomTwo>
            </FooterBottomContainer>
        </FooterContainer>
    )
}

export default Footer
