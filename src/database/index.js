import knex from "knex";
import { config } from "../config/index.js";

const db = knex({
  client: "pg",
  connection: {
    host: config.postgres.host,
    user: config.postgres.user,
    password: config.postgres.password,
    database: config.postgres.database,
    port: config.postgres.port,
  },
  pool: { min: 0, max: 10 },
});

export default db;
