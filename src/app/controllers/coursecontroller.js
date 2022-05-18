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

    store(req, res, next) {

        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });


    }


    store(req, res, next) {

        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => {})

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(Course => res.render('courses/edit', {
                Course: mongooseToObject(Course)
            }))
            .catch(next);
    }
    update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);

        }
        //xóa vẫn còn dữ liệu trong mongodb
    delete(req, res, next) {
            Course.delete({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);

        }
        /// xóa vinh viễn
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);

    }





    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);

    }

}
module.exports = new coursecontroller();