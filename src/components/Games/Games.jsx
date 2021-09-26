import React from 'react'
import {BASE_URL} from '../../commonVariables'
import {FaPlayCircle} from 'react-icons/fa'

import {
    GamesContainer,
    GamesTextContent,
    GamesText,
    GamesImg,
    GamesBoxContainer,
    GamesContent,
    ContentImg,
    ContentText,
    Left,
    Right,
    LeftImgConatiner,
    LeftImg,
    Views
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
                    <ContentImg>
                        <img 
                            src={`${BASE_URL}/images/games 1.svg`}
                            alt="img" 
                        /> 
                    </ContentImg>

                    <ContentText>
                        <Left>
                            <h4>Typeracer</h4>
                            <button>TYPING</button>
                            <LeftImg>
                                <LeftImgConatiner>
                                    <img 
                                        src={`${BASE_URL}/images/user-3.jpg`}
                                        alt="img" 
                                    />
                                    <img 
                                        src={`${BASE_URL}/images/user-4.jpg`}
                                        alt="img" 
                                    /> 
                                    <img 
                                        src={`${BASE_URL}/images/user-5.jpg`}
                                        alt="img" 
                                    />  
                                </LeftImgConatiner>
                                <Views>24,543 active</Views>
                            </LeftImg>
                        </Left>
                        <Right>
                            <FaPlayCircle style={{fontSize: '2rem', color: '#F87272'}}></FaPlayCircle>
                        </Right>
                    </ContentText>
                </GamesContent>

                <GamesContent>
                    <ContentImg>
                        <img 
                            src={`${BASE_URL}/images/games 2.svg`}
                            alt="img" 
                        /> 
                    </ContentImg>

                    <ContentText>
                        <Left>
                            <h4>Typeracer</h4>
                            <button>TYPING</button>
                            <LeftImg>
                                <LeftImgConatiner>
                                    <img 
                                        src={`${BASE_URL}/images/user-3.jpg`}
                                        alt="img" 
                                    />
                                    <img 
                                        src={`${BASE_URL}/images/user-4.jpg`}
                                        alt="img" 
                                    /> 
                                    <img 
                                        src={`${BASE_URL}/images/user-5.jpg`}
                                        alt="img" 
                                    />  
                                </LeftImgConatiner>
                                <Views>24,543 active</Views>
                            </LeftImg>
                        </Left>
                        <Right>
                            <FaPlayCircle style={{fontSize: '2rem', color: '#F87272'}}></FaPlayCircle>
                        </Right>
                    </ContentText>
                </GamesContent>

                <GamesContent>
                    <ContentImg>
                        <img 
                            src={`${BASE_URL}/images/games 3.svg`}
                            alt="img" 
                        /> 
                    </ContentImg>

                    <ContentText>
                        <Left>
                            <h4>Typeracer</h4>
                            <button>TYPING</button>
                            <LeftImg>
                                <LeftImgConatiner>
                                    <img 
                                        src={`${BASE_URL}/images/user-3.jpg`}
                                        alt="img" 
                                    />
                                    <img 
                                        src={`${BASE_URL}/images/user-4.jpg`}
                                        alt="img" 
                                    /> 
                                    <img 
                                        src={`${BASE_URL}/images/user-5.jpg`}
                                        alt="img" 
                                    />  
                                </LeftImgConatiner>
                                <Views>24,543 active</Views>
                            </LeftImg>
                        </Left>
                        <Right>
                            <FaPlayCircle style={{fontSize: '2rem', color: '#F87272'}}></FaPlayCircle>
                        </Right>
                    </ContentText>
                </GamesContent>
            </GamesBoxContainer>
        </GamesContainer>
    )
}

export default Games
