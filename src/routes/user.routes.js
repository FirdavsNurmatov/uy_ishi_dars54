import { Router } from "express";
import { authGuard, userMiddleware } from "../middlewares/index.js";
import {
  createUserValidationSchema,
  updateUserValidationSchema,
} from "../validation/index.js";
import {
  createUserCon,
  deleteUserByEmailCon,
  getAllUsersCon,
  getUserByEmailCon,
  updateUserByEmailCon,
} from "../controllers/index.js";

export const userRouter = Router();

userRouter.get("/", authGuard, getAllUsersCon);
userRouter.get("/:email", getUserByEmailCon);
userRouter.post(
  "/",
  authGuard,
  userMiddleware(createUserValidationSchema),
  createUserCon
);
userRouter.put(
  "/:email",
  authGuard,
  userMiddleware(updateUserValidationSchema),
  updateUserByEmailCon
);
userRouter.delete("/:email", authGuard, deleteUserByEmailCon);
