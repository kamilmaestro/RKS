import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Typography } from '@mui/material';

const TeamHistory = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: isSmallScreen ? 'column' : 'row'}}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img
          src="rksHistory.jpg"
          alt="Zdjęcie drużyny piłkarskiej"
          style={{maxWidth: '95%', height: 'auto'}}
        />
      </div>
      <div style={{width: '100%', marginLeft: isSmallScreen ? 0 : 30, marginTop: isSmallScreen ? 25 : 0, marginBottom: 50, maxWidth: isMediumScreen ? (isSmallScreen ? '95%' : '450px') : '625px', display: 'flex', alignItems: 'center'}}>
        <Typography component="div" align="left" style={{ whiteSpace: 'pre-line' }}>
          {text}
        </Typography>
      </div>
    </div>
  );
}
 
export default TeamHistory;