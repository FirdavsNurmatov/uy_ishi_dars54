import db from "../database/index.js";

export const getAllPaymentsService = async () => {
  try {
    const allData = await db.select("*").from("payment");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getPaymentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("payment").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Payment not found!" };
  } catch (error) {
    return error;
  }
};

export const createPaymentService = async (paymentData) => {
  try {
    const id = paymentData?.id;
    const oldData = await db.select("*").from("payment").where({ id });

    if ((oldData) => 1) {
      return { status: 401, msg: "payment already exists!" };
    }

    await db.table("payment").insert(paymentData);

    return { status: 200, msg: "payment created" };
  } catch (error) {
    return error;
  }
};

export const updatePaymentByIdService = async (id, paymentData) => {
  try {
    const data = await db.select("*").from("payment").where({ id });

    if (data.length >= 1) {
      await db.table("payment").where({ id }).update(paymentData);
      return { status: 200, msg: "Payment updated!" };
    }

    return { status: 404, msg: "Payment not found!" };
  } catch (error) {
    return error;
  }
};

export const deletePaymentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("payment").where({ id });

    if (data.length >= 1) {
      await db.table("payment").where({ id }).del();
      return { status: 200, msg: "Payment deleted!" };
    }

    return { status: 404, msg: "Payment not found!" };
  } catch (error) {
    return error;
  }
};
