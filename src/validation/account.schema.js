import Joi from "joi";

export const registerAccountValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  stripe_customer_id: Joi.number().min(1),
  stripe_subscription_id: Joi.number().min(1),
  plan: Joi.string().min(3),
  referrer: Joi.string(),
});

export const loginAccountValidationSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const updateAccountValidationSchema = Joi.object({
  email: Joi.string().email(),
  stripe_customer_id: Joi.number().min(1),
  stripe_subscription_id: Joi.number().min(1),
  plan: Joi.string().min(3),
  referrer: Joi.string(),
});
