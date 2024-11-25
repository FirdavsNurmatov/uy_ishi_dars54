import Joi from "joi";

export const createStudentValidationSchema = Joi.object({
  permission: Joi.boolean(),
  user_id: Joi.number().min(1).required(),
});

export const updateStudentValidationSchema = Joi.object({
  permission: Joi.boolean(),
  user_id: Joi.number().min(1),
});
