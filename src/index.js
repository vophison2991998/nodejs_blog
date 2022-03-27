const path = require('path');

const express = require("express");

const morgan = require("morgan");
const handlebars = require('express-handlebars');


var app = express();

var port = 3000;

//public
app.use(express.static(path.join(__dirname + "/public")));



//http logger
app.use(morgan('combined'));

//template engine

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, "resources/views"));







app.get("/", (req, res) => {

    res.render('home');
})
app.get("/news", (req, res) => {

    res.render('news');
})
app.listen(port, () => console.log("server runging 3000"));