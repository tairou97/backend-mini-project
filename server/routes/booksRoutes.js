import express from "express";
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
    const {
      title,
      author,
      ISBN,
      cover,
      publication_year,
      created_at,
      updated_at,
      page,
    } = req.body;
    try {
      const books = await Books.create({
        title: title, // title is the key in the request body
        author: author,
        ISBN: ISBN,
        cover: cover,
        publication_year: publication_year,
        created_at: created_at,
        updated_at: updated_at,
        page: page,
      });

      res.send(books);
      console.log(books);
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
  .patch("/:id", async (req, res) => {
    // Logik zum Aktualisieren von Buchinformationen
    try {
      const booksID = req.params.id;
      const {
        title,
        author,
        ISBN,
        cover,
        publication_year,
        created_at,
        updated_at,
        page,
      } = req.body;
      const result = await Books.findByIdAndUpdate(booksID, {
        title: title, // title is the key in the request body
        author: author,
        ISBN: ISBN,
        cover: cover,
        publication_year: publication_year,
        created_at: created_at,
        updated_at: updated_at,
        page: page,
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
