import express from "express";
import dotenv from "dotenv";
import db from "../models";
import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";

dotenv.config();
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: `http://localhost:${process.env.PORT}/api/v1/auth/google/callback`,
      proxy: true,
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      cb: (err?: Error | null, user?: any) => void
    ) => {
      try {
        const user = await db.users.findOne({
          where: { google_auth: profile.id },
        });
        if (user && profile) {
          return cb(null, user.dataValues);
        } else {
          const newUser = await db.users.create({
            first_name: profile._json.family_name,
            last_name: profile._json.given_name,
            nick_name: profile._json.name,
            email: profile._json.email,
            google_auth: profile.id,
          });
          return cb(null, newUser.dataValues);
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
