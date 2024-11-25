import { logger } from "../utils/index.js";
import {
  getAllAccountsService,
  getAccountByEmailService,
  registerService,
  loginService,
  updateAccountByEmailService,
  deleteAccountByEmailService,
} from "../services/index.js";

export const getAllAccountsCon = async (req, res, next) => {
  try {
    const allData = await getAllAccountsService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getAccountByEmailCon = async (req, res, next) => {
  try {
    const email = req.params.email;

    const data = await getAccountByEmailService(email);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const registerCon = async (req, res, next) => {
  try {
    const {
      email,
      stripe_customer_id,
      stripe_subscription_id,
      plan,
      referrer,
    } = req.body;

    const data = await registerService({
      email: email,
      stripe_customer_id: stripe_customer_id,
      stripe_subscription_id: stripe_subscription_id,
      plan: plan,
      referrer: referrer,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const loginCon = async (req, res, next) => {
  try {
    const { email } = req.body;

    const data = await loginService(email);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateAccountByEmailCon = async (req, res, next) => {
  try {
    const currentEmail = req.params.email;

    const {
      newEmail,
      stripe_customer_id,
      stripe_subscription_id,
      plan,
      referrer,
    } = req.body;

    const data = await updateAccountByEmailService(currentEmail, {
      email: newEmail,
      stripe_customer_id: stripe_customer_id,
      stripe_subscription_id: stripe_subscription_id,
      plan: plan,
      referrer: referrer,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteAccountByEmailCon = async (req, res, next) => {
  try {
    const email = req.params.email;

    const data = await deleteAccountByEmailService(email);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
