import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    InfoEmpty,
    InfoContainer,
    InfoWrapper,
    InfoText,
    InfoHeading,
    InfoPara,
    InfoBtns,
    InfoBtn2Link,
    ImgConatiner,
    Img,
    InfoBtnMain,
    Textdiv

} from './InfoElements'

function InfoSection() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <>
            <InfoEmpty></InfoEmpty>
           <InfoContainer id="info" data-aos="fade-down">
               <InfoWrapper>
                   <InfoText data-aos="fade-right" data-aos-anchor-placement="top-bottom">
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
                    <ImgConatiner>
                        <Img data-aos="fade-left"
                            src={`${BASE_URL}/images/hero-image.png`}
                            alt="img" 
                        /> 
                    </ImgConatiner>                        
               </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection