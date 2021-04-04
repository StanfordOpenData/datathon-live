require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/slackAnnouncements", (req, res) => {
  axios
    .get("https://slack.com/api/conversations.history?channel=C01TES4JXRS", {
      headers: {
        Authorization: "Bearer " + process.env.SLACK_TOKEN,
      },
    })
    .then((data) => {
      const results = [];
      //   res.json(data.data.messages).end();
      data.data.messages.forEach((item) => {
        // if (typeof item.text !== "undefined") {
        //   results.push({ text: item.text, timestamp: item.ts, type: "system" });
        // } else {
        //   let text = "";
        //   item.blocks.forEach((block) => {
        //     if (block.type === "rich_text") {
        //       block.elements.forEach((element) => {
        //         text += element.text;
        //       });
        //     }
        //   });
        //   results.push({ text: text, timestamp: item.ts, type: "message" });
        // }
        if (typeof item.text !== "undefined") {
          results.push({
            text: item.text,
            timestamp: item.ts.replace(/\.\d+/, ""),
            type: item.blocks ? "message" : "system",
          });
        }
      });
      res.json(results);
    })
    .catch((err) =>
      res.status(500).json({ msg: "Failed to load data from Slack" })
    );
});

app.listen(port, () => {
  console.log("listening on: http://localhost:" + port);
});