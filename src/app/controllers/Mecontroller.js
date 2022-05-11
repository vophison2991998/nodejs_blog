const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class Mecontroller {
    //[get]/news

    storedcourses(req, res, next) {
        Course.find({})
            .then(Course => res.render('me/stored-courses', {
                Course: mutipleMongooseToObject(Course)
            }))
            .catch(next);

    }
}
module.exports = new Mecontroller();