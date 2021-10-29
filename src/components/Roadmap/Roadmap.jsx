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
        Aos.init({duration: 1500})
    }, [])

    return (
        <>
        <RoadEmpty></RoadEmpty>
        <RoadmapContainer id="roadmap"  data-aos="fade-down">
            <RoadmapHeading>
                <h4>Roadmap</h4>
                <p>Take a look at our roadmap.</p>
            </RoadmapHeading>
            <RoadmapMainContent>
                <RoadmapImg>
                    <img data-aos="fade-left" data-aos-anchor-placement="top-bottom"
                        src="./images/road-map-icon.png"
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
                            The first step of Savaya will be launching the NFT collection.
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <Line data-aos="zoom-in">
                            <Circle>02</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            After our NFT launch, we'll be hiring our developers full time.
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <Line data-aos="zoom-in">
                            <Circle>03</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            Within the span of a few months, we will be launching our platform and games.
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentFour>
                        <Line data-aos="zoom-in">
                            <Circle>04</Circle>
                        </Line>
                        <TextContainer data-aos="fade-right">
                            <p>
                            Advertising our platform on YouTube, anyone with a following will be interested in our server hosting affiliate marketing plan.
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
