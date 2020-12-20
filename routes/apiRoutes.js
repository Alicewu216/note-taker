
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const noteFile = require("../db/db.json");



module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(noteFile);
  });

  app.post("/api/notes", function (req, res) {
    newInput = {
      id: uuid.v4(),
      title: req.body.title,
      text: req.body.text
    }
    noteFile.push(newInput);

    fs.writeFileSync("noteFile", JSON.stringify(noteFile), "utf-8");
    res.json(noteFile);
  });

  app.delete("/api/notes/:id", function (req, res) {
    for (var i in noteFile) {
      if(noteFile[i].id == req.params.id) {
        noteFile.splice(i,1);
        break;
      }
    }

    fs.writeFileSync("noteFile", JSON.stringify(noteFile), "utf-8");
    res.json(noteFile);
  });
};