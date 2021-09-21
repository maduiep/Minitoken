import React from 'react'

import {
    GamesContainer,
    GamesTextContent,
    GamesText,
    GamesImg
} from './GamesElements'

function Games() {
    return (
        <GamesContainer>
            <GamesTextContent>
                <GamesText>
                    <h4>Games</h4>
                    <p>Take a look at our available games</p>
                </GamesText>
                <GamesImg></GamesImg>
            </GamesTextContent>
        </GamesContainer>
    )
}

export default Games
