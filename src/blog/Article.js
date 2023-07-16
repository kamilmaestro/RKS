import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import ContentRenderer from "./ContentRenderer";

const Article = () => {

  const location = useLocation();
  const { article } = location.state;

  const getTitle = (title) => {
    const words = title.split(' ');
    const last = words[words.length - 1];
    const wordsWithoutLast = words.slice(0, -1).join(' ');

    return (
      <ToDoTitle style={{display: 'flex', justifyContent: 'center', fontFamily: 'Roboto'}}>
        <p style={{textAlign: 'center'}}>
          <span>{wordsWithoutLast}</span>{" "}
          <span style={{ color: "#8F0406" }}>{last}</span>
        </p>
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
        <div style={{width: '95%', marginBottom: 150, maxWidth: '1200px'}}>
          {article && getTitle(article.title)}
          { article && <ContentRenderer article={article} /> }
        </div>
      </ToDoContainer>
    </Layout>
  );
};

export default Article;