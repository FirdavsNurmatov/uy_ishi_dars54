import Joi from "joi";

export const paymentValidationSchema = Joi.object({
  account_id: Joi.number().min(1),
  stripe_payment_id: Joi.number().min(1),
  amount: Joi.number().min(1),
  currency: Joi.string().min(2),
  status: Joi.string(),
});
