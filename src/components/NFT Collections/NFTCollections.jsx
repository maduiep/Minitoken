import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    NFTEmpty,
    NFTContainer,
    NFTHeading,
    NFTContent,
    NFTMainCard,
    NFTCardMainImg,
    NFTText,
    NFTBtns,
    Btn1,
    Btn2,
    NFTSmallCard,
    SmallCard,
    SmallCardCenter
} from './NFTElements'

function NFTCollections() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <>
        <NFTEmpty></NFTEmpty>
        <NFTContainer id="nft"  data-aos="fade-down">
            <NFTHeading data-aos="fade-in">
                <h1>NFT Collections</h1>
                <p>Our own NFT collection release.</p>
            </NFTHeading>
            <NFTContent>
                <NFTMainCard data-aos="fade-up">
                    <NFTCardMainImg>
                        <img 
                            src="./images/Rectangle 39.svg"
                            alt="img" 
                        /> 
                    </NFTCardMainImg>
                    <NFTText data-aos="zoom-in">
                        <h3>Savaya on Solana</h3>
                        <p>
                        We will be bringing out our own NFT collection. Are you intrigued by our vision? Support us on launch day by purchasing one of our NFT's. Every holder will get a bonus' of the site's returns for as long as we operate. Check out our whitepaper for more information.
                        </p>
                    </NFTText>
                    <NFTBtns>
                        <Btn1 data-aos="fade-left">Read Whitepaper</Btn1>
                        <Btn2 data-aos="fade-right">
                            <span style={{color: '#B4C9E5'}}>Price: </span> 
                            <span style={{color: '#B98AFA', fontWeight: 'bold'}}>1 SOL</span>
                        </Btn2>
                    </NFTBtns>
                </NFTMainCard>

                <NFTSmallCard>
                    <SmallCard>
                        <img data-aos="zoom-in"
                            src="./images/Rectangle 42.svg"
                            alt="img" 
                        /> 
                    </SmallCard>
                    <SmallCardCenter>
                        <img data-aos="zoom-in"
                            src="./images/Rectangle 41.svg"
                            alt="img" 
                        />
                    </SmallCardCenter>
                    <SmallCard>
                        <img data-aos="zoom-in"
                            src="./images/Rectangle 43.svg"
                            alt="img" 
                        />
                    </SmallCard>
                </NFTSmallCard>
            </NFTContent>
        </NFTContainer>
        </>
    )
}

export default NFTCollections
