//including dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routs = require('./controllers/burgers_controller')

// initializing server
const app = express();
const PORT = process.env.PORT || 8080;

//midware for api and frontend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//adding handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setup for burger controller
app.use(routs);

//starting server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
