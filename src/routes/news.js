const express = require('express');
const route = express.Router();
const Newscontroller = require('../app/controllers/Newscontroller');

route.get('/:slug', Newscontroller.show);
route.get('/', Newscontroller.index);

module.exports = route;