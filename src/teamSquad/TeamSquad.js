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
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import { TabScrollButton } from '@mui/material';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#8F0406"
  }
});

const StyledTab = styled((props) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "white",
    "&.Mui-selected": {
      color: "#8F0406"
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)"
    }
  })
);

const TeamSquad = () => {

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const columns = isMediumScreen ? 
    1 
    : isLargeScreen ? 2 : 3;
  const isBiggerScreenThanMedium = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title={'Kadra'}>
      <ToDoContainer>
        <ToDoTitle>
          Kadra - sezon
          <ColoredText> 2023/2024</ColoredText>
        </ToDoTitle>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <img
            src="team.jpg"
            alt="Zdjęcie drużyny piłkarskiej"
            style={{maxWidth: '95%', height: 'auto'}}
          />
        </div>

        <Box sx={{ bgcolor: "#161c2e", width: '95%', maxWidth: 1368 }}>
          <StyledTabs
            value={value}
            variant={isBiggerScreenThanMedium ? "standard" : "scrollable"}
            onChange={handleChange}
            aria-label="kadra"
            centered={isBiggerScreenThanMedium}
            allowScrollButtonsMobile
            ScrollButtonComponent={CustomTabScrollButton}
          >
            <StyledTab label="Sztab" />
            <StyledTab label="Bramkarze" />
            <StyledTab label="Obrońcy" />
            <StyledTab label="Pomocnicy" />
            <StyledTab label="Napastnicy" />
          </StyledTabs>
          <Box sx={{ p: 1 }} />
        </Box>

        {value == 0 && 
          <>
            {/* <FormationTitle title="Sztab"/> */}
            <PlayersList players={TEAM.staff} columns={columns} />
          </>
        }

        {value == 1 && 
          <>
            {/* <FormationTitle title="Bramkarze"/> */}
            <PlayersList players={TEAM.goalkeepers} columns={columns} />
          </>
        }

        {value == 2 && 
          <>
            {/* <FormationTitle title="Obrońcy"/> */}
            <PlayersList players={TEAM.defenders} columns={columns} />
          </>
        }

        {value == 3 && 
          <>
            <FormationTitle title="Pomocnicy"/>
            <PlayersList players={TEAM.midfielders} columns={columns} />
          </>
        }

        {value == 4 && 
          <>
            <FormationTitle title="Napastnicy"/>
            <PlayersList players={TEAM.attackers} columns={columns} />
          </>
        }

      </ToDoContainer>
    </Layout>
  );
};

function CustomTabScrollButton(props) {
  return (
    <TabScrollButton
      {...props}
      className="custom-scroll-button"
      sx={{color: 'white'}}
    />
  );
}

export default TeamSquad;