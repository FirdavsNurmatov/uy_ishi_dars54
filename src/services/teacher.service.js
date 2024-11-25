import db from "../database/index.js";

export const getAllTeachersService = async () => {
  try {
    const allData = await db.select("*").from("teachers");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getTeacherByIdService = async (id) => {
  try {
    const data = await db.select("*").from("teachers").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Teacher not found!" };
  } catch (error) {
    return error;
  }
};

export const createTeacherService = async (teacherData) => {
  try {
    const id = teacherData?.id;
    const oldData = await db.select("*").from("teachers").where({ id });

    if ((oldData) => 1) {
      return { status: 401, msg: "Teacher already exists!" };
    }

    await db.table("teachers").insert(teacherData);

    return { status: 200, msg: "Teacher created!" };
  } catch (error) {
    return error;
  }
};

export const updateTeacherByIdService = async (id, teacherData) => {
  try {
    const data = await db.select("*").from("teachers").where({ id });

    if (data.length >= 1) {
      await db.table("teachers").where({ id }).update(teacherData);
      return { status: 200, msg: "Teacher updated!" };
    }

    return { status: 404, msg: "Teacher not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteTeacherByIdService = async (id) => {
  try {
    const data = await db.select("*").from("teachers").where({ id });

    if (data.length >= 1) {
      await db.table("teachers").where({ id }).del();
      return { status: 200, msg: "Teacher deleted!" };
    }

    return { status: 404, msg: "Teacher not found!" };
  } catch (error) {
    return error;
  }
};
