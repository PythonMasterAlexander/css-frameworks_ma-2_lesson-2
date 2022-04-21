import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';

function TabContainer() {
  return(
    <>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Lorem</Accordion.Header>
            <Accordion.Body>
              Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Ipsem</Accordion.Header>
            <Accordion.Body>
              Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Dolor</Accordion.Header>
            <Accordion.Body>
              Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Porta</Accordion.Header>
            <Accordion.Body>
              Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.  
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="d-none d-md-block"> 
        <Tabs defaultActiveKey="One" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="One" title="Lorem">
            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
          </Tab>
          <Tab eventKey="Two" title="Ipsem">
            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
          </Tab>
          <Tab eventKey="Three" title="Dolor">
            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. 
          </Tab>
          <Tab eventKey="Four" title="Porta">
            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.  
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default TabContainer;