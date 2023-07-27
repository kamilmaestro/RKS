import React from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery, useTheme } from '@mui/material';

const YouTubeVideo = ({ videoId }) => {

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const opts = {
    width: isSmallScreen ? '350' : '450',
    height: isSmallScreen ? '250' : '300',
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  const getWidth = () => {
    return isSmallScreen ? '325' : '575';
  }

  const getHeight = () => {
    return isSmallScreen ? '225' : '400';
  }

  // return <YouTube videoId={videoId} opts={isMediumScreen ? opts : {}} onReady={onReady} />;
  return (
    <div >
      <iframe
        width={getWidth()}
        height={getHeight()}
        src={`https://www.youtube-nocookie.com/embed/${videoId}?wmode=transparent`}
        allowFullScreen
        style={{border: 0}}
      ></iframe>
  </div>
  );
};

export default YouTubeVideo;