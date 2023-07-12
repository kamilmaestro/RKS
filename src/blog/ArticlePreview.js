import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import LinesEllipsis from 'react-lines-ellipsis'
import './ArticlesList.styles.css';
import {Link} from "react-router-dom";

const ArticlePreview = ({ article }) => {

  const formatDate = (article) => {
    const milliseconds = article.createdAt.seconds * 1000 + article.createdAt.nanoseconds / 1e6;
    const dateObj = new Date(milliseconds);
    const formattedDate = dateObj.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });

    return formattedDate
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={'card'}>
        <CardActionArea>
          <Link to={{
            pathname: `/article`,
            state: { article: article },
          }} style={{ textDecoration: 'none', color: 'inherit'}}>
            <CardMedia
              className={'media'}
              image={article ? article.imageUrl : "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
              title="Contemplative Reptile"
            />
            <CardContent className='content'>
              <Typography gutterBottom variant="h5" component="h2">
                {article ? article.title : 'Artykuł'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                {article ? 
                  <LinesEllipsis
                    text={article.content}
                    maxLine='4'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                : '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doucia deseruid est laborum."'}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions className={'cardActions'}>
          <Box className={'author'}>
            <Box ml={1}>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                {article ? formatDate(article) : ' '}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticlePreview;