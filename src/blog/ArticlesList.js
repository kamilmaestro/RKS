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

  return (
    <>
      <Container maxWidth="lg" className={'blogsContainer'}>
        <Grid container spacing={3}>
          {
            articles.map((article, index) => (
              <ArticlePreview article={article} key={index + 21}/>
            ))
          }
          <ArticlePreview key={21}/>
          <ArticlePreview key={22}/>
          <ArticlePreview key={23}/>
          <ArticlePreview key={24}/>
          <ArticlePreview key={25}/>
          <ArticlePreview key={26}/>
          <ArticlePreview key={27}/>
          <ArticlePreview key={28}/>
        </Grid>
        <Box my={4} className={'paginationContainer'}>
          <Pagination count={10} />
        </Box>
      </Container>
    </>
  );
};

export default ArticlesList;