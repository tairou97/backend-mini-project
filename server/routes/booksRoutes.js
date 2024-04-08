import express from "express";
import mongoose from "mongoose";
import Books from "../model/Books.js";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.json());

router
  .get("/", async (req, res) => {
    try {
      const books = await Books.find();
      res.send(books);
    } catch (error) {
      res.send({ message: error });
    }
  })
  .post("/", async (req, res) => {
    const books = await Books.create({
      title: req.body.title, // title is the key in the request body
      author: req.body.author,
      ISBN: req.body.ISBN,
      cover: req.body.cover,
      publication_year: req.body.publication_year,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      page: req.body.page,
    });
    const result = books;
    try {
      const response = {
        title: result.title, // title is the key in the request body
        author: result.author,
        ISBN: result.ISBN,
        cover: result.cover,
        publication_year: result.publication_year,
        created_at: result.created_at,
        updated_at: result.updated_at,
        page: result.page,
      };
      res.send(response);
      console.log(response);
    } catch (error) {
      res.send(error);
    }
  })
  .delete("/", async (req, res) => {
    try {
      const result = await Books.deleteMany({});
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  });

router
  .get("/:id", async (req, res) => {
    // Logik zum Abrufen der Buchdetails
    const booksID = req.params.id;
    try {
      const result = await Books.findById({ _id: booksID });
      res.send(result);
    } catch (error) {
      res.status(404).send("Doesn't exist");
    }
  })
  .put("/:id", async (req, res) => {
    // Logik zum Aktualisieren von Buchinformationen
    try {
      const booksID = req.params.id;
      const result = await Books.findByIdAndUpdate(booksID, {
        title: req.body.title, // title is the key in the request body
        author: req.body.author,
        ISBN: req.body.ISBN,
        cover: req.body.cover,
        publication_year: req.body.publication_year,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
        page: req.body.page,
      });
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  })
  .delete("/:id", async (req, res) => {
    // Logik zum Löschen eines Buches
    try {
      const booksID = req.params.id;
      await Books.findByIdAndDelete(booksID);
      res.send(`Deleted was successfully ${booksID}`);
    } catch (error) {
      res.send(error);
    }
  });

// router.put("/", async (req, res) => {
//   try {
//     const result = await Books.replaceOne({});
//   } catch (error) {}
// });

export default router;
