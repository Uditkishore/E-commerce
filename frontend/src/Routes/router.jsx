import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Product } from "../Components/ProductPage";
import { Homepage } from "../Components/Homepage";
import { Checkout } from "../Components/Payment";
import { Navbar } from "../Components/Navbar";
import { Signup } from "../Components/Signup";
import { Cart } from "../Components/Cartpage";
import { Login } from "../Components/login";
export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
