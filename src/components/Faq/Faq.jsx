import React, {useState, useEffect} from 'react'
import {FaqData} from './FaqData'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    FaqContainer,
    FaqText,
    FaqWrapper,
    FaqAccordion,
    FaqItem,
    FaqTitle,
    FaqContent
} from './FaqElements'

function Faq() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <FaqContainer id="faq"  data-aos="fade-down">
            <FaqText>FAQ</FaqText>
            <FaqWrapper>
                <FaqAccordion>
                    {FaqData.map((item, i) => (
                        <FaqItem data-aos="zoom-in">
                            <FaqTitle onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? '-' : '+'}</span>
                            </FaqTitle>
                            <FaqContent active={i} selected={selected}>{item.answer}</FaqContent>
                        </FaqItem>
                    ))}
                </FaqAccordion>
            </FaqWrapper> 
        </FaqContainer>
    )
}

export default Faq
