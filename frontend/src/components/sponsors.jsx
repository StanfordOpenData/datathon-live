import React from 'react';
  import { Spon } from './content.json'

const logos = {
  "CIF": require("../Images/Sponsors/CIF.png"),
  "EST": require("../Images/Sponsors/EST.png"),
  "USAFacts": require("../Images/Sponsors/USAFacts.png"),
  "CS": require("../Images/Sponsors/CS.png"),
  "SEA": require("../Images/Sponsors/SEA.jpeg"),
  "SIEPR": require("../Images/Sponsors/SIEPR.png"),
  "SSG": require("../Images/Sponsors/SSG.png"),
  "PIT": require("../Images/Sponsors/PIT.png")
}

function Sponsors() {
  const Sponsor = ({name, link, size}) => {
    return (
      <a href={link} className={`${size}`}>
        <img src={logos[name]} alt={logos[name] + "logo"} className="sponsor"/>
      </a>
    );
  };
  return (
    <div id="sponsors">
      <h2 class="section-heading">Sponsors</h2>
      <div id="images">
        {Spon.map((item) => (
          <Sponsor {...item}/>
        ))}
      </div>
      {/*<Button href="mailto:stanfordopendataproject@gmail.com?Subject=Sponsorship%20Interest" variant="outline-primary shadow-none">Become A Sponsor!</Button>*/}
    </div>
  )
}

export default Sponsors;