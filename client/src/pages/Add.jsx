import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [books, setBooks] = React.useState({
    title: "",
    Autor: "",
    ISBN: "",
    cover: "",
    publication: "",
    created: "",
    updated: "",
    page: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/books", books);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(books);
  return (
    <div
      className="form"
      style={{
        display: "flex",
        padding: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap: "10px",
      }}
    >
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="titel"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="autor"
        onChange={handleChange}
        name="autor"
      />
      <input
        type="number"
        placeholder="ISBN"
        onChange={handleChange}
        name="ISBN"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <input
        type="text"
        placeholder=" publication "
        onChange={handleChange}
        name="publication"
      />
      <input
        type="text"
        placeholder="created "
        onChange={handleChange}
        name="created"
      />
      <input
        type="text"
        placeholder=" updated "
        onChange={handleChange}
        name="updated"
      />
      <input
        type="text"
        placeholder=" page"
        onChange={handleChange}
        name="page"
      />
      <button
        onClick={handleClick}
        style={{
          display: "flex",
          justifyContent: "center",

          padding: "10px",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          gap: "10px",
          backgroundColor: "green",
          border: "none",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Add;
