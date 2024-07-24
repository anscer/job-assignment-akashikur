import express from "express";
import userRoutes from "./routes/userRoute";
import stateRoutes from "./routes/stateRoutes";
import session from "express-session";
import passport from "./config/passport";
const db = require("./utlit/db");

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", userRoutes);
app.use("/api/states", stateRoutes);

app.listen("3000", () => {
  console.log("SERVER RUN AT", 3000);
});
