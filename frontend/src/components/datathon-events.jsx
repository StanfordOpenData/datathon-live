import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Modal } from "react-bootstrap";
import styled from "styled-components";
import devpost from "../Images/devpost.svg";
import slack from "../Images/slack.svg";
import drive from "../Images/drive.svg";
import dayjs from "dayjs";
import { dates, events } from "./content.json"

import api from "../global/api.js";

function Zoom(selectedDialog) {
  if (selectedDialog.zoom) {
    console.log(selectedDialog);
    return (
      <Modal.Body><a href={selectedDialog.zoom}>Zoom Link</a></Modal.Body>
    )
  }
  return null;
}

function Links() {
  const [slackNotifs, setSlackNotifs] = useState([]);
  const [selectedDialog, setSelectedDialog] = useState({
    eventId: null,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedDate, setSelectedDate] = useState({
    date: "",
    id: null,
  });

  const retrieveSlackAnnouncements = () => {
    api
      .get("/slackAnnouncements")
      .then((res) => {
        setSlackNotifs(res.data.filter((item) => item.type !== "system"));
      })
      .catch((err) => console.log(err));
  };

  const toggleDateSelect = (date, id) => {
    setSelectedDate({ date: date, id: id });
  };

  const renderDialogBox = (event) => {
    console.log("CLICKED DILOG BOX:@!!");
    setSelectedDialog({ title: event.title, description: event.description, zoom: event.zoom });
    setShow(true);
    return <></>;
  };

  useEffect(() => {
    retrieveSlackAnnouncements();
  }, []);

  console.log(selectedDate);
  return (
    <div id="link-section">
      <h2 class="section-heading">Datathon Events</h2>
      <Container style={{}}>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={12} md={6}>
            <MainTitles>Announcements</MainTitles>
            <AnnouncementContainer>
              {slackNotifs.map((notif) => {
                return (
                  <SlackNotif>
                    <AnnouncementTitle>Announcement</AnnouncementTitle>
                    <SlackDateDisplay>
                      {dayjs(notif.timestamp * 1000).format("MM/DD/YYYY")}
                    </SlackDateDisplay>
                    <SlackNotifDescription>{notif.text}</SlackNotifDescription>
                  </SlackNotif>
                );
              })}
            </AnnouncementContainer>
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              height: 600,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <MainTitles>Upcoming Events</MainTitles>

            <div style={{ overflow: "scroll", flex: 1 }}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: "0px 20px",
                }}
              >
                {dates.map((date) => {
                  return (
                    <DateCard
                      key={date.id}
                      selectedDate={selectedDate.id}
                      isSelected={selectedDate.date === date ? true : false}
                      onClick={() => toggleDateSelect(date.date, date.id)}
                    >
                      {date.date}
                    </DateCard>
                  );
                })}
              </Row>
              <EventCardContainer>
                {events.map((event) => {
                  return (
                    <>
                      <EventCard
                        key={event.id}
                        onClick={() => {
                          console.log("render dialog here");
                          renderDialogBox(event);
                        }}
                      >
                        <div>{event.title}</div>
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                      </EventCard>
                    </>
                  );
                })}
              </EventCardContainer>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal style={{ marginTop: 300 }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDialog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>People of Interest: {selectedDialog.description}</Modal.Body>
        <Zoom {...selectedDialog}></Zoom>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Links;

const MainTitles = styled.div`
  color: rgba(102, 198, 177, 1);
  line-height: 100%;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-family: Sora;
  margin-bottom: 30px;
`;

const AnnouncementContainer = styled.div`
  flex: 1;
  min-height: 92%;
  background-color: #e1f4fd;
  border-radius: 20px;
  padding-bottom: 20px;
  overflow: scroll;
  margin-bottom: 20px;
`;

const AnnouncementTitle = styled.h1`
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  font-style: normal;
  font-family: Sora;
  color: rgba(0, 43, 82, 1);
  margin-bottom: 3px;
`;

const SlackNotif = styled.div`
  padding-left: 30px;
  padding-bottom: 15px;
  padding-top: 15px;
`;

const SlackDateDisplay = styled.div`
  color: rgba(28, 117, 188, 1);
  line-height: 25px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  padding: 0px;
  margin: 5px 0px;
`;

const SlackNotifDescription = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
`;

const DateCard = styled.div`
  padding: 10px 20px;
  border: 1px solid #e1f4fd;
  color: #e1f4fd;
  margin-right: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  ${({ selectedDate, isSelected }) => {
    console.log("SELECTED!");
    if (selectedDate && isSelected) {
      console.log("selected: ", selectedDate);
      return `background-color: purple`;
    }
  }}
  }
`;
const EventCard = styled.div`
  background-color: #f4f4f4;
  padding: 10px 15px;
  margin: 0px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const EventCardContainer = styled.div`
  padding: 10px 5px;
  border-radius: 10px;
`;
