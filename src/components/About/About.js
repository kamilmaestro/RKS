import React from "react";
import {AboutInfo, AboutSection, AboutTitle, FaqContainer} from "./About.styles";
import ColoredText from "../ColoredText/ColoredText";
import FaqItem from "../FaqItem/FaqItem";
import {useInView} from "react-intersection-observer";
import SectionTag from "../SectionTag/SectionTag";

const About = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <AboutSection ref={ref}>
            <AboutTitle>{' O naszym '}<ColoredText>{'klubie'}</ColoredText></AboutTitle>
            <FaqContainer>
                <FaqItem type={'add'} animate={inView}/>
                <FaqItem type={'manage'} animate={inView}/>
                <FaqItem type={'summary'} animate={inView}/>
            </FaqContainer>
            
        </AboutSection>
    );
};

export default About;
