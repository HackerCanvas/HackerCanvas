// require packages
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

// require routers
const loginRouter = require('./routes/login');

// initialize express server
const app = express();
const PORT = 3000;

// insert global parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// serve static files
app.use(express.static(path.resolve(__dirname, '../dist/index.html')));
app.use(express.static(path.resolve(__dirname, '../dist')));

// direct to routers
app.use('/login', loginRouter);

/* handle client-side react router routes */

// have an array hold our react routes as strings 
const reactRouterPaths = [];

// have our server (app) check for the react routes and serve our static files 
app.use(reactRouterPaths, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  res.sendFile(path.resolve(__dirname, '../dist'));
});

// global 404 catch for bad route requests
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };

  console.log('Sending a global error to the client.');

  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server with message
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;