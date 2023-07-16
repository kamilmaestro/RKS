import React from "react";
import {  Box } from '@mui/material';

const ContentRenderer = ({ article }) => {

  const putVideo = (url) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, marginBottom: 3 }}>
        <video controls>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    )
  }

  const splitContent = (content) => {
    return content.split(/(<video>.*?<\/video>|<image>.*?<\/image>)/);
  }

  return ( 
    <div>
      {splitContent(article.content).map((section, index) => {
        if (section.startsWith("<video>")) {
          const videoUrl = section.replace(/<\/?video>/g, "");
          console.log('sd: ', videoUrl)
          return (
            putVideo(videoUrl)
          );
        } else if (section.startsWith("<image>")) {
          const imageUrl = section.replace(/<\/?image>/g, "");
          return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, marginBottom: 3 }}>
              <img key={index} src={imageUrl} alt="Nie można wczytać" style={{maxWidth: '700px', height: 'auto', width: '100%'}} />
            </Box>
          )
        } else {
          return <p key={index} style={{ whiteSpace: 'pre-line' }}>{section}</p>;
        }
      })}
    </div>
   );
}
 
export default ContentRenderer;