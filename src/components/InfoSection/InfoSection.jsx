// import React from 'react'
// import {Button, Button2} from '../ButtonElements'
// // import {BASE_URL} from '../../commonVariables'

// import {
//     InfoContainer,
//     InfoWrapper,
//     InfoRow,
//     Column1,
//     TextWrapper,
//     Heading,
//     Subtitle,
//     BtnWrap,
//     Column2,
//     ImgWrap,
//     Img
// } c

// import { FaGooglePlay } from 'react-icons/fa'

// function InfoSection({lightBg, imgStart, id, lightText, headline, darkText, description, buttonLabel, buttonLabel2, img, alt, primary, dark, dark2,fontSize}) {
//     return (
//         <>
//           <InfoContainer lightBg={lightBg} id={id}>
//                 <InfoWrapper>
//                     <InfoRow imgStart={imgStart}>
//                         <Column1>
//                             <TextWrapper>
//                                 <Heading lightText={lightText}>{headline}</Heading>
//                                 <Subtitle darkText={darkText}>{description}</Subtitle>
//                                 <BtnWrap>
//                                     <Button to="home"
//                                         smooth={true}
//                                         duration={500}
//                                         spy={true}
//                                         exact={true}
//                                         offset={-80}
//                                         primary={primary ? 1 : 0}
//                                         dark={dark ? 1 : 0}
//                                         dark2={dark2 ? 1 : 0}
//                                         fontSize={fontSize}
//                                     >
//                                         {buttonLabel}
//                                         <FaGooglePlay style={{paddingTop: '5px', paddingLeft: '10px', }}/>
//                                     </Button>

//                                     <Button2 to="home"
//                                         smooth={true}
//                                         duration={500}
//                                         spy={true}
//                                         exact={true}
//                                         offset={-80}
//                                         primary={primary ? 1 : 0}
//                                         dark={dark ? 1 : 0}
//                                         dark2={dark2 ? 1 : 0}

//                                     >
//                                         {buttonLabel2}
//                                     </Button2>
//                                 </BtnWrap>
//                             </TextWrapper>
//                         </Column1>

//                         <Column2>
//                             <ImgWrap>
//                             {/* <img className="userList__profile"
//                                 src={`${BASE_URL}/images/Group 496.svg`}
//                                 alt="img" 
//                             /> */}
//                             <Img src={img} alt={alt}/>
//                             </ImgWrap>
//                         </Column2>
//                     </InfoRow>
//                 </InfoWrapper>
//           </InfoContainer>  
//         </>
//     )
// }

// export default InfoSection
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
                                   <DownloadIcon />
                                </button>
                           </InfoBtn1Link>
                           <InfoBtn2Link to="login">Login</InfoBtn2Link>
                       </InfoBtns>
                   </InfoText>
                   <ImgContainer>
                   <img 
                    src={`${BASE_URL}/images/Group 496.svg`}
                    alt="img" />                          
                   </ImgContainer>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
