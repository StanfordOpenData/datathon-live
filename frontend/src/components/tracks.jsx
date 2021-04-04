import React from "react";
import { tracks_intro } from "./content.json";
import { tracks } from "./content.json";
import Card from "react-bootstrap/Card";

const logos = {
  "build": require("../Images/build.png"),
  "policy": require("../Images/policy.png"),
  "model": require("../Images/model.png"),
  "journalism": require("../Images/journalism.png")
}

function Tracks() {
  const TrackCard = (title) => {
    return (
      <Card>
        {/* <div class="image-placeholder"></div> */}
        <img src={logos[title.logo]} alt={title.name + "logo"} class="track-image" />
        <p class="tracks-title">{title.name}</p>
        <p class="tracks-description">{title.description}</p>
      </Card>
    );
  };
  return (
    <div id="tracks">
      <div id="container">
        <p class="tracks-header section-heading ">Tracks</p>
        <p class="tracks-text">{tracks_intro}</p>
        <div id="tracks-card-container">
          {tracks.map((item, i) => (
            <TrackCard {...item} title={String(i)} key={String(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tracks;
