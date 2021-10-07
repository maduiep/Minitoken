import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
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
        Aos.init({duration: 3000})
    }, [])

    return (
        <NFTContainer>
            <NFTHeading data-aos="fade-in">
                <h1>NFT Collections</h1>
                <p>Take a look at our available games</p>
            </NFTHeading>
            <NFTContent>
                <NFTMainCard data-aos="fade-up">
                    <NFTCardMainImg>
                        <img 
                            src={`${BASE_URL}/images/Rectangle 39.svg`}
                            alt="img" 
                        /> 
                    </NFTCardMainImg>
                    <NFTText>
                        <h3>Crypto Punk</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum dolor sit amet,
                            </p>
                    </NFTText>
                    <NFTBtns>
                        <Btn1>Visit Marketplace</Btn1>
                        <Btn2>
                            <span style={{color: '#B4C9E5'}}>Price:</span> 
                            <span style={{color: '#B98AFA', fontWeight: 'bold'}}>1.236 ETH</span>
                        </Btn2>
                    </NFTBtns>
                </NFTMainCard>

                <NFTSmallCard>
                    <SmallCard>
                        <img data-aos="zoom-in"
                            src={`${BASE_URL}/images/Rectangle 42.svg`}
                            alt="img" 
                        /> 
                    </SmallCard>
                    <SmallCardCenter>
                        <img data-aos="zoom-in"
                            src={`${BASE_URL}/images/Rectangle 41.svg`}
                            alt="img" 
                        />
                    </SmallCardCenter>
                    <SmallCard>
                        <img data-aos="zoom-in"
                            src={`${BASE_URL}/images/Rectangle 43.svg`}
                            alt="img" 
                        />
                    </SmallCard>
                </NFTSmallCard>
            </NFTContent>
        </NFTContainer>
    )
}

export default NFTCollections
