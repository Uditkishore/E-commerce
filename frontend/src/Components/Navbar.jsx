import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { countAction } from "../Redux/action";

export const Headers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("userData"));
  const count = useSelector((e) => e.counter);
  var cartArr = JSON.parse(localStorage.getItem("cartDataBase")) || [];
  const logoutBtn = (e) => {
    localStorage.setItem("userData", JSON.stringify([]));
    dispatch(countAction(0));
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Zomato</Navbar.Brand>
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
              badgeContent={count === 0 ? cartArr.length : count}
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
