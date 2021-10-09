import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    HowEmpty,
    HowToBuyContainer,
    HowToBuyRow,
    HowToBuyCard,
    HowToBuyHeading,
    HowToBuyRowOne,
    HowToBuyRowTwo,
    HowToBuyRowThree,
    CardText,
    CardText2,
    CardText3
} from './HowToBuyElements'

function HowToBuy() {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <>
        <HowEmpty></HowEmpty>
        <HowToBuyContainer id="howtobuy"  data-aos="fade-down">
            <HowToBuyHeading data-aos="zoom-in">
                <h1>How to Buy</h1>
                <p>Take a look at our available games</p>
            </HowToBuyHeading>
            <HowToBuyRow>
                <HowToBuyRowOne data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText>
                            <p>
                                <span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>1.</span> Download Metamask or use an existing wallet.
                            </p>
                            
                            <p>
                                Head to 
                                <span style={{color: ' #B98AFA'}}>
                                    metamask.io
                                </span> and download
                                their wallet to your phone or chrome/firefox browser.
                            </p>
                        </CardText>
                    </HowToBuyCard>
                </HowToBuyRowOne>

                <HowToBuyRowTwo data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText2>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>2.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText2>
                    </HowToBuyCard>
                </HowToBuyRowTwo>

                <HowToBuyRowThree data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>3.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowThree>
            </HowToBuyRow>

            <HowToBuyRow>
                <HowToBuyRowOne data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>4.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowOne>

                <HowToBuyRowTwo data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>5.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowTwo>

                <HowToBuyRowThree data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>6.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowThree>
            </HowToBuyRow>

            <HowToBuyRow>
                <HowToBuyRowOne data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>7.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowOne>

                <HowToBuyRowTwo data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>8.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowTwo>

                <HowToBuyRowThree data-aos="fade-down" data-aos-easing="linear">
                    <HowToBuyCard>
                        <CardText3>
                            <p><span style={{fontSize: '22px', fontWeight: 'bold', color: '#F97272'}}>9.</span> Add the BSC network to your metamask.</p>
                            
                            <p>
                            Open the <span style={{color: ' #B98AFA'}}>metamask</span> extension and open up “Main Network”, select “Custom RPC” and put in the BSC network information.
                            </p>
                        </CardText3>
                    </HowToBuyCard>
                </HowToBuyRowThree>
            </HowToBuyRow>
        </HowToBuyContainer>
        </>
    )
}

export default HowToBuy
