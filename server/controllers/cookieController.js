const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  if (!res.locals.user) return next();

  // get user's _id primary key and save in a variable 
  const userID = res.locals.user._id;

  // set a cookie equal to the user's _id primary key
  res.cookie('userID', userID);

  return next();
};

module.exports = cookieController;