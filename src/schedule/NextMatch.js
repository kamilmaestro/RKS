import React, { useState, useEffect  } from 'react';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Icon } from '@mui/material';
import ColoredText from "../components/ColoredText/ColoredText";
import { useMediaQuery, useTheme } from '@mui/material';
import { getNearestMatch, getOnlyRksSchedule } from '../data/scheduleData';

const NextMatch = () => {

  const [nextMatch, setNextMatch] = useState(null);

  const nextMatchStatic = {
    date: "10 września, 11:00",
    home: "RKS Radgoszcz",
    away: "LKS Smęgorzów",
    score: " vs "
   }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const fetchedData = getNearestMatch();
    setNextMatch(fetchedData);
    console.log(fetchedData)
  }, []); 

  if (!nextMatch) {
    return <></>
  }

  return ( 
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#161c2e'
      }}>
        <div>
          <Typography 
            sx={{ fontSize: isSmallScreen ? 22 : 26, marginTop: isSmallScreen ? 1 : 3, marginBottom: isSmallScreen ? 1 : 3, fontWeight: isSmallScreen ? 200 : 300, display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row', alignItems: 'center' }} 
            component="div" 
            color="white"
          >
            {nextMatchStatic.home}  <ColoredText style={{marginLeft: 15, marginRight: 15}} >{ nextMatchStatic.score }</ColoredText> {nextMatchStatic.away}
          </Typography>
        </div>
        <div style={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#111624', width: '100%', paddingBottom: 8 
        }} >
          <Icon>
            <CalendarMonthIcon fontSize="small"/>
          </Icon>
          <Typography sx={{ fontSize: isSmallScreen ? 14 : 16, marginTop: 2, marginLeft: isSmallScreen ? 0 : 1, fontWeight: 300, fontStyle: 'italic'  }} color="white" gutterBottom>
            {nextMatchStatic.date}
          </Typography>
        </div>
      </div>
    </>
   );
}
 
export default NextMatch;