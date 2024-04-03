import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { UserModel } from "../models/userModel.js";

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const verify = (jwt_payload, done) => {
  console.log("5")
  const { sub } = jwt_payload;
  try {
    console.log("6")
    const user = UserModel.findById(sub);
    console.log("user in passport", user);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.log("7")
    return done(error, false);
  }
};

const strategy = new JwtStrategy(options, verify);

export const passportConfig = () => {
  console.log("8")
  passport.use(strategy);
};
