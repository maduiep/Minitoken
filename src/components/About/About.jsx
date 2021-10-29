import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    AboutContainer,
    AboutWrapper,
    AboutImg,
    AboutContentWrap,
    AboutLink,
    AboutEmpty
} from './AboutElements'

function About() {

    useEffect(() => {
        Aos.init({duration: 500})
    }, [])


    return (
        <>
            <AboutEmpty></AboutEmpty>
            <AboutContainer  data-aos="fade-down">
                <AboutWrapper id="about">
                    <h2 data-aos="fade-in">About Savaya</h2>
                    <AboutImg>
                        <img data-aos="fade-up"
                            src="./images/Group 18.svg"
                            alt="img" 
                        /> 

                        <p data-aos="fade-left">
                        Savaya was created to fill a void in the crypto gaming space. If you're like me, you'd like to play to earn, who wouldn't, right? The problem right now is that games have set a high standard for themselves, development takes ages. Although there are alternatives such as RNG-games like Roobet, you can't really decide if you win or not. It's all RNG based. Savaya offers a simple skill based play to earn solution. And unlike other games, with Savaya, you can earn without playing. Create your own server on our site and earn a passive income from games played inside your server. 
                        </p>
                    </AboutImg>
                    <AboutContentWrap>
                        {/* <AboutLink>View More</AboutLink> */}
                        <img style={{marginTop: '15rem !important'}} 
                            src="./images/Frame 13.svg"
                            alt="img" 
                        /> 
                    </AboutContentWrap>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
