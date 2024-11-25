import { Router } from "express";
import { accountMiddleware, authGuard } from "../middlewares/index.js";
import {
  loginAccountValidationSchema,
  registerAccountValidationSchema,
  updateAccountValidationSchema,
} from "../validation/index.js";
import {
  getAllAccountsCon,
  getAccountByEmailCon,
  registerCon,
  loginCon,
  updateAccountByEmailCon,
  deleteAccountByEmailCon,
} from "../controllers/index.js";

export const accountRouter = Router();

accountRouter.get("/", authGuard, getAllAccountsCon);
accountRouter.get("/:email", authGuard, getAccountByEmailCon);
accountRouter.post(
  "/register",
  accountMiddleware(registerAccountValidationSchema),
  registerCon
);
accountRouter.post(
  "/login",
  accountMiddleware(loginAccountValidationSchema),
  loginCon
);
accountRouter.put(
  "/:email",
  accountMiddleware(updateAccountValidationSchema),
  authGuard,
  updateAccountByEmailCon
);
accountRouter.delete("/:email", authGuard, deleteAccountByEmailCon);
