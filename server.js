
const express = require("express");


const app = express();

//set up a PORt to listen to
const PORT = process.env.PORT || 3000;

//add some body parswers

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//serve up public folder to client side
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT + ".....");
})