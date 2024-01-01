const { format } = require("date-fns");
const express = require("express");
const router = express.Router();

const colors = [
  "#EAC7C7",
  "#D5E3E8",
  "#F7F5EB",
  "#E8A2A2",
  "#A0C3D2",
  "#EAE0DA",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const max = colors.length;
  return colors[getRandomInt(max)];
}

const messages = [
  {
    title: "Seeking Friends :D",
    text: "Hi there!",
    user: "Amanda",
    added: getDate(),
    color: getRandomColor(),
  },
  {
    title: "Introduction",
    text: "Hello World! I love music :)",
    user: "Charles",
    added: getDate(),
    color: getRandomColor(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Sticky Notes Board Forum",
    messages: messages,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", {
    title: "Create Post",
  });
});

router.post("/new", function (req, res, next) {
  messages.push({
    title: req.body.title,
    text: req.body.text,
    user: req.body.user,
    added: getDate(),
    color: getRandomColor(),
  });
  res.redirect("/");
});

function getDate() {
  return format(new Date(), "MM/dd/yyyy, HH:mm O");
}

module.exports = router;
