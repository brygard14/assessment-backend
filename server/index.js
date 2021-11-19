const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  console.log(req.query)
  console.log(res)
  // const fortunes = [
  //   "A beautiful, smart, and loving person will be coming into your life.",
  //   "A fresh start will put you on your way.",
  //   "A good time to finish up old tasks.",
  //   "A lifetime of happiness lies ahead of you.",
  // ];
  // //choose random fortune
  // let randomIndex = Math.floor(Math.random() * fortunes.length);
  // let randomFortune = fortunes[randomIndex];

  // res.status(200).send(randomFortune);
});

app.put()

app.listen(4000, () => console.log("Server running on 4000"));
