import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import devpost from "../Images/devpost.svg";
import slack from "../Images/slack.svg";
import drive from "../Images/drive.svg";
import dayjs from "dayjs";

import api from "../global/api.js";

function Links() {
  const [slackNotifs, setSlackNotifs] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const dates = [
    {
      date: "March 20",
    },
    {
      date: "March 21",
    },
    {
      date: "March 22",
    },
    {
      date: "March 23",
    },
    {
      date: "March 24",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Coffee Chat with Daniel Ma",
      date: "March 20, 2021",
      time: "10:30 am - 11:30 am PST",
    },
    {
      id: 2,
      title: "Coffee Chat with Daniel Ma",
      date: "March 20, 2021",
      time: "10:30 am - 11:30 am PST",
    },
    {
      id: 3,
      title: "Coffee Chat with Daniel Ma",
      date: "March 20, 2021",
      time: "10:30 am - 11:30 am PST",
    },
    {
      id: 4,
      title: "Coffee Chat with Daniel Ma",
      date: "March 20, 2021",
      time: "10:30 am - 11:30 am PST",
    },
    {
      id: 5,
      title: "Coffee Chat with Daniel Ma",
      date: "March 20, 2021",
      time: "10:30 am - 11:30 am PST",
    },
    {
      id: 6,
      title: "Coffee Chat with Daniel Ma",
      date: "March 20, 2021",
      time: "10:30 am - 11:30 am PST",
    },
  ];

  const retrieveSlackAnnouncements = () => {
    api
      .get("/slackAnnouncements")
      .then((res) => {
        setSlackNotifs(res.data.filter((item) => item.type !== "system"));
      })
      .catch((err) => console.log(err));
  };

  const toggleDateSelect = (date) => {
    setSelectedDate(date);
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
                      selected={selectedDate.length > 0}
                      onClick={() => toggleDateSelect(date.date)}
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
                        onClick={() => console.log("render dialog here")}
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
  ${({ selected }) => {
    return `
    color: rgba(28, 117, 188, 1);
    background-color: rgba(225,244,253,1);
   `;
  }};
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
  overflow-y: scroll;
`;
