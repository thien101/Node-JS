const Course = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    home(req, res, next) {
        // Callback
        // Course.find({}, function (error, course ){
        //     if (!error)res.json(course);
        //     else res.status(400).json({error: 'ERROR'});
        // })

        // Promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
