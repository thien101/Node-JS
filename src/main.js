const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;
// morgan
const morgan = require('morgan');

//set route -- tuyen di
const route = require('./routes/index');

//set database monggo
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//app.use(morgan('combined'))
// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            foo() { return 'FOO!'; },
            sum(a, b) {return a + b;}
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//methodOverride
app.use(methodOverride('_method'))

// Connect to DB
db.connectToDB();

// Routes init: khởi tạo tuyến đường
route(app);

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
