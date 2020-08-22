const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const errorMiddleWare = require('./error_middleware');
const api = require('./api/');

const app = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(compression());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '💪💪💪 Fitness App Api 💪💪💪',
  });
  res.status(200);
});

app.use('/api/v1', api);

app.use(errorMiddleWare.notFound);
app.use(errorMiddleWare.errorHandler);

module.exports = app;
