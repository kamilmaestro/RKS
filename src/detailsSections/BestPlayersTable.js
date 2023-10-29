import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';

export const BestPlayersTable = ({ players, bestByProperties, propertiesLabel}) => {
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    players.sort((a, b) => b[bestByProperties] - a[bestByProperties]);
    const playersWithIndex = decoratePlayersWithIndex(players)
    setSortedData(playersWithIndex);
  }, [players, bestByProperties, propertiesLabel]);

  const decoratePlayersWithIndex = (players) => {
    if (!players || players.length === 0) {
      return;
    }
    const decoratedPlayers = players.map((player, index) => ({
      ...player,
      index: index + 1
    }));
    decoratedPlayers[0].index = 1;
  
    for (let i = 1; i < decoratedPlayers.length; i++) {
      const currentPlayer = decoratedPlayers[i];
      const previousPlayer = decoratedPlayers[i - 1];
      if (currentPlayer[bestByProperties] === previousPlayer[bestByProperties]) {
        currentPlayer.index  = previousPlayer.index ;
      } else {
        currentPlayer.index = i + 1;
      }
    }
 
    return decoratedPlayers;
  }

  const getFirstFive = (players) => {
    const fifthPlayer = players[4]
    return players.filter(player => player[bestByProperties] >= fifthPlayer[bestByProperties])
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, marginBottom: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Imię i nazwisko</TableCell>
            <TableCell>{propertiesLabel}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {sortedData && sortedData.length > 0 && getFirstFive(sortedData).map((player, index) => (
            <TableRow key={player.id}>
              <TableCell>
              {player.index}.
              </TableCell>
              <TableCell>{player.name}</TableCell>
              <TableCell>{player[bestByProperties]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};