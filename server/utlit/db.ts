import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://akashikur011:Katana12@cluster0.rtag8mv.mongodb.net/anscer"
  )
  .then(() => {
    console.log("MONGODB CONNECTED");
  })
  .catch(() => {
    console.log("ERROR WHILE CONNECTING");
  });
