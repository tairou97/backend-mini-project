import "./App.css";
import React from "react";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
