//dependencies
var express = require("express");
var path = require("path");

//set up express app
var app = express();
const PORT = process.env.PORT || 3000;

//set up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//points server to a series of routes file
app.use(express.static(path.join(__dirname,"public")));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//starts server to begin listening
app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});