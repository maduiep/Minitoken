import React from 'react'
import {BASE_URL} from '../../commonVariables'
import {
    InfoContainer,
    InfoWrapper,
    InfoText,
    InfoHeading,
    InfoPara,
    InfoBtns,
    InfoBtn2Link,
    ImgContainer,
    InfoBtnMain,
    Textdiv

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
                            <InfoBtnMain to="getstarted">
                               <Textdiv>Get Started</Textdiv>
                                   
                            <img 
                                src={`${BASE_URL}/images/arrow-right.svg`} width="28px"
                                alt="img" 
                            />  
                            </InfoBtnMain>
                            <InfoBtn2Link to="login">Login</InfoBtn2Link>
                       </InfoBtns>
                   </InfoText>
                   <ImgContainer>
                    <img 
                        src={`${BASE_URL}/images/hero-image.png`}
                        alt="img" 
                    />                         
                   </ImgContainer>
               </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
