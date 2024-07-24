import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MONGODB CONNECTED");
  })
  .catch(() => {
    console.log("ERROR WHILE CONNECTING");
  });
