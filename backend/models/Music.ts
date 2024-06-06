import mongoose from "mongoose";
const { Schema, model } = mongoose;

const musicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    albumn_name: {
      type: String,
      required: true,
    },
    genere: {
      type: String,
      required: true,
    },
    artist: {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  },
  { timestamps: true }
);

const Music = model("Music", musicSchema);

export default Music;
