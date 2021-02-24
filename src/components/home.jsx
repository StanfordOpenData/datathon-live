import React from 'react';
import Button from 'react-bootstrap/Button';
import Hero from '../Images/Hero.png';

function Home() {
  return (
    <div id="home">
      <div id="home-content">
        <h1 id="Title">Stanford Open Datathon 2021</h1>
        <h4>April 9-11, 2021 Hosted by The Stanford Open Data Project</h4>
        <h5>Applications due 3/15!</h5>
        <div>
          <Button variant="primary shadow-none">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSekpg0-j0vEGCWg9ZM534NdDofMMaJggohJXFv6b1MrGPUYpw/viewform" 
            target="_blank" rel="noopener noreferrer">Apply Now!</a>
          </Button>
          <Button variant="outline-primary shadow-none"><a href="http://eepurl.com/hnqk9H" target="_blank" rel="noopener noreferrer">Keep Me Updated</a></Button>
        </div>
        
      </div>
      <img id="Hero" src={Hero} alt="hero"/>
    </div>
  );
}

export default Home