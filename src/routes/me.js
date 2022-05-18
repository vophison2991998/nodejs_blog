const express = require('express');
const route = express.Router();
const mecontroller = require('../app/controllers/Mecontroller');

route.get('/stored/courses', mecontroller.storedcourses);
route.get('/trash/courses', mecontroller.strashcourses);


module.exports = route;