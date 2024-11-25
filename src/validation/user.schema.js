import Joi from "joi";

export const createUserValidationSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  account_id: Joi.number().min(1),
  role: Joi.string().valid("user", "admin", "manager").default("user"),
});

export const updateUserValidationSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  password: Joi.string().min(8),
  account_id: Joi.number().min(1),
  role: Joi.string().valid("user", "admin", "manager").default("user"),
});
