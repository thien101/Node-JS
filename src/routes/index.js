const inforRoute = require('./infor');

//Cấu hình các tuyến đường
function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/infor', inforRoute);

    app.get('/search', (req, res) => {
        res.render('search');
    });
}

module.exports = route;
