const path = require('path');

const express = require('express');
const methodOverride = require('method-override');


const morgan = require('morgan');

const handlebars = require('express-handlebars');

const db = require('./Config/db')




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



app.engine('hbs', handlebars.engine({
    extname: '.hbs',

    helpers: {
        sum: (a, b) => a + b,
    }


}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => console.log('server runging 3000'));