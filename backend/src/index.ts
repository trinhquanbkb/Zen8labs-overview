import express from "express";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { rootRouter } from "./routers";
import { SocketService } from "./service/socket.service";
import admin from "firebase-admin";
import { serviceAccount } from "./config/push-notification-4880b-firebase-adminsdk-d9a5t-db84643803";

dotenv.config();
const app = express();
const port = process.env.PORT;

// session
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
  })
);

// config FCM
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});
// define function to send a notification
const sendNotification = async (registrationToken: string, message: any) => {
  const messageSend = {
    token: registrationToken,
    notification: message,
    data: {},
  };

  admin
    .messaging()
    .send(messageSend)
    .then((response) => {
      console.log(`Success send messaging: ${response}`);
    })
    .catch((error) => {
      console.log(`Error send messaging: ${error}`);
    });
};

const registrationToken =
  "eWGZAXeGTIwAASVPGZZFZd:APA91bEknNOFBqn9dlms5itLyhCDngbkj4idXHaCzaGxFM5nLwmTQfInC-kIl10sfZfE8b519ZqGtyeswsjYt8kYIwyqNBFpufhex-xME7plfWquhIlkAY-fMEz3BEXs94mc_AoQiZYX";
sendNotification(registrationToken, {
  title: "hello",
  body: "bye",
});

// config passport
app.use(passport.initialize());
app.use(passport.session());
require("./middleware/passport");

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", rootRouter);

const server = SocketService.initSocket(app);
server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
