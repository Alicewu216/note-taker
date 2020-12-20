// LOAD DATA
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const noteFile = ("../db/db.json");



module.exports = function (app) {
  // get note data from db.json
  app.get("/api/notes", function (req, res) {
    res.json(noteFile);
  });

  // save note data to db.json
  app.post("/api/notes", function (req, res) {
    newInput = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text
    }
    // use uuid to generate a unique id
    console.log(uuidv4());
    console.log(newInput);
    noteFile.push(newInput);
    // update db.json with the added object
    fs.writeFileSync(noteFile, JSON.stringify(JSON.parse(noteFile, null, 2)), "utf-8");
    res.json(true);
  });

  // delete an object from db.json by unique id
  app.delete("/api/notes/:id", function (req, res) {
    var drawdata = JSON.parse(data);
     if(note.id != req.params.id) {
       return true;
     }
     else {
       return false;
     }
    // update db.json with the updated array that excludes the deleted note
    fs.writeFileSync(noteFile, JSON.stringify(drawdata), "utf-8");
    res.json(true);
  });
};