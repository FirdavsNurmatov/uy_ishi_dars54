import postgres from "./db.js";
import application from "./app.js";
import jwt from "./jwt.js";

export const config = {
  ...postgres,
  ...application,
  ...jwt,
};
