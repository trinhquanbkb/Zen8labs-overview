import express from "express";
import dotenv from "dotenv";
import { rootRouter } from "./routers";
import bodyParser = require("body-parser");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
