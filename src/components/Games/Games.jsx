import React, {useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    GameEmpty,
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

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])

    return (
        <>
        <GameEmpty></GameEmpty>
        <GamesContainer id="games"  data-aos="fade-down">
            <GamesTextContent>
                <GamesText data-aos="fade-in">
                    <h1>Games</h1>
                    <p>Take a look at our upcoming games</p>
                </GamesText>
                <GamesImg>
                    <img 
                        src="./images/Games.svg"
                        alt="img" 
                    /> 
                </GamesImg>
            </GamesTextContent>

            <GamesBoxContainer>
                <GamesContent data-aos="fade-right">
                    <ContentImg>
                        <img 
                            src="./images/games 1.svg"
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
                                        src="./images/user-3.jpg"
                                        alt="img" 
                                    />
                                    <img 
                                        src="./images/user-4.jpg"
                                        alt="img" 
                                    /> 
                                    <img 
                                        src="./images/user-5.jpg"
                                        alt="img" 
                                    />  
                                </LeftImgConatiner>
                                <Views>24,543 active</Views>
                            </LeftImg>
                        </Left>
                        <Right>
                            {/* <FaPlayCircle style={{fontSize: '2rem', color: '#F87272'}}></FaPlayCircle> */}
                            <img 
                                        src="./images/video-circle.png"
                                        alt="img" 
                                    />  
                        </Right>
                    </ContentText>
                </GamesContent>

                <GamesContent data-aos="zoom-in">
                    <ContentImg>
                        <img 
                            src="./images/games 2.svg"
                            alt="img" 
                        /> 
                    </ContentImg>

                    <ContentText>
                        <Left>
                            <h4>Tic Tac Toe</h4>
                            <button>CROSSING</button>
                            <LeftImg>
                                <LeftImgConatiner>                    
                                    <img 
                                        src="./images/user-3.jpg"
                                        alt="img" 
                                    />
                                    <img 
                                        src="./images/user-4.jpg"
                                        alt="img" 
                                    /> 
                                    <img 
                                        src="./images/user-5.jpg"
                                        alt="img" 
                                    />  
                                </LeftImgConatiner>
                                <Views>24,543 active</Views>
                            </LeftImg>
                        </Left>
                        <Right>
                            {/* <FaPlayCircle style={{fontSize: '2rem', color: '#F87272'}}></FaPlayCircle> */}
                            <img 
                                        src="./images/video-circle.png"
                                        alt="img" 
                                    />  
                        </Right>
                    </ContentText>
                </GamesContent>

                <GamesContent data-aos="fade-left">
                    <ContentImg>
                        <img 
                            src="./images/games 3.svg"
                            alt="img" 
                        /> 
                    </ContentImg>

                    <ContentText>
                        <Left>
                            <h4>Connect 4</h4>
                            <button>CONNECTING</button>
                            <LeftImg>
                                <LeftImgConatiner>
                                    <img 
                                        src="./images/user-3.jpg"
                                        alt="img" 
                                    />
                                    <img 
                                        src="./images/user-4.jpg"
                                        alt="img" 
                                    /> 
                                    <img 
                                        src="./images/user-5.jpg"
                                        alt="img" 
                                    />  
                                </LeftImgConatiner>
                                <Views>24,543 active</Views>
                            </LeftImg>
                        </Left>
                        <Right>
                            <img 
                                        src="./images/video-circle.png"
                                        alt="img" 
                                    />  
                        </Right>
                    </ContentText>
                </GamesContent>
            </GamesBoxContainer>
        </GamesContainer>
        </>
    )
}

export default Games
