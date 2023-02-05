const Course = require('../models/course');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

// Cấu hình course
class courseController {
   

    //[GET] me/stored/courses
    storedCourse(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-course', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
        // res.render('me/stored-course');
    }
}

module.exports = new courseController();
