const createError = require("../helpers/createError");

const validatorRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(createError(400, "no favorite field"));
    }
    next();
  };
};

module.exports = { validatorRequest };
