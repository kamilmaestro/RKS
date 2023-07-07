import React from "react";
import Layout from "../../components/Layout/Layout";
import SectionContainer from "../../components/Section/SectionContainer";
import SectionTitle from "../../components/Section/SectionTitle";
import ColoredText from "../../components/ColoredText/ColoredText";
import SectionText from "../../components/Section/SectionText";
import SectionTag from "../../components/SectionTag/SectionTag";
import {RedirectButton} from "./NotFound.styles";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <Layout title={'404'}>
            <SectionContainer>
                <Link to={'/'}> 
                    <SectionTitle>
                        {'Nie ma takiej'}
                        <ColoredText>{' strony'}</ColoredText>
                    </SectionTitle> 
                    <SectionText> {'Jak awansujemy to kto wie...'} </SectionText> 
                </Link>
            </SectionContainer>
        </Layout>
    );
};

export default NotFound;
