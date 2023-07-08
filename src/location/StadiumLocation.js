import React from "react";
import Layout from "../components/Layout/Layout";
import { useMediaQuery, useTheme } from '@mui/material';
import { FacebookProvider, Page } from 'react-facebook';
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";

const StadiumLocation = () => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Layout title={'Rozgrywki'}>
      <ToDoContainer>
        <ToDoTitle>
          Lokalizacja
          <ColoredText> stadionu</ColoredText>
        </ToDoTitle>

        <div style={{ width: isLargeScreen ? '90%' : '100%', height: isLargeScreen ? '500px' : '400px' }}>
          <iframe 
            title="Lokalizacja stadionu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20427.35383381381!2d21.109055568174195!3d50.209385880269956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d7b7a113a7757%3A0x852714d1fe1a0a93!2sStadion%20RKS%20Radgoszcz!5e0!3m2!1spl!2spl!4v1688721894537!5m2!1spl!2spl" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
          />
        </div>

        <ToDoTitle>
          Zapraszamy na nasz
          <ColoredText> fanpage</ColoredText>
        </ToDoTitle>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 50}}> 
          <iframe 
            title="RKS"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057141112887&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="500" height="600" 
            style={{ border: 'none', overflow: 'hidden', maxWidth: '95%' }} 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            >
          </iframe>
        </div>

      </ToDoContainer>
    </Layout>
  );
};

export default StadiumLocation;