import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../database/firebase";
import { AboutSection, AboutTitle, FaqContainer} from "../components/About/About.styles";
import ColoredText from "../components/ColoredText/ColoredText";
import {useInView} from "react-intersection-observer";
import { BestScorers } from "./BestScorers";
import { FirstSquadRanking } from "./FirstSquadRanking";
import './BestPlayers.styles.css';

const Statistics = () => {

  const [playerData, setPlayerData] = useState([]);
  const localStorageKey = "playerData";

  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const storedData = localStorage.getItem(localStorageKey);
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          const storedTimestamp = parsedData.timestamp;
          const oneDayInMillis = 24 * 60 * 60 * 1000;
          if (Date.now() - storedTimestamp < oneDayInMillis) {
            setPlayerData(parsedData.players);
            return;
          }
        }

        const playersRef = collection(db, "players");
        await getDocs(playersRef).then((data) => {
          let fetchedPlayerData = data.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
          const dataToStore = {
            timestamp: Date.now(),
            players: fetchedPlayerData,
          };
          localStorage.setItem(localStorageKey, JSON.stringify(dataToStore));
          setPlayerData(fetchedPlayerData)
        }).catch((err) => {
          console.log(err);
        })
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);

  return (
    <AboutSection ref={ref}>
      <AboutTitle>{'Statystyki naszych '}<ColoredText>{'zawodników'}</ColoredText></AboutTitle>
      <FaqContainer>
        <div className="playerTablesContainer">
          <BestScorers players={playerData} />
          <FirstSquadRanking players={playerData} />
        </div>
      </FaqContainer>  
    </AboutSection>
  );
};

export default Statistics;