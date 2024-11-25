import { Router } from "express";
import { authGuard, teacherMiddleware } from "../middlewares/index.js";
import {
  createTeacherValidationSchema,
  updateTeacherValidationSchema,
} from "../validation/index.js";
import {
  createTeacherCon,
  deleteTeacherByIdCon,
  getAllTeachersCon,
  getTeacherByIdCon,
  updateTeacherByIdCon,
} from "../controllers/index.js";

export const teacherRotuter = Router();

teacherRotuter.get("/", authGuard, getAllTeachersCon);
teacherRotuter.get("/:id", authGuard, getTeacherByIdCon);
teacherRotuter.post(
  "/",
  authGuard,
  teacherMiddleware(createTeacherValidationSchema),
  createTeacherCon
);
teacherRotuter.put(
  "/:id",
  authGuard,
  teacherMiddleware(updateTeacherValidationSchema),
  updateTeacherByIdCon
);
teacherRotuter.delete("/:id", authGuard, deleteTeacherByIdCon);
