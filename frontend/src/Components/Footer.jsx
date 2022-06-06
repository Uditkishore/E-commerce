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
      <div className="container-fluid flex-grow-1  flex-shrink-0">
        <footer className="bg-white">
          <div className="container py-5">
            <div className="row py-4">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <img
                  src="https://www.kindpng.com/picc/m/704-7040561_app-food-detective-mission-delicious-food-icon-png.png"
                  alt="image"
                  width="180"
                  className="mb-3"
                />
                <p className="font-italic text-muted">
                  The customer app helps the customer to access the online food
                  ordering platforms, search for the right restaurant or the
                  dish they want to order, place their orders and pay easily.
                </p>
                <ul className="list-inline mt-4">
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="twitter">
                      <BsTwitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="facebook">
                      <BsFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="instagram">
                      <BsInstagram />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="pinterest">
                      <BsPinterest />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank" title="vimeo">
                      <BsVimeo />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">Stores</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Bangalore
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Pune
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Delhi
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Kolkata
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Company
                </h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/login")}
                      className="text-muted"
                    >
                      Login
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/signup")}
                      className="text-muted"
                    >
                      Register
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-muted">
                      Wishlist
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/")}
                      className="text-muted"
                    >
                      Our Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mb-lg-0">
                <h6 className="text-uppercase font-weight-bold mb-4">
                  Newsletter
                </h6>
                <p className="text-muted mb-4">Quality that attracts you...</p>
                <div className="p-1 rounded border">
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      aria-describedby="button-addon1"
                      className="form-control border-0 shadow-0"
                    />

                    <button
                      onClick={alertfun}
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light py-4">
            <div className="container text-center">
              <p className="text-muted mb-0 py-2">
                © 2019 MasaiShool All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
