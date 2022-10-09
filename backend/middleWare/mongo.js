const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quizz");

const quizz = mongoose.model(
  "quizzs",
  new mongoose.Schema({
    question: "string",
    response: "string",
    theme: "string",
  })
);