import React from "react";
import { about } from "./content.json";
//import Button from "react-bootstrap/Button"

function About() {
  return (
    <div id="about">
      <div id="container">
        <p class="section-heading about-header">About</p>
        <p class="about-text">{about[0].content}</p>
        {/*<Button variant="primary shadow-none">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSekpg0-j0vEGCWg9ZM534NdDofMMaJggohJXFv6b1MrGPUYpw/viewform" 
          target="_blank" rel="noopener noreferrer">Apply Now!</a>
  </Button>*/}
      </div>
    </div>
  );
}

export default About;
