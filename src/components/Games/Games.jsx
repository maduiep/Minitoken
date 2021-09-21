import React from 'react'
import {BASE_URL} from '../../commonVariables'

import {
    GamesContainer,
    GamesTextContent,
    GamesText,
    GamesImg,
    GamesBoxContainer,
    GamesContent,
    GamesContentCenter,
    GameImage
} from './GamesElements'

function Games() {
    return (
        <GamesContainer>
            <GamesTextContent>
                <GamesText>
                    <h4>Games</h4>
                    <p>Take a look at our available games</p>
                </GamesText>
                <GamesImg>
                <img 
                    src={`${BASE_URL}/images/Games.svg`}
                    alt="img" 
                /> 
                </GamesImg>
            </GamesTextContent>

            <GamesBoxContainer>
                <GamesContent>

                </GamesContent>

                <GamesContentCenter>

                </GamesContentCenter>

                <GamesContent>

                </GamesContent>
            </GamesBoxContainer>
            <GameImage>
            <img 
                src={`${BASE_URL}/images/Frame 13.svg`}
                alt="img" 
            /> 
            </GameImage>
        </GamesContainer>
    )
}

export default Games
