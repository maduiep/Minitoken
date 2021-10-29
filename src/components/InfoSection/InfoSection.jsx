import React, {useEffect} from 'react'
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
                           A simple <span>play </span> to <span>earn</span> gaming experience.
                           {/* <span>It’s Free!</span> */}
                           </h1>
                       </InfoHeading>
                       <InfoPara>
                           <p>
                           A straight forward play to earn gaming experience where skills matter, say goodbye to RNG.
 
                           </p>
                       </InfoPara>
                       <InfoBtns>
                            <InfoBtnMain to="getstarted">
                               <Textdiv>Coming Soon!</Textdiv>
                                   
                            {/* <img 
                                src="./images/arrow-right.svg" width="28px"
                                alt="img" 
                            />   */}
                            </InfoBtnMain>
                            <InfoBtn2Link to="login">Telegram</InfoBtn2Link>
                       </InfoBtns>
                   </InfoText>
                    <ImgConatiner>
                        <Img data-aos="fade-left"
                            src="./images/hero-image.png"
                            alt="img" 
                        /> 
                    </ImgConatiner>                        
               </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection