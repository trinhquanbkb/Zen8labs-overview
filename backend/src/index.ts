import express from "express";
import dotenv from "dotenv";
import { rootRouter } from "./routers";
import bodyParser = require("body-parser");
import cors from "cors";
import session from "express-session";
import passport from "passport";

dotenv.config();
const app = express();
const port = process.env.PORT;

// Cấu hình session
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
  })
);
// config passport
app.use(passport.initialize());
app.use(passport.session());
require("./middleware/passport");

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", rootRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
