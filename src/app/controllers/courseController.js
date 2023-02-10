const Course = require('../models/course');
const { mongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

// Cấu hình course
class courseController {
    //[GET] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                console.log(req.params.slug);
                if (course) {
                    res.render('courses/show', {
                        course: mongooseToObject(course),
                    });
                } else {
                    res.send('Khong Tim thay');
                }
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {res.render('courses/edit', {
                course: mongooseToObject(course)
            })})
            .catch(next)
    }

    //[POST] create course
    store(req, res, next) {
        // console.log("in")
        // res.send(req.body);
        //req.body.image = 'https://files.fullstack.edu.vn/f8-prod/courses/6.png'
        req.body.videoid = 'z2f7RHgvddc';
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((err) => {});
    }

    //[PUT] course/:id
    update(req, res, next) {
        //res.send(req.body);
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[PATC] course/:id/restore
    restore(req, res, next) {
        //res.send(req.body);
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[delete] course/:id
    delete(req, res, next) {
        //res.send(req.body);
        Course.delete({_id: req.params.id},)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[delete] course/:id/force
    forcedelete(req, res, next) {
        //res.send(req.body);
        Course.deleteOne({_id: req.params.id},)
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new courseController();
