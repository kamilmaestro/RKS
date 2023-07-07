import React from "react";
import Layout from "../components/Layout/Layout";
import { ToDoContainer } from "../pages/ToDo/ToDo.styles";

const StadiumLocation = () => {

  return (
    <Layout title={'Rozgrywki'}>
    <ToDoContainer>
    <div style={{ width: "100%", height: "400px" }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20427.35383381381!2d21.109055568174195!3d50.209385880269956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d7b7a113a7757%3A0x852714d1fe1a0a93!2sStadion%20RKS%20Radgoszcz!5e0!3m2!1spl!2spl!4v1688721894537!5m2!1spl!2spl" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy" 
      />
    </div>
    </ToDoContainer>
    </Layout>
  );
};

export default StadiumLocation;