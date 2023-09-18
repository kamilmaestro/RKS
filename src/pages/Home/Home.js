import React from "react";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
import About from "../../components/About/About";
import Layout from "../../components/Layout/Layout";
import NextMatch from "../../schedule/NextMatch";
import YouTubeSection from "../../youtube/YouTubeSection";
import SectionsContainer from "../../detailsSections/SectionsContainer";

const Home = () => {
    return (
        <Layout title={'Start'}>
            <VideoBackground/>
            <NextMatch/>
            <SectionsContainer/>
            <About/>
            <YouTubeSection/>
        </Layout>
    );
};

export default Home;
