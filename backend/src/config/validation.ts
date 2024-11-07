import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production'),
  CORS_ORIGIN_URLS: Joi.string().required(),
});
