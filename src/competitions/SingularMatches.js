import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getRKSSchedule } from '../data/scheduleData';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Icon } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import ColoredText from "../components/ColoredText/ColoredText";

const SingularMatches = ({ schedule = [] }) => {

  return (
    <div className='singular-container' style={{width: "100%", maxWidth: 1000}}>
      <Carousel 
        sx={{marginBottom: 25}} 
        navButtonsAlwaysVisible 
        cycleNavigation = {false} 
        index={schedule && schedule.length} 
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
                    {fixture.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {fixture.match.home}  <ColoredText>{ fixture.match.score }</ColoredText> {fixture.match.away}
                  </Typography>
                  <Typography sx={{ fontSize: 16, marginTop: 2 }} color="text.secondary" gutterBottom>
                    <Icon><CalendarMonthIcon/></Icon> {fixture.match.date}
                  </Typography>
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