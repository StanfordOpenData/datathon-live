import React from 'react'
import Button from 'react-bootstrap/Button'
import devpost from '../Images/devpost.svg'
import slack from '../Images/slack.svg'
import drive from '../Images/drive.svg'

function Links() {
  return (
    <div id="link-section">
      <h2 class="section-heading">Important Links</h2>
      <div id="links">
        <Button variant="outline-primary shadow-none">
          <img src={slack} alt="slack"/>
          <a href="https://join.slack.com/t/stanfordopend-65i8787/shared_invite/zt-oc30e4mr-CCF2pUmtB6zvupdiDIVIrQ" target="_blank" rel="noopener noreferrer">Slack</a>
         </Button>
        <Button variant="outline-primary shadow-none">
          <img src={devpost} alt="drive"/>
          <a href="https://stanford-open-datathon.devpost.com/" target="_blank" rel="noopener noreferrer">Devpost</a>
         </Button>
        <Button variant="outline-primary shadow-none">
          <img src={drive} alt="drive"/>
          <a href="https://drive.google.com/drive/u/1/folders/1GHG3h-HSHteXUaQwTV44cgAQi-k1Djdb" target="_blank" rel="noopener noreferrer">Handbook</a>
         </Button>
      </div>
    </div>
  )
}

export default Links