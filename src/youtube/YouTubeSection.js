import YouTubeVideo from "./YouTubeVideo";
import './YouTubeSection.styles.css'; 
import Typography from '@mui/material/Typography';
import ColoredText from "../components/ColoredText/ColoredText";
import { useMediaQuery, useTheme } from '@mui/material';

const YouTubeSection = () => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className="app-container">
      <Typography sx={{ fontSize: 26, fontWeight: 200, marginBottom: 3}} component="div" color="white">
        RKS<ColoredText style={{marginLeft: 5}}>TV</ColoredText>
      </Typography>
      <div style={{display: 'flex', flexDirection: isMediumScreen ? 'column' : 'row', gap: isLargeScreen ? 35 : 70}}>
        <div className="video-wrapper">
          <YouTubeVideo videoId={'qOrjvfm4gHg'}/>
        </div>
        <div className="video-wrapper">
          <YouTubeVideo videoId={'8jFKWRWSNKo'}/>
        </div>
      </div>
    </div>
  );
}
 
export default YouTubeSection;