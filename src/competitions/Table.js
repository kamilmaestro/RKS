import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";
import { TABLE } from "../data/leagueTableData";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const LeagueTable = () => {

  const getTeam = (team, index) => {
    if (team.name.includes('Radgoszcz')) {
      return getRadgoszcz(team)
    }

    return (
      <TableRow
        key={index}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {team.pos ? team.pos : `${index + 1}.`}
        </TableCell>
        <TableCell align="left">{team.name}</TableCell>
        <TableCell align="left">{<b>{team.pts}</b>}</TableCell>
        <TableCell align="left">{team.matches}</TableCell>
        <TableCell align="left">{team.won}</TableCell>
        <TableCell align="left">{team.draws}</TableCell>
        <TableCell align="left">{team.lost}</TableCell>
        <TableCell align="left">{team.score}</TableCell>
      </TableRow>
    );
  }

  const getRadgoszcz = (team, index) => {
    return (
      <TableRow
        key={index}
        sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#161c2e" }} //#1c273b #8f0406
      >
        <TableCell component="th" scope="row" sx={{ color: 'white'}}>
          {team.pos}
        </TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>RKS Radgoszcz</TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>{<b>{team.pts}</b>}</TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>{team.matches}</TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>{team.won}</TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>{team.draws}</TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>{team.lost}</TableCell>
        <TableCell align="left" sx={{ color: 'white'}}>{team.score}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, marginBottom: 5 }}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={10} />
            <TableCell align="left">Nazwa drużyny</TableCell>
            <TableCell align="left">Pkt</TableCell>
            <TableCell align="left">M</TableCell>
            <TableCell align="left">Z</TableCell>
            <TableCell align="left">R</TableCell>
            <TableCell align="left">P</TableCell>
            <TableCell align="left">Bilans</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TABLE.teams.map((team, index) => (
            getTeam(team, index)
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default LeagueTable;