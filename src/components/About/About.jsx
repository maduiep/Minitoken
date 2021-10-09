import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
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
                    <h2 data-aos="fade-in">About Minitoken</h2>
                    <AboutImg>
                        <img data-aos="fade-up"
                            src={`${BASE_URL}/images/Group 18.svg`}
                            alt="img" 
                        /> 

                        <p data-aos="fade-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orc
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </AboutImg>
                    <AboutContentWrap>
                        <AboutLink>View More</AboutLink>
                        <img style={{marginTop: '15rem !important'}} 
                            src={`${BASE_URL}/images/Frame 13.svg`}
                            alt="img" 
                        /> 
                    </AboutContentWrap>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
