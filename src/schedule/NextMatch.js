import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Icon } from '@mui/material';
import ColoredText from "../components/ColoredText/ColoredText";
import { useMediaQuery, useTheme } from '@mui/material';

const NextMatch = () => {

  const nextMatch = {
    date: "20 sierpnia, 16:30",
    home: "MLKS Żabno II",
    away: "RKS Radgoszcz",
    score: " vs "
   }

   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return ( 
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
          {nextMatch.home}  <ColoredText style={{marginLeft: 15, marginRight: 15}} >{ nextMatch.score }</ColoredText> {nextMatch.away}
        </Typography>
      </div>
      <div style={{ 
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backgroundColor: '#111624', width: '100%', paddingBottom: 8 
      }} >
        <Icon>
          <CalendarMonthIcon fontSize="small"/>
        </Icon>
        <Typography sx={{ fontSize: isSmallScreen ? 14 : 16, marginTop: 2, marginLeft: 1, fontWeight: 300, fontStyle: 'italic'  }} color="white" gutterBottom>
          {nextMatch.date}
        </Typography>
      </div>
    </div>
   );
}
 
export default NextMatch;