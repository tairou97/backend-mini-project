import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 1000;

async function dataBase() {
  mongoose.connect(process.env.URL);
  console.log("DataBase is connectetd");
}
dataBase().catch((error) => console.log(error));

app.use("/books", booksRoutes);

app.listen(PORT, () => {
  console.log("Connected Backend on Port:", PORT);
});
