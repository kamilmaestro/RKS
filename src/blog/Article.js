import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";
import { useLocation } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

const Article = ({ }) => {

  const location = useLocation();
  const { article } = location.state;

  const getTitle = (title) => {
    const words = title.split(' ');
    const last = words[words.length - 1]
    const wordsWithoutLast = words.slice(0, -1);

    return (
      <ToDoTitle style={{display: 'flex', justifyContent: 'center', fontFamily: 'Roboto'}}>
        {wordsWithoutLast}
        <span style={{marginLeft: 4}}/>
        <ColoredText> {last}</ColoredText>
      </ToDoTitle>
    )
  }

  return (
    <Layout title={'Blog'}>
      <ToDoContainer>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <img
            src={article ? article.imageUrl : ''}
            alt="Zdjęcie drużyny piłkarskiej"
            style={{maxWidth: '700px', maxHeight: '600px', height: 'auto', width: '100%'}}
          />
        </div>
        <div style={{width: '95%', marginBottom: 50, maxWidth: '1200px'}}>
          {article && getTitle(article.title)}
          {article && article.content}
        </div>
      </ToDoContainer>
    </Layout>
  );
};

export default Article;