import React from "react";
import {
    IntroContainer,
    IntroLogo,
    PageQuote,
    StartButton,
    VideoBg,
    VideoContainer,
    VideoSrc
} from "./VideoBackground.styles";
import ColoredText from "../ColoredText/ColoredText";

const VideoBackground = () => {
    return (
        <VideoContainer>
            <VideoBg autoPlay muted loop>
                <VideoSrc src={'/rks2.mp4'} type={'video/mp4'}/>
            </VideoBg>
            <IntroContainer>
                <IntroLogo/>
                <PageQuote>{' Amatorska drużyna piłkarska założona w 2001 roku'}</PageQuote>
                <StartButton to={'//www.facebook.com/profile.php?id=100057141112887'}>{'Najnowsze wiadomości'}</StartButton>
            </IntroContainer>
        </VideoContainer>
    );
};

export default VideoBackground;
