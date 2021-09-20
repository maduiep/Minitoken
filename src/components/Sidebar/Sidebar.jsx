import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebraWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements'

function Sidebar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebraWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>

                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to="games" onClick={toggle}>
                        Games
                    </SidebarLink>

                    <SidebarLink to="nft" onClick={toggle}>
                        NFT
                    </SidebarLink>

                    <SidebarLink to="roadmap" onClick={toggle}>
                        Roadmap
                    </SidebarLink>

                    <SidebarLink to="howtobuy" onClick={toggle}>
                        How to Buy
                    </SidebarLink>

                    <SidebarLink to="whitepaper" onClick={toggle}>
                        Whitepaper
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="connectwallet">Connect Wallet</SidebarRoute>
                </SidebarBtnWrap>
            </SidebraWrapper>
        </SidebarContainer> 
    )
}

export default Sidebar
