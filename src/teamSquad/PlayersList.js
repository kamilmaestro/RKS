import React from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ColoredText from "../components/ColoredText/ColoredText";


const PlayersList = ({players = [], columns = 3}) => {

  return (
    <ImageList sx={{maxWidth: 1250}} cols={columns}>
      {players.map((player, index) => (
        <ImageListItem key={index} sx={{margin: 2}}>
          <Card sx={{ maxWidth: 400, width: 350 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={`${player.src ? player.src : 'player.png'}?w=248&fit=crop&auto=format`}
              title={`${player.name} ${player.lastName}`}
            />
            <CardContent sx={{display: 'flex'}}>
              <Typography variant="h5" color="#8F0406" sx={{marginRight: 1.5, fontSize: 34, lineHeight: 1.05}} >
                {player.number}
              </Typography>
              <Typography gutterBottom variant="h5" sx={{fontSize: 18}} >
                {`${player.name} ${player.lastName}`}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small" sx={{color:'#161c2e'}}>Zostań fanem</Button>
            </CardActions> */}
          </Card>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PlayersList;