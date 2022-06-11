import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "../Components/CartPage/Cartpage";
import { Headers } from "../Navbar/Navbar";
import { Homepage } from "../Components/Home/Landingpage";
import { Footer } from "../Components/Footer/Footer";
import { Productpage } from "../Components/ProductDetail/ProductDetail";
import { Checkout } from "../Components/Checkout/Checkout";
import Signup from "../Components/Signup/Signup";
import LoginPage from "../Components/Login/Login";
import Confirmation from "../Components/Confirmation/Confermation";
export const Router = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/product/:id" element={<Productpage />} />
      </Routes>
      <Footer />
    </>
  );
};
