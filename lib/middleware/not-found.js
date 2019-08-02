module.exports = (req, res, next) => {
  const error = new Error('thing not found sry');
  error.status = 404;
  next(error);
};
