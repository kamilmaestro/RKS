import React from 'react';
import { BestPlayersTable } from './BestPlayersTable';

export const BestScorers = ({ players }) => {
  return (
    <BestPlayersTable players={players} bestByProperties={'goals'} propertiesLabel={'Bramki'} />
  );
};