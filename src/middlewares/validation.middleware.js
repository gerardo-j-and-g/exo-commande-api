const defaultOptions = {
  validateQuery: false,
  abortEarly: false,
};

export const validationMiddelware =
  (schema, options = defaultOptions) =>
  async (req, res, next) => {
    options = { ...defaultOptions, ...options };
    try {
      const data = await schema.validate(
        options.validateQuery ? req.query : req.body,
        {
          abortEarly: options.abortEarly,
        }
      );
      req.parsedData = data;
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };
