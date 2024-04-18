import express from "express";
import User from "../model/User.js";
import bodyParser from "body-parser";
const userRoutes = express.Router();
userRoutes.use(bodyParser.json());

userRoutes
  .get("/", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  })
  .post("/", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({
        name,
        email,
        password,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  });

userRoutes
  .get("/:id", async (req, res) => {
    const userID = req.params.id;

    try {
      const user = await User.findById(userID);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  })
  .patch("/:id", async (req, res) => {
    const userID = req.params.id;
    const { name, email, password } = req.body;
    try {
      const user = await User.findByIdAndUpdate(userID, {
        name,
        email,
        password,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  })
  .delete("/:id", async (req, res) => {
    const userID = req.params.id;

    try {
      const user = await User.findByIdAndDelete(userID);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  });

export default userRoutes;
