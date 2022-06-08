const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class Mecontroller {

    storedcourses(req, res, next) {

        Promise.all([Course.find({}).sortable(req),
                Course.countDocumentsDeleted()
            ])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                })


            ).catch(next);



        //Course.countDocumentsDeleted()
        //.then((deletedCount) => {
        //console.log(deletedCount);
        //}).catch(() => {})


        //Course.find({})
        //.then(courses => res.render('me/stored-courses', {
        //courses: mutipleMongooseToObject(courses),
        //}), )
        //.catch(next);

    }
    strashcourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses),
            }), )
            .catch(next);

    }
}
module.exports = new Mecontroller();