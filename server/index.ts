import express from "express";
import userRoutes from "./routes/userRoute";
import stateRoutes from "./routes/stateRoutes";

const db = require("./utlit/db");

const app = express();

app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/states", stateRoutes);

app.listen("3000", () => {
  console.log("SERVER RUN AT", 3000);
});
