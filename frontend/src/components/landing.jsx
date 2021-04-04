import React from "react";
import Home from "../components/home";
import CountDown from "../components/countdown";
import Links from "../components/links";
import DatathonEvents from "../components/datathon-events";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <CountDown />
        <DatathonEvents />
        <Links />
      </div>
    );
  }
}

export default Landing;
