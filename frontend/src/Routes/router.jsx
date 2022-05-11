import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Checkout } from "../Components/Payment";
import { Signup } from "../Components/Signup";
import { Cart } from "../Components/Cartpage";
import { Login } from "../Components/login";
import { Headers } from "../Components/Navbar";
import { Homepage } from "../Components/Landingpage";
export const Router = () => {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
