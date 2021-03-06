const path = require('path');

const express = require('express');
const methodOverride = require('method-override');


const morgan = require('morgan');

const handlebars = require('express-handlebars');

const sortMiddleware = require('./app/middlewares/sortMiddleware');



const db = require('./Config/db')
    // ket noi mongodb
db.connect();


var app = express();

var port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname + '/public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

// custom sortMiddleware
app.use(sortMiddleware);



app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    // icon +
    helpers: require('./helpers/handlebars')

}));
// icon -
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));



route(app);

app.listen(port, () => console.log('server runging 3000'));