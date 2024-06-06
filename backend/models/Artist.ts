import mongoose from "mongoose";
const { Schema, model } = mongoose;

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    no_of_albums: {
      type: Number,
      required: true,
    },
    music: [
      {
        type: Schema.Types.ObjectId,
        ref: "Music",
      },
    ],
  },
  { timestamps: true }
);

const Artist = model("Artist", artistSchema);

export default Artist;
