const errorMiddleware = handlerRoute => {
  return async (req, res, next) => {
    try {
      await handlerRoute(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = errorMiddleware;