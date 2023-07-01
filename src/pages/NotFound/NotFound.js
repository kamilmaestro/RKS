import React from "react";
import Layout from "../../components/Layout/Layout";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionTitle from "../../components/Section/SectionTitle";
import ColoredText from "../../components/ColoredText/ColoredText";
import SectionText from "../../components/Section/SectionText";
import SectionTag from "../../components/SectionTag/SectionTag";
import {RedirectButton} from "./NotFound.styles";

const NotFound = () => {
    return (
        <Layout title={'404'}>
            <SectionContainer>
                <SectionTitle>
                    <ColoredText>{'// '}</ColoredText>
                    {'Page'}
                    <ColoredText>{' not found'}</ColoredText>
                </SectionTitle>
                <SectionText>{'Nie ma takiej strony'}</SectionText>
                <RedirectButton to={'/'}>{'Back to the main page'}</RedirectButton>
            </SectionContainer>
        </Layout>
    );
};

export default NotFound;
