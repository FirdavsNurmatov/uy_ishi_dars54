import db from "../database/index.js";

export const getAllStudentsService = async () => {
  try {
    const allData = await db.select("*").from("students");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getStudentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("students").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Student not found!" };
  } catch (error) {
    return error;
  }
};

export const createStudentService = async (studentData) => {
  try {
    const id = studentData?.id;
    const oldData = await db.select("*").from("students").where({ id });

    if ((oldData) => 1) {
      return { status: 401, msg: "Student already exists!" };
    }

    await db.table("students").insert(studentData);

    return { status: 200, msg: "Student created!" };
  } catch (error) {
    return error;
  }
};

export const updateStudentByIdService = async (id, studentData) => {
  try {
    const data = await db.select("*").from("students").where({ id });

    if (data.length >= 1) {
      await db.table("students").where({ id }).update(studentData);
      return { status: 200, msg: "Student updated!" };
    }

    return { status: 404, msg: "Student not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteStudentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("students").where({ id });

    if (data.length >= 1) {
      await db.table("students").where({ id }).del();
      return { status: 200, msg: "Student deleted!" };
    }

    return { status: 404, msg: "Student not found!" };
  } catch (error) {
    return error;
  }
};
