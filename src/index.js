const path = require('path');

const express = require('express');

const morgan = require('morgan');
// k dung thi import lam gi day @@ em đang học theo anh sơn anh làm sau em làm vậy
// từ từ em nhò7 mội người để tối ưu
// cam on anh cớ gì anh giúp em nha
// chứ anh buổi tối tốt lành. ok ong. nao ranh giup dc thi toi giup. dao nay cung ban di lam r
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


app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => console.log('server runging 3000'));