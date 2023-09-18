import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../database/firebase";

const BestScorers = () => {

  const [playerData, setPlayerData] = useState([]);
  const localStorageKey = "playerData";

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
        const querySnapshot = await playersRef.get();
        console.log('ref ', playersRef)
        const fetchedPlayerData = [];
        querySnapshot.forEach((doc) => {
          fetchedPlayerData.push(doc.data());
        });

        const dataToStore = {
          timestamp: Date.now(),
          players: fetchedPlayerData,
        };
        localStorage.setItem(localStorageKey, JSON.stringify(dataToStore));

        setPlayerData(fetchedPlayerData);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);


  return (
    <div>
      <h1>Player List</h1>
      <ul>
        {playerData.map((player) => (
          <li key={player.id}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestScorers;