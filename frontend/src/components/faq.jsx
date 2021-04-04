import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { faq } from './content.json'

const FAQitem = ({q, a, link, textb, textin, texta, i}) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={i}>
        {q}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={i}>
        <Card.Body>
          {link ? (
            <> {textb}<a href={link}>{textin}</a>{texta} </>
          ) : (a)}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

function FAQ() {
  return (
    <div id='faq'>
      <h2 class="section-heading">Frequently Asked Questions</h2>
      <div>
        <Accordion>
          {faq.map((item, i) =>(
            <FAQitem {...item} i={String(i)} key={String(i)}/>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ