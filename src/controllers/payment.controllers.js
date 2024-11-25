import { logger } from "../utils/index.js";
import {
  getAllPaymentsService,
  getPaymentByIdService,
  createPaymentService,
  updatePaymentByIdService,
  deletePaymentByIdService,
} from "../services/index.js";

export const getAllPaymentsCon = async (req, res, next) => {
  try {
    const allData = await getAllPaymentsService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getPaymentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getPaymentByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createPaymentCon = async (req, res, next) => {
  try {
    const { newAccountId, stripe_payment_id, amount, currency, status } =
      req.body;

    const data = await createPaymentService({
      account_id: newAccountId,
      stripe_payment_id: stripe_payment_id,
      amount: amount,
      currency: currency,
      status: status,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updatePaymentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { newAccountId, stripe_payment_id, amount, currency, status } =
      req.body;

    const data = await updatePaymentByIdService(id, {
      account_id: newAccountId,
      stripe_payment_id: stripe_payment_id,
      amount: amount,
      currency: currency,
      status: status,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deletePaymentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deletePaymentByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
