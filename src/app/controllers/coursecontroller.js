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
        res.render('courses/create');
    }
    async store(req, res, next) {

            const formData = req.body;
            formData.image = `https://files.fullstack.edu.vn/${req.body.videoId}/courses/6.png`;
            const course = new Course(formData);
          
            try {
                await Course.create(formData);
            } catch (error) {
                console.log(error);
            }
            res.send('created');
        }
  
}
module.exports = new coursecontroller();
