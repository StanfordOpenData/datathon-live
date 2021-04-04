import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import devpost from "../Images/devpost.svg";
import slack from "../Images/slack.svg";
import drive from "../Images/drive.svg";
import dayjs from "dayjs";

import api from "../global/api.js";

function Links() {
  const [slackNotifs, setSlackNotifs] = useState([]);
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

  useEffect(() => {
    retrieveSlackAnnouncements();
  }, []);

  return (
    <div id="link-section">
      <h2 class="section-heading">Datathon Events</h2>
      <Container style={{ backgroundColor: "red" }}>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={12} md={6} style={{ height: 600 }}>
            <div
              style={{
                fontWeight: "bold",
                color: "yellow",
                fontSize: 30,
              }}
            >
              Announcements
            </div>
            <div
              style={{
                height: "100%",
                backgroundColor: "#E1F4FD",
                borderRadius: 20,
                paddingBottom: 20,
                overflow: "scroll",
              }}
            >
              This is for slack
              {slackNotifs.map((notif) => {
                return (
                  <div>
                    {notif.text}
                    <br />
                    {dayjs(notif.timestamp * 1000).format("MM/DD/YYYY")}
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={12} md={6} style={{ height: 600, overflow: "scroll" }}>
            <div
              style={{
                fontWeight: "bold",
                color: "yellow",
                fontSize: 30,
              }}
            >
              Upcoming Events
            </div>

            <Row
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: 20,
              }}
            >
              {dates.map((date) => {
                return (
                  <div
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "yellow",
                      marginRight: 10,
                      borderRadius: 3,
                      marginTop: 10,
                    }}
                  >
                    {date.date}
                  </div>
                );
              })}
            </Row>
            <div
              style={{
                padding: "10px 5px",
                borderRadius: 10,
                overflowY: "scroll",
              }}
            >
              {events.map((event) => {
                return (
                  <>
                    <div
                      key={event.id}
                      style={{
                        backgroundColor: "#f4f4f4",
                        padding: "10px 15px",
                        margin: 0,
                        borderRadius: 10,
                        marginBottom: 10,
                      }}
                    >
                      <div>{event.title}</div>
                      <div>{event.date}</div>
                      <div>{event.time}</div>
                    </div>
                  </>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Links;
