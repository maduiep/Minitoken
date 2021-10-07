import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    DownloadContainer,
    DownloadContent,
    DownloadText,
    DownloadBtnContainer
} from './DownloadElements'

function Download() {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <DownloadContainer>
            <DownloadContent >
                <DownloadText data-aos="fade-left">
                    <h1>Download whitepaper</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in <br/> vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                    </p>
                </DownloadText>
                <DownloadBtnContainer data-aos="fade-right">
                    <button>Download PDF</button>
                </DownloadBtnContainer>
            </DownloadContent>
        </DownloadContainer>
    )
}

export default Download
