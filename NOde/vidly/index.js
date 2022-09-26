const express = require('express');
const app = express();
const Joi = require('joi');
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const genreRoutes = require('./routes/genres');
const home = require('./routes/home');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));
app.use('/api/genres', genreRoutes);
app.use('/', home);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan enabled...');
}

app.use(function (req, res, next) {
  console.log('Logging');
  next();
});

app.use(logger);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port:${port}`));
