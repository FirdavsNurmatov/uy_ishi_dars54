import { Router } from "express";
import { paymentValidationSchema } from "../validation/index.js";
import { authGuard, paymentMiddleware } from "../middlewares/index.js";
import {
  createPaymentCon,
  deletePaymentByIdCon,
  getAllPaymentsCon,
  getPaymentByIdCon,
  updatePaymentByIdCon,
} from "../controllers/index.js";

export const paymentRouter = Router();

paymentRouter.get("/", authGuard, getAllPaymentsCon);
paymentRouter.get("/:id", authGuard, getPaymentByIdCon);
paymentRouter.post(
  "/",
  authGuard,
  paymentMiddleware(paymentValidationSchema),
  createPaymentCon
);
paymentRouter.put(
  "/:id",
  authGuard,
  paymentMiddleware(paymentValidationSchema),
  updatePaymentByIdCon
);
paymentRouter.delete("/:id", authGuard, deletePaymentByIdCon);
