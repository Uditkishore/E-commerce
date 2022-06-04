import React, { useState } from "react";

import {
  BsPinterest,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsVimeo,
} from "react-icons/bs";
import { useNavigate } from "react-router";
const alertfun = () => {
  alert("Email Recieved");
};

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="container-fluid flex-grow-1  flex-shrink-0"></div>
      <footer class="bg-white">
        <div class="container py-5">
          <div class="row py-4">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img
                src="https://www.kindpng.com/picc/m/704-7040561_app-food-detective-mission-delicious-food-icon-png.png"
                alt="image"
                width="180"
                class="mb-3"
              />
              <p class="font-italic text-muted">
                The customer app helps the customer to access the online food
                ordering platforms, search for the right restaurant or the dish
                they want to order, place their orders and pay easily.
              </p>
              <ul class="list-inline mt-4">
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <BsTwitter />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <BsFacebook />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <BsInstagram />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <BsPinterest />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <BsVimeo />
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Stores</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Bangalore
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Pune
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Delhi
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Kolkata
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/login")}
                    class="text-muted"
                  >
                    Login
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                    class="text-muted"
                  >
                    Register
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Wishlist
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                    class="text-muted"
                  >
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p class="text-muted mb-4">Quality that attracts you...</p>
              <div class="p-1 rounded border">
                <div class="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    class="form-control border-0 shadow-0"
                  />

                  <button
                    onClick={alertfun}
                    id="button-addon1"
                    type="submit"
                    class="btn btn-link"
                  >
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-light py-4">
          <div class="container text-center">
            <p class="text-muted mb-0 py-2">
              © 2019 MasaiShool All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
