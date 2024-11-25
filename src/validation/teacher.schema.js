import Joi from "joi";

export const createTeacherValidationSchema = Joi.object({
  user_id: Joi.number().min(1).required(),
});

export const updateTeacherValidationSchema = Joi.object({
  user_id: Joi.number().min(1),
});
