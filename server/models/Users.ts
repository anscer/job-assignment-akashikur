import { model, Schema } from "mongoose";

import { Document } from "mongoose";

export interface User extends Document {
  _id: string;
  username: string;
  password: string;
  __v: number;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);
export default User;
