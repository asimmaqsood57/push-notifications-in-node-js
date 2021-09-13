//Express
const express = require("express");
const cors = require("cors");
//web-push
const webpush = require("web-push");

//body-parser
const bodyParser = require("body-parser");

//path
const path = require("path");

//using express
const app = express();
app.use(cors());
//using bodyparser
app.use(bodyParser.json());

app.use(express.json());

app.use(express.static(path.join(__dirname, "/client")));
// public key :
// BMk2ttWF69EgQzUMAmiCe2WuzVX7tdo18kjxffHjHTFEXxBxg0-ZIKqyYzLtI_b7hTqD_4N8e_Xj1ytsFb8PGE0

// Private Key:
// 9VBzaWySTm1Zndxr5pcwdpHx7m3DOkdLqqeFFqUaAHg

const publicVapidKey =
  "BMk2ttWF69EgQzUMAmiCe2WuzVX7tdo18kjxffHjHTFEXxBxg0-ZIKqyYzLtI_b7hTqD_4N8e_Xj1ytsFb8PGE0";
const privateVapidKey = "9VBzaWySTm1Zndxr5pcwdpHx7m3DOkdLqqeFFqUaAHg";

//setting vapid keys details
webpush.setVapidDetails(
  "mailto:mercymeave@section.com",
  publicVapidKey,
  privateVapidKey
);

//subscribe route
app.post("/subscribe", (req, res) => {
  //get push subscription object from the request
  const subscription = req.body;
  console.log(subscription);
  //send status 201 for the request
  res.status(201).json({});

  //create paylod: specified the detals of the push notification
  const payload = JSON.stringify({ title: "We have a  class" });

  //pass the object into sendNotification fucntion and catch any error
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 3000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
