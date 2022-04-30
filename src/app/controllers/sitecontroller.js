const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class sitecontroller {
    //[get]/news
    index(req, res, next) {

        Course.find({})
            .then(Course => {

                res.render('home', {
                    Course: mutipleMongooseToObject(Course)
                });
            })
            .catch(next);
        //res.render('home');


    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new sitecontroller();