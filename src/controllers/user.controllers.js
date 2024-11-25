import { logger } from "../utils/index.js";
import {
  getAllUsersService,
  getUserByEmailService,
  createUserService,
  updateUserByEmailService,
  deleteUserByEmailService,
} from "../services/index.js";

export const getAllUsersCon = async (req, res, next) => {
  try {
    const allData = await getAllUsersService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getUserByEmailCon = async (req, res, next) => {
  try {
    const email = req.params.email;

    const data = await getUserByEmailService(email);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createUserCon = async (req, res, next) => {
  try {
    const { name, email, password, account_id, role } = req.body;

    const data = await createUserService({
      name: name,
      email: email,
      password: password,
      account_id: account_id,
      role: role,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateUserByEmailCon = async (req, res, next) => {
  try {
    const currentEmail = req.params.email;

    const { name, newEmail, password, account_id, role } = req.body;

    const data = await updateUserByEmailService(currentEmail, {
      name: name,
      email: newEmail,
      password: password,
      account_id: account_id,
      role: role,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteUserByEmailCon = async (req, res, next) => {
  try {
    const email = req.params.email;

    const data = await deleteUserByEmailService(email);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
