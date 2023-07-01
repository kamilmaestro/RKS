import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer, ToDoTitle } from "../pages/ToDo/ToDo.styles";
import ColoredText from "../components/ColoredText/ColoredText";
import LeagueTable from "./Table";
import SingularMatches from "./SingularMatches";
import { getRKSSchedule } from "../data/scheduleData";

const Competitions = () => {

  return (
    <Layout title={'Rozgrywki'}>
      <ToDoContainer>
        <ToDoTitle>
          Klasa B
          <ColoredText> 2022/2023</ColoredText>
        </ToDoTitle>
        <LeagueTable />
        <ToDoTitle>
          Rozgrywane
          <ColoredText> mecze</ColoredText>
        </ToDoTitle>
        <SingularMatches schedule={getRKSSchedule()} />
      </ToDoContainer>
    </Layout>
  );
};

export default Competitions;