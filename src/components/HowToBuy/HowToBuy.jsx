import React from 'react'
import {
    HowToBuyContainer,
    HowToBuyRow,
    HowToBuyCard,
    HowToBuyHeading,
    HowToBuyRowOne,
    HowToBuyRowTwo,
    HowToBuyRowThree,
    ArrowRight,
    ArrowDowns,
    ArrowRightL,
    ArrowRightR,
    CardText,
    CardText2,
    CardText3
} from './HowToBuyElements'

function HowToBuy() {
    return (
        <HowToBuyContainer>
            <HowToBuyHeading>
                <h1>How to Buy</h1>
                <p>Take a look at our available games</p>
            </HowToBuyHeading>
            <HowToBuyRow>
                <HowToBuyRowOne>
                    <HowToBuyCard>
                        <CardText>
                            <p>1. Download Metamask or use an existing wallet.</p>
                            
                            <p>
                                Head to <span style={{color: ' #B98AFA'}}>metamask.io</span> and download
                                their wallet to your phone or chrome/firefox browser.
                            </p>
                        </CardText>
                    </HowToBuyCard>
                    <ArrowRight></ArrowRight>
                </HowToBuyRowOne>

                <HowToBuyRowTwo>
                    <HowToBuyCard>
                        <CardText2>
                            <p>2. Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText2>
                    </HowToBuyCard>
                    <ArrowRight></ArrowRight>
                </HowToBuyRowTwo>

                <HowToBuyRowThree>
                    <HowToBuyCard>
                        <CardText3>
                            <p>Send BNB to your Metamask wallet.</p>
                            
                            <p>
                                Buy <span style={{color: ' #B98AFA'}}>BNB</span> on BInance and send it to your BSC address on <span style={{color: ' #B98AFA'}}>Metamask</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                    <ArrowDowns></ArrowDowns>
                </HowToBuyRowThree>
            </HowToBuyRow>

            <HowToBuyRow style={{marginBottom: '2.5rem', marginTop: '3.5rem'}}>
                <HowToBuyRowOne style={{display: 'flex', flexDirection: 'column'}}>
                    <HowToBuyCard>
                        <CardText3>
                            <p>
                                Go to <span style={{color: ' #B98AFA'}}>Pancakeswap finance</span> and make sure it’s set to V2.
                            </p>
                            
                            <p>
                             Pancakeswap is where you swap your <span style={{color: '#F87272'}}>BNB</span> to <span style={{color: '#CDA771'}}>Game duck.</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                    <ArrowDowns></ArrowDowns>
                </HowToBuyRowOne>

                <HowToBuyRowTwo>
                    <ArrowRightL></ArrowRightL>
                    <HowToBuyCard>
                        <CardText3>
                            <p>Go to Trade, then select Exchange.</p>
                            
                            <p>
                                This is where you swap your <span style={{color: ' #B98AFA'}}>BNB</span> to <span style={{color: '#F87272'}}n>Game duck.</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                    <ArrowRightR></ArrowRightR>
                </HowToBuyRowTwo>

                <HowToBuyRowThree>
                    <HowToBuyCard style={{marginBottom: '4.5rem'}}>
                        <CardText3>
                            <p>Send BNB to your Metamask wallet.</p>
                            
                            <p>
                                Buy <span style={{color: ' #B98AFA'}}>BNB</span> on BInance and send it to your BSC address on <span style={{color: ' #B98AFA'}}>Metamask</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowThree>
            </HowToBuyRow>

            <HowToBuyRow>
                <HowToBuyRowOne>
                    <HowToBuyCard>
                        <CardText3>
                            <p>Send BNB to your Metamask wallet.</p>
                            
                            <p>
                                Buy <span style={{color: ' #B98AFA'}}>BNB</span> on BInance and send it to your BSC address on <span style={{color: ' #B98AFA'}}>Metamask</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                    <ArrowRight></ArrowRight>
                </HowToBuyRowOne>

                <HowToBuyRowTwo>
                    <HowToBuyCard>
                        <CardText3>
                            <p>Send BNB to your Metamask wallet.</p>
                            
                            <p>
                                Buy <span style={{color: ' #B98AFA'}}>BNB</span> on BInance and send it to your BSC address on <span style={{color: ' #B98AFA'}}>Metamask</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                    <ArrowRight></ArrowRight>
                </HowToBuyRowTwo>

                <HowToBuyRowThree>
                    <HowToBuyCard>
                        <CardText3>
                            <p>Send BNB to your Metamask wallet.</p>
                            
                            <p>
                                Buy <span style={{color: ' #B98AFA'}}>BNB</span> on BInance and send it to your BSC address on <span style={{color: ' #B98AFA'}}>Metamask</span>
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowThree>
            </HowToBuyRow>
        </HowToBuyContainer>
    )
}

export default HowToBuy
