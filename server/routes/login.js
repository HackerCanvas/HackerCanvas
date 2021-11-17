// require packages
const express = require('express');
const loginController = require('../controllers/loginController');
const cookieController = require('../controllers/cookieController');

// initialize the router
const router = express.Router();

// Handle request to / for logging in a user
router.post('/signin',
  loginController.getUser,
  loginController.verifyUser,
  cookieController.setCookie,
  (req, res, next) => {
    if (!res.locals.user) {
      return res.status(400).json({ message: 'Could not verify login credentials' });
    }
      return res.status(200).json({ userID: res.locals.user._id });
  }
);

// Handle request to /oauth for logging in a user via oAuth
router.post('/oauth',
  loginController.verifyUser,
  cookieController.setCookie,
  (req, res, next) => {}
);

// Handle request to /signup to create a new user
router.post('/signup',
  loginController.getUser,
  loginController.createUser,
  cookieController.setCookie,
  (req, res, next) => {
    if (!res.locals.user) {
      return res.status(400).json({ message: 'Failed to create user' });
    }

    return res.status(200).json({ userID: res.locals.user._id });
  }
);

// export as router
module.exports = router;