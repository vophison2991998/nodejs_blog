const express = require('express');
const route = express.Router();
const coursecontroller = require('../app/controllers/coursecontroller');
route.get('/create', coursecontroller.create);
route.post('/store', coursecontroller.store);
route.get('/:slug', coursecontroller.show);



module.exports = route;