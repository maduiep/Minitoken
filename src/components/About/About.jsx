import React from 'react'
import {BASE_URL} from '../../commonVariables'

import {
    AboutContainer,
    AboutWrapper,
    AboutImg,
    AboutContentWrap,
    AboutLink
} from './AboutElements'

function About() {
    return (
        <>
            <AboutContainer>
                <AboutWrapper>
                    <h2>About Minitoken</h2>
                    <AboutImg>
                        <img 
                            src={`${BASE_URL}/images/Group 18.svg`}
                            alt="img" 
                        /> 

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orc
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </AboutImg>
                    <AboutContentWrap>
                            <AboutLink to="viewmore">View More</AboutLink>
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
