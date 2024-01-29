import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    const contactLength = Object.keys(req.body).length;
    if (contactLength < 1) {
      next(
        HttpError(
          400,
          "Please enter at least one field (name, email or phone) to update the contact"
        )
      );
    }
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
