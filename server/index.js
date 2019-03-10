require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/index.js');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (environment !== 'production') {
  app.use(logger('dev'));
}

app.use('/api/v1', routes(router));

// for statics
app.use(express.static(path.join(__dirname, stage.staticPath)));

app.use('/', (req, resp) => {
  const { indexFile } = stage;
  resp.sendFile(path.resolve(__dirname, stage.staticPath, indexFile));
});


app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
