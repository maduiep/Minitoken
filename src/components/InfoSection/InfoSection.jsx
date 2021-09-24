import React from 'react'
import {BASE_URL} from '../../commonVariables'
import {
    InfoContainer,
    InfoWrapper,
    InfoText,
    InfoHeading,
    InfoPara,
    InfoBtns,
    InfoBtn1Link,
    InfoBtn2Link,
    ImgContainer,
    DownloadIcon
} from './InfoElements'

function InfoSection() {
    return (
        <>
           <InfoContainer>
               <InfoWrapper>
                   <InfoText>
                       <InfoHeading>
                           <h1>
                           Be a part of an NFT gaming experience. Ready to join? <span>It’s Free!</span>
                           </h1>
                       </InfoHeading>
                       <InfoPara>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa 
                           </p>
                       </InfoPara>
                       <InfoBtns>
                           <InfoBtn1Link>
                               <button to="getstarted">
                                   Get Started
                                   <img
                                   src={`${BASE_URL}/images/arrow-right.svg`}
                                   alt="img" /> 
                                   
                                </button>
                           </InfoBtn1Link>
                           <InfoBtn2Link to="login">Login</InfoBtn2Link>
                       </InfoBtns>
                   </InfoText>
                   <ImgContainer>
                   <img 
                    src={`${BASE_URL}/images/game-pad.png`}
                    alt="img" />                          
                   </ImgContainer>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
