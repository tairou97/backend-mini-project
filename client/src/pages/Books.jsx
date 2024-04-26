import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:9000/books");
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/books/${id}`);
      const response = await axios.get("http://localhost:9000/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="books-card p-4 relative top-28 z-0 ">
        {books.map((book) => (
          <div key={book._id} className="card  ">
            <div className=" card-img">
              <img src={book.cover} alt={book.title} />
            </div>

            <div className="  h2 font-bold">
              <h2>{book.title}</h2>
            </div>

            <div className=" contentCard p-2">
              <p>Autor: {book.author}</p>
              <p>ISBN: {book.ISBN}</p>
              <p>Publication Year: {book.publication_year}</p>
              <p>{book.created_at}</p>
              <p>{book.updated_at}</p>
              <p> Number of Page: {book.page}</p>
              <div className="btns">
                <button
                  className=" btn btnRed"
                  onClick={() => handleDelete(book._id)}
                >
                  Deleted
                </button>
                <button className="btn btnGreen">
                  <Link to={`/update/${book._id}`}>Update</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="add  px-10 rounded-md  py-3  text-green-700 bg-slate-900 fixed bottom-0 font-bold right-28 ">
        <Link to="/add">Add new Book</Link>
      </button>
    </div>
  );
};

export default Books;
