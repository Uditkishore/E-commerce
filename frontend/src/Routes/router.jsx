import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Checkout } from "../Components/Payment";
import { Cart } from "../Components/Cartpage";
import { Headers } from "../Components/Navbar";
import { Homepage } from "../Components/Landingpage";
import { Footer } from "../Components/Footer";
import { Productpage } from "../Components/ProductDetail";
export const Router = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Productpage />} />
      </Routes>
      <Footer />
    </>
  );
};
