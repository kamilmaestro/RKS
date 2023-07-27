import React, { useRef, useEffect, useState } from 'react';
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

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [maxLines, setMaxLines] = useState(1);

  useEffect(() => {
    const containerHeight = containerRef.current.clientHeight;
    const titleHeight = titleRef.current.clientHeight;
    const availableSpace = containerHeight - titleHeight;
    const lineHeight = parseInt(getComputedStyle(titleRef.current).lineHeight, 10);
    const calculatedMaxLines = Math.floor(availableSpace / lineHeight);
    
    setMaxLines(calculatedMaxLines > 5 ? 5 : calculatedMaxLines);
  }, []);

  const getPreview = (content) => {
    const videoRegex = /<video>(.*?)<\/video>/g;
    const imageRegex = /<image>(.*?)<\/image>/g;
    const cleanedContent = content.replace(videoRegex, '').replace(imageRegex, '');
  
    return cleanedContent
  }

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
            pathname: `/article/${article.id}`,
            state: { article: article },
          }} style={{ textDecoration: 'none', color: 'inherit'}}>
            <CardMedia
              className={'media'}
              image={article ? article.imageUrl : ""}
              title="Artykuł"
            />
            <CardContent className='content' ref={containerRef}>
              <Typography gutterBottom variant="h5" component="h2" ref={titleRef} >
                {article ? article.title : 'Artykuł'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" sx={{flex: 1}} >
                {article ? 
                  <LinesEllipsis
                    text={getPreview(article.content)}
                    maxLine={maxLines}
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                : ''}
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