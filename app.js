const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const path = require('path')
require('dotenv').config();

require('./db/db')


const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');


const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', apiRouter);
app.use('/users', usersRouter);

app.get('/*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
