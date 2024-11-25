import db from "../database/index.js";
import { generateToken } from "../utils/jwt/index.js";

export const getAllAccountsService = async () => {
  try {
    const allData = await db.select("*").from("account");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getAccountByEmailService = async (email) => {
  try {
    const data = await db.select("*").from("account").where({ email }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Account not found!" };
  } catch (error) {
    return error;
  }
};

export const registerService = async (accountData) => {
  try {
    const email = accountData?.email;
    const oldData = await db.select("*").from("account").where({ email });

    if ((oldData) => 1) {
      return { status: 401, msg: "Account already exists!" };
    }

    await db.table("account").insert(accountData);

    return { status: 200, msg: "Account created" };
  } catch (error) {
    return error;
  }
};

export const loginService = async (email) => {
  try {
    const data = await db.select("*").from("account").where({ email });

    if (data.length >= 1) {
      await db.table("account").where({ email }).update({ is_active: true });

      const accessToken = await generateToken("access", { email });
      const refreshToken = await generateToken("refresh", { email });

      return {
        status: 200,
        msg: { accessToken: accessToken, refreshToken: refreshToken },
      };
    }

    return { status: 404, msg: "Account not found!" };
  } catch (error) {
    return error;
  }
};

export const updateAccountByEmailService = async (email, accountData) => {
  try {
    const data = await db.select("*").from("account").where({ email });

    if (data.length >= 1) {
      await db.table("account").where({ email }).update(accountData);
      return { status: 200, msg: "Account updated!" };
    }

    return { status: 404, msg: "Account not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteAccountByEmailService = async (email) => {
  try {
    const data = await db.select("*").from("account").where({ email });

    if (data.length >= 1) {
      await db.table("account").where({ email }).del();
      return { status: 200, msg: "Account deleted!" };
    }

    return { status: 404, msg: "Account not found!" };
  } catch (error) {
    return error;
  }
};
