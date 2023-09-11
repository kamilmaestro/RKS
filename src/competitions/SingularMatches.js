import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Icon } from '@mui/material';
import ColoredText from "../components/ColoredText/ColoredText";
import { useMediaQuery, useTheme } from '@mui/material';

const SingularMatches = ({ schedule = [] }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const convertScore = (score) => {
    return score.split('-').join(' : ')
  }

  const getIndex = () => {
    if (!schedule) {
      return 1
    }
    let lastMatchWithScore = null;
    for (let i = schedule.length - 1; i >= 0; i--) {
      if (schedule[i].score !== '-') {
        lastMatchWithScore = schedule[i];
        break;
      }
    }

    return lastMatchWithScore.round - 1
  }

  return (
    <div className='singular-container' style={{width: "100%", maxWidth: 1000}}>
      <Carousel 
        sx={{marginBottom: 25}} 
        navButtonsAlwaysVisible 
        cycleNavigation = {false} 
        index={getIndex()} 
        autoPlay = {false}
        fullHeightHover = {false}
        navButtonsProps={{ style: { color: 'white', backgroundColor: '#161c2e' } }} //#161c2e  #8F0406
      >
        {
          schedule && schedule.map((fixture, index) => (
            <div key={index}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent sx={{marginLeft: 5, marginRight: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography sx={{ fontSize: 16, marginBottom: 2 }} color="text.secondary" gutterBottom>
                    {`Kolejka ${fixture.round}`}
                  </Typography>
                  <div>
                    { (fixture.away !== '---' && fixture.home !== '---') ?
                      <Typography variant="h5" component="div" sx={{display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center'}}>
                        {fixture.home} 
                        <ColoredText style={{marginLeft: 15, marginRight: 15}} >
                          { convertScore(fixture.score) }
                        </ColoredText> 
                        {fixture.away}
                      </Typography>
                      : <Typography variant="h5" component="div" sx={{display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center'}}>RKS pauzuje</Typography>
                    }
                  </div>
                  { fixture.date && 
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                      <Icon sx={{color: '#00000099'}}><CalendarMonthIcon/></Icon>
                      <Typography sx={{ fontSize: 16, marginTop: 2, marginLeft: 0.5 }} color="text.secondary" gutterBottom>
                      {fixture.date}
                      </Typography>
                    </div> 
                  }
                </CardContent>
              </Card>
            </div>
          ))
        }
      </Carousel>
    </div>
  )

};

export default SingularMatches;