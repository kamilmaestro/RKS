import React from 'react';
import { BestPlayersTable } from './BestPlayersTable';

export const FirstSquadRanking = ({players}) => {
  return (
    <BestPlayersTable players={players} bestByProperties={'firstSquad'} propertiesLabel={'Pierwszy skład'} />
  );
};