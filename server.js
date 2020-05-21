const express = require('express');
const exphbs = require('express-handlebars');
// const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', (req, res) => {
  res.render("index");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));