import React from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import { useMediaQuery, useTheme } from '@mui/material';

const PlayersList = ({players = [], columns = 3}) => {

  return (
    <ImageList sx={{maxWidth: 1250}} cols={columns}>
      {players.map((player, index) => (
        <ImageListItem key={index} sx={{marginLeft: 2, marginRight: 2}}>
          <img
            src={`${player.src ? player.src : 'player.png'}?w=248&fit=crop&auto=format`}
            srcSet={`${player.src ? player.src : 'player.png'}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={`${player.name} ${player.lastName}`}
            loading="lazy"
          />
          <ImageListItemBar
            title={`${player.name} ${player.lastName}`}
            subtitle={<span>{player.number}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PlayersList;