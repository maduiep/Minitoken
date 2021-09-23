import React from 'react'
import {BASE_URL} from '../../commonVariables'

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
    return (
        <FooterContainer>
            <FooterLineContainerOne>
                <FooterLineOne></FooterLineOne>
            </FooterLineContainerOne>
            <FooterMainText>
                <h1>Get ready for a website for <br/> you and your games!</h1>
            </FooterMainText>
            <FooterBtns>
                <FooterBtnOne>
                    <button>Sign up</button>
                </FooterBtnOne>

                <FooterBtnTwo>
                    <button>Login</button>
                </FooterBtnTwo>
            </FooterBtns>
            <FooterContents>
                <FooterImg>
                    <img className="userList__profile"
                        src={`${BASE_URL}/images/Group 1.svg`}
                        alt="img" 
                    />
                </FooterImg>
                <FooterItems>
                    <FooterItemLink style={{marginLeft: '5rem'}}>
                        <FooterLinks to="home">Home</FooterLinks>
                        <FooterLinks to="about">About Us</FooterLinks>
                        <FooterLinks to="games">Games</FooterLinks>
                        <FooterLinks to="nft">NFT</FooterLinks>
                    </FooterItemLink>

                    <FooterItemLink style={{marginLeft: '5rem', marginRight: '5rem'}}>
                        <FooterLinks to="roadmap">Roadmap</FooterLinks>
                        <FooterLinks to="howtobuy">How to Buy</FooterLinks>
                        <FooterLinks to="connectwallet">Connect Wallet</FooterLinks>
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
                    <h4 style={{marginRight: '2rem'}}>Terms & Conditions</h4>
                    <h4>Privacy Policy</h4>
                </FooterBottomTwo>
            </FooterBottomContainer>
        </FooterContainer>
    )
}

export default Footer
