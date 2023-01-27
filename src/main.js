const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const morgan = require('morgan');
const { extname } = require('path');
const app = express();
const port = 3000;
const route = require('./routes/index');

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
      }),
  );
app.set('view engine', 
'hbs');
app.set('views', path.join(__dirname, 
  'resources\\views'));

// Routes init: khởi tạo tuyến đường
route(app);

app.listen(port, () => {
    console.log(`Example app liste
    ning on port ${port}`);
});
