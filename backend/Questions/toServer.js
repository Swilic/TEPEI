const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/quizz");

const filePath = `${process.cwd()}/backend/Questions/questionCapitalPays.txt`;
const lineReader = require("line-reader");

const quizz = mongoose.model(
  "quizzs",
  new mongoose.Schema({
    question: "string",
    response: "string",
    theme: "string",
  })
);

const addQuestions = function (question, response, theme) {
  quizz.insertMany({
    question: question,
    response: response,
    theme: theme,
  });
};

const readByLine = function (filePath) {
  lineReader.eachLine(filePath, function (line, last) {
    const lineSplitted = line.split(" - ");
    addQuestions(lineSplitted[0], lineSplitted[1], "Pays");

    if (last) {
      console.log("Last line printed.");
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(
        `The script uses approximately ${Math.round(used * 100) / 100} MB`
      );
    }
  });
};
