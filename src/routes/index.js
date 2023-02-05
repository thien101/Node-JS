const inforRoute = require('./infor');
const siteRoute = require('./site');
const courseRoute = require('./course');
const meRoute = require('./me');

//Cấu hình các tuyến đường
function route(app) {
    app.use('/infor', inforRoute);
    app.use('/courses', courseRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
}

module.exports = route;
