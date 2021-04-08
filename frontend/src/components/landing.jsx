import React from "react";
import Home from "../components/home";
import CountDown from "../components/countdown";
import Links from "../components/links";
import DatathonEvents from "../components/datathon-events";
import Sponsors from "../components/sponsors";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <CountDown />
        <Links />
        <DatathonEvents />
        <Sponsors />
      </div>
    );
  }
}

export default Landing;
