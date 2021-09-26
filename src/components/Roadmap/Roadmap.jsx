import React from 'react'
import {BASE_URL} from '../../commonVariables'
import {
    RoadmapContainer,
    RoadmapHeading,
    RoadmapImg,
    RoadmapTextContent,
    RoadmapMainContent,
    TextContainer
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
                        src={`${BASE_URL}/images/map-route.svg`}
                        alt="img" 
                    /> 
                </RoadmapImg>
            
                <RoadmapTextContent>
                    <TextContainer>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                        </p>
                    </TextContainer>

                    <TextContainer>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                        </p>
                    </TextContainer>

                    <TextContainer>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                        </p>
                    </TextContainer>

                    <TextContainer>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                        </p>
                    </TextContainer>
                </RoadmapTextContent>
            </RoadmapMainContent>
        </RoadmapContainer>
    )
}

export default Roadmap
