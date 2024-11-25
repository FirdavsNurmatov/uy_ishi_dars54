import { logger } from "../utils/index.js";
import {
  getAllStudentsService,
  getStudentByIdService,
  createStudentService,
  updateStudentByIdService,
  deleteStudentByIdService,
} from "../services/student.service.js";

export const getAllStudentsCon = async (req, res, next) => {
  try {
    const allData = await getAllStudentsService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getStudentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getStudentByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createStudentCon = async (req, res, next) => {
  try {
    const { permission, user_id } = req.body;

    const data = await createStudentService({
      permission: permission,
      user_id: user_id,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateStudentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { permission, user_id } = req.body;

    const data = await updateStudentByIdService(id, {
      permission: permission,
      user_id: user_id,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteStudentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteStudentByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
