import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";
import { Grid, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { TEAM } from "../data/playersData";
import PlayersList from "./PlayersList";
import FormationTitle from "./FormationTitle";
import { useMediaQuery, useTheme } from '@mui/material';

const TeamSquad = () => {

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const columns = isMediumScreen ? 
    1 
    : isLargeScreen ? 2 : 3;

  return (
    <Layout title={'Kadra'}>
      <ToDoContainer>
        <ToDoTitle>
          Kadra - sezon
          <ColoredText> 2023/2024</ColoredText>
        </ToDoTitle>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: 20}}>
          <img
            src="team.jpg"
            alt="Zdjęcie drużyny piłkarskiej"
            style={{maxWidth: '95%', height: 'auto'}}
          />
        </div>

        <FormationTitle title="Sztab"/>
        <ImageList sx={{maxWidth: 1250}} cols={columns}>
          {TEAM.staff.map((item) => (
            <ImageListItem key={item.img} sx={{marginLeft: 2, marginRight: 2}}>
              <img
                src={`${'durbas.jpg'}?w=248&fit=crop&auto=format`}
                srcSet={`${'durbas.jpg'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.description}
                loading="lazy"
              />
              <ImageListItemBar
                title={`${item.name} ${item.lastName}`}
                subtitle={<span>{item.position}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <FormationTitle title="Bramkarze"/>
        <PlayersList players={TEAM.goalkeepers} columns={columns} />

        <FormationTitle title="Obrońcy"/>
        <PlayersList players={TEAM.defenders} columns={columns} />

        <FormationTitle title="Pomocnicy"/>
        <PlayersList players={TEAM.midfielders} columns={columns} />

        <FormationTitle title="Napastnicy"/>
        <PlayersList players={TEAM.attackers} columns={columns} />

        {/* <Grid container spacing={2} sx={{maxWidth: 1368}}>
          {photos.map((photo, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img src={photo.src} alt={`Zdjęcie ${index + 1}`} style={{ width: '100%' }} />
              <Typography variant="caption">{photo.description}</Typography>
            </Grid>
          ))}
        </Grid> */}
      </ToDoContainer>
    </Layout>
  );
};

export default TeamSquad;