// import DB model
const db = require('../models/userModel');

const loginController = {};

loginController.getUser = (req, res, next) => {
  const { username } = req.body;
  console.log('User: ', username);
  // construct a DB query for a username
  const query = {
    text: `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
    params: [username]
  };

  // query the database
  db.query(query.text, query.params, (err, dbResponse) => {
    if (err) {
      return next({
        log: 'ERROR: loginController.getUser',
        message: { err: err.message }
      });
    }

    if (dbResponse) res.locals.user = dbResponse.rows[0];

    return next();
  })
};

loginController.verifyUser = (req, res, next) => {
  if (!res.locals.user) {
    return next();
  }

  const { username, password } = req.body;


  if (password !== res.locals.user.passhash) {
    delete res.locals.user;
  }
  return next();
};

loginController.createUser = (req, res, next) => {
  if (res.locals.user) {
    delete res.locals.user;
    return next();
  }

  const { username, password, first_name, last_name, email} = req.body;
  const query = {
    text: `
      INSERT INTO users (username, passhash, first_name, last_name, email)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING _id;
    `,
    params: [username, password, first_name, last_name, email]
  };
  db.query(query.text, query.params, (err, dbResponse) => {
    if (err) {
      return next({
        log: 'ERROR: loginController.createUser',
        message: { err: err.message }
      });
    }
    res.locals.user = dbResponse.rows[0];

    return next();
  });
};

module.exports = loginController;