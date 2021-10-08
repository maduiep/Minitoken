import React, {useEffect} from 'react'
import {BASE_URL} from '../../commonVariables'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    RoadEmpty,
    RoadmapContainer,
    RoadmapHeading,
    RoadmapImg,
    RoadmapTextContent,
    RoadmapMainContent,
    RoadmapContentOne,
    RoadmapContentFour,
    TextContainer,
    Line,
    Circle,
    
} from './RoadmapElements'

function Roadmap() {

    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return (
        <>
        <RoadEmpty></RoadEmpty>
        <RoadmapContainer id="roadmap"  data-aos="fade-down">
            <RoadmapHeading>
                <h4>Roadmap</h4>
                <p>Take a look at our available games</p>
            </RoadmapHeading>
            <RoadmapMainContent>
                <RoadmapImg>
                    <img data-aos="fade-left" data-aos-anchor-placement="top-bottom"
                        src={`${BASE_URL}/images/road-map-icon.png`}
                        alt="img" 
                    /> 
                </RoadmapImg>
                <RoadmapTextContent>

                    <RoadmapContentOne>
                        <Line data-aos="zoom-in">
                            <Circle>01</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <Line data-aos="zoom-in">
                            <Circle>02</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <Line data-aos="zoom-in">
                            <Circle>03</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentFour>
                        <Line data-aos="zoom-in">
                            <Circle>04</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentFour>

                </RoadmapTextContent>
            </RoadmapMainContent>
        </RoadmapContainer>
        </>
    )
}

export default Roadmap
