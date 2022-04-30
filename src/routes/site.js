const express = require('express');
const route = express.Router();
const sitecontroller = require('../app/controllers/sitecontroller');

route.get('/search', sitecontroller.search);
route.get('/', sitecontroller.index);

module.exports = route;