import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookSchema = Schema({
  title: String,
  author: String,
  ISBN: Number,
  publication_year: Number,
  cover: String,
  created_at: Number,
  updated_at: Number,
  page: Number,
});

const Books = model("Books", bookSchema);
export default Books;
