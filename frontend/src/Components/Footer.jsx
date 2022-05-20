import React, { useState } from "react";

export const Footer = () => {
  return (
    <>
      <div className=" px-4 py-5 mt-3 border-top">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
          alt=""
        />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 text-center mt-5">
          <div className="col  d-flex flex-column justify-content-center align-items-center text-start">
            <h6>ABOUT ZOMATO</h6>
            <ul>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="col  d-flex flex-column justify-content-center align-items-center text-start">
            <h6>ZOMAVERSE</h6>
            <div>
              <ul>
                <li>Who We Are</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Zomaland</li>
              </ul>
            </div>
          </div>
          <div className="col  d-flex flex-column justify-content-center align-items-center text-start">
            <h6>FOR RESTAURANTS</h6>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>
          <div className="col  d-flex flex-column justify-content-center align-items-center text-start">
            <h6>LEARN MORE</h6>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
