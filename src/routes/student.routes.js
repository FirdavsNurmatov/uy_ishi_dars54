import { Router } from "express";
import { authGuard, studentMiddleware } from "../middlewares/index.js";
import {
  createStudentValidationSchema,
  updateStudentValidationSchema,
} from "../validation/index.js";
import {
  createStudentCon,
  deleteStudentByIdCon,
  getAllStudentsCon,
  getStudentByIdCon,
  updateStudentByIdCon,
} from "../controllers/index.js";

export const studentRotuter = Router();

studentRotuter.get("/", authGuard, getAllStudentsCon);
studentRotuter.get("/:id", authGuard, getStudentByIdCon);
studentRotuter.post(
  "/",
  authGuard,
  studentMiddleware(createStudentValidationSchema),
  createStudentCon
);
studentRotuter.put(
  "/:id",
  authGuard,
  studentMiddleware(updateStudentValidationSchema),
  updateStudentByIdCon
);
studentRotuter.delete("/:id", authGuard, deleteStudentByIdCon);
