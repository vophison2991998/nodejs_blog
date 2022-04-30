const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class coursecontroller {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(Course =>
                res.render("Courses/show", { Course: mongooseToObject(Course) })
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('Courses/create');
    }

    store(req, res, next) {

        const course = new course(req.body);
        course.save();
    }


}
module.exports = new coursecontroller();