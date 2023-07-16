import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import './ArticlesList.styles.css';
import ArticlePreview from './ArticlePreview';

const ArticlesList = ({ articles }) => {

  const getArticleWithContent = (article) => {
    return {
      ...article,
      content: article.content.replaceAll('\\n', '\n')
    };
  }

  return (
    <>
      <Container maxWidth="lg" className={'blogsContainer'}>
        <Grid container spacing={3}>
          {
            articles.map((article, index) => (
              <ArticlePreview article={getArticleWithContent(article)} key={index}/>
            ))
          }
        </Grid>
        <Box my={6} className={'paginationContainer'}>
          <Pagination count={1} />
        </Box>
      </Container>
    </>
  );
};

export default ArticlesList;