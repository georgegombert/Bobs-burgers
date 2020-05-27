const express = require('express');
const exphbs = require('express-handlebars');
const routs = require('./controllers/burgers_controller')
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routs);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));