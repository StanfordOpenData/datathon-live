import React from 'react';
import Instagram from '../Images/Instagram.png'
import Twitter from '../Images/Twitter.png'
//import Facebook from '../Images/Facebook.png'
import Github from '../Images/Github.png'

function Footer() {
  return (
    <div id="footer">
      <div id="logos">
        <a href="https://www.instagram.com/stanfordopendata" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram"/></a>
        <a href="https://twitter.com/StanfordODP" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter"/></a>
        {/*<a href="/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook"/></a>*/}
        <a href="https://github.com/StanfordOpenData" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github"/></a>
      </div>
      <p>Hosted by the <a href="https://stanfordopendata.org/" target="_blank" rel="noopener noreferrer">Stanford Open Data Project</a></p>
    </div>
  )
}

export default Footer