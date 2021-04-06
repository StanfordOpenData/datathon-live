import React from 'react';
import Button from 'react-bootstrap/Button';
import Hero from '../Images/Hero.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Home() {
  return (
    <div id="home">
      <div id="home-content">
        <h1 id="Title">Stanford Open Datathon 2021</h1>
        <h4>April 9-11, 2021 Hosted by The Stanford Open Data Project</h4>
        <h5>Submissions due 4/11 at 12:00PM PDT!</h5>
        <div id="buttonbank">
          <Button variant="primary shadow-none">
            <a href="https://stanford-open-datathon.devpost.com/" 
            target="_blank" rel="noopener noreferrer">Submit Here!</a>
          </Button>
          <Button variant="outline-primary shadow-none"><AnchorLink href="#link-section">See Events</AnchorLink></Button>
        </div>
        
      </div>
      <img id="Hero" src={Hero} alt="hero"/>
    </div>
  );
}

export default Home