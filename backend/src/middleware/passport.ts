import express from "express";
import dotenv from "dotenv";
import db from "../models";
import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";

dotenv.config();
const app = express();

// Cấu hình passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: process.env.REDIRECT_URL,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      cb: (err?: Error | null, user?: any) => void
    ) => {
      try {
        // Tìm hoặc tạo người dùng dựa trên googleId
        console.log(profile);
        const user = await db.users.findOne({ google_auth: profile.id });

        if (user) {
          // Nếu người dùng tồn tại, trả về người dùng
          return cb(null, user);
        } else {
          //   // Nếu không tìm thấy, tạo người dùng mới
          //   const newUser = new User({
          //     googleId: profile.id,
          //     // Thêm các thông tin khác từ profile nếu cần
          //   });
          //   await newUser.save();
          //   return cb(null, newUser);
        }
      } catch (err: any) {
        return cb(err, false);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});

export default passport;
