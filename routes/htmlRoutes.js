
// DEPENDENCIES
const path = require("path");

// ROUTING
module.exports = function (app) {
    //HTML GET request, handles when user "visit" a page
  // display notes.html if user url is ending with /notes
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // if no maching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};