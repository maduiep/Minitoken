import React from 'react'
import {
    DownloadContainer,
    DownloadContent,
    DownloadText,
    DownloadBtnContainer
} from './DownloadElements'

function Download() {
    return (
        <DownloadContainer>
            <DownloadContent>
                <DownloadText>
                    <h1>Download whitepaper</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci facilisis in <br/> vitae. Porttitor massa elementum, risus ultrices elementum. Lorem ipsum 
                    </p>
                </DownloadText>
                <DownloadBtnContainer>
                    <button>Download PDF</button>
                </DownloadBtnContainer>
            </DownloadContent>
        </DownloadContainer>
    )
}

export default Download
