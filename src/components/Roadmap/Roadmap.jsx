import React from 'react'
import {BASE_URL} from '../../commonVariables'

import {
    RoadmapContainer,
    RoadmapHeading,
    RoadmapImg,
    RoadmapTextContent,
    RoadmapMainContent,
    RoadmapContentOne,
    RoadmapContentFour,
    TextContainer,
    LineOne,
    LineTwo,
    LineThree,
    LineFour,
    Circle,
} from './RoadmapElements'

function Roadmap() {
    return (
        <RoadmapContainer>
            <RoadmapHeading>
                <h4>Roadmap</h4>
                <p>Take a look at our available games</p>
            </RoadmapHeading>
            <RoadmapMainContent>
                <RoadmapImg>
                    <img 
                        src={`${BASE_URL}/images/road-map-icon.png`}
                        alt="img" 
                    /> 
                </RoadmapImg>
                <RoadmapTextContent>

                    <RoadmapContentOne>
                        <LineOne>
                            <Circle>01</Circle>
                        </LineOne>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <LineTwo>
                            <Circle>02</Circle>
                        </LineTwo>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <LineThree>
                            <Circle>03</Circle>
                        </LineThree>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentFour>
                        <LineFour>
                            <Circle>04</Circle>
                        </LineFour>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentFour>

                </RoadmapTextContent>
            </RoadmapMainContent>
        </RoadmapContainer>
    )
}

export default Roadmap
