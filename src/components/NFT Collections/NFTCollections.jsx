import React from 'react'
import {BASE_URL} from '../../commonVariables'

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
} from './NFTElements'

function NFTCollections() {
    return (
        <NFTContainer>
            <NFTHeading>
                <h1>NFT Collection</h1>
                <p>Take a look at available games</p>
            </NFTHeading>
            <NFTContent>
                <NFTMainCard>
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
            </NFTContent>
        </NFTContainer>
    )
}

export default NFTCollections
