import mongoose from "mongoose";

const Noteschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Note = mongoose.model("Note",Noteschema);

export default Note