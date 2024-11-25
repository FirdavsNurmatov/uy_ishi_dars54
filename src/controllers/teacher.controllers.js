import { logger } from "../utils/index.js";
import {
  createTeacherService,
  deleteTeacherByIdService,
  getAllTeachersService,
  getTeacherByIdService,
  updateTeacherByIdService,
} from "../services/index.js";

export const getAllTeachersCon = async (req, res, next) => {
  try {
    const allData = await getAllTeachersService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getTeacherByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getTeacherByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createTeacherCon = async (req, res, next) => {
  try {
    const { user_id } = req.body;

    const data = await createTeacherService({
      user_id: user_id,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateTeacherByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { user_id } = req.body;

    const data = await updateTeacherByIdService(id, {
      user_id: user_id,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteTeacherByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteTeacherByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
