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
    Line,
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
                        <Line>
                            <Circle>01</Circle>
                        </Line>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <Line>
                            <Circle>02</Circle>
                        </Line>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentOne>
                        <Line>
                            <Circle>03</Circle>
                        </Line>
                        <TextContainer>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                            </p>
                        </TextContainer>
                    </RoadmapContentOne>

                    <RoadmapContentFour>
                        <Line>
                            <Circle>04</Circle>
                        </Line>
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
