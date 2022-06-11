import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../Redux/Auth/action";

export const Headers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("user"));
  const cartData = useSelector((e) => e.cartData);
  var cartArr = JSON.parse(localStorage.getItem("cartDataBase")) || [];
  const logoutBtn = (e) => {
    dispatch(clearUser(""));
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="hstack gap-3">
            <img
              width={"20px"}
              src="https://www.kindpng.com/picc/m/704-7040561_app-food-detective-mission-delicious-food-icon-png.png"
              alt=""
            />
            LOGO
            <Navbar.Brand>Zaika</Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          </Nav>
          {user && user.token ? (
            <Nav
              className="btn btn-primary p-2 mx-3 pointer"
              onClick={logoutBtn}
            >
              logout
            </Nav>
          ) : (
            <Nav
              className="btn btn-primary p-2 mx-3 pointer"
              onClick={() => navigate("/login")}
            >
              login
            </Nav>
          )}
          {user && user.token ? (
            <Badge
              id="basic-button"
              aria-haspopup="true"
              onClick={() => navigate("/cart")}
              badgeContent={cartData.cart.length}
              color="primary"
            >
              <i
                className="fa-solid fa-cart-shopping text-light"
                style={{ fontSize: 25, cursor: "pointer" }}
              ></i>
            </Badge>
          ) : (
            <div></div>
          )}
        </Container>
      </Navbar>
    </>
  );
};
