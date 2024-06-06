import mongoose from "mongoose";
const { Schema, model } = mongoose;

enum Role {
  ADMIN,
  MANAGER,
  ARTIST
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Role,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
