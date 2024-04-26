import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import BookDetails from "./pages/BookDetails";
import Basket from "./pages/details/Basket";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookdetail/:id" element={<BookDetails />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
