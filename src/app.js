import express from "express";
import morgan from "morgan";
import db from "./database/index.js";
import { logger } from "./utils/index.js";
import { down, up } from "../migrations/20241124102739_migrate_1.js";
import {
  accountRouter,
  paymentRouter,
  studentRotuter,
  teacherRotuter,
  userRouter,
} from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/v1/setup", async (req, res) => {
  try {
    await up(db);

    res.send("ok");
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

app.use("/accounts", accountRouter);
app.use("/payments", paymentRouter);
app.use("/users", userRouter);
app.use("/teachers", teacherRotuter);
app.use("/students", studentRotuter);

app.get("/api/v1/endup", async (req, res) => {
  try {
    await down(db);

    res.send("ok");
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.message);
  }
});

export default app;