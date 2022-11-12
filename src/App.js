import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header, Footer } from "./components";

import {
  Admin,
  Cart,
  Contact,
  Home,
  orderHistory,
  Login,
  Register,
} from "./pages/index";
// import React from "react";
// import React, { useState } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<orderHistory />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
