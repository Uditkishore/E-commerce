import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const Headers = () => {
  const navigate = useNavigate();
  const count = useSelector((e) => e.counter);
  var cartArr = JSON.parse(localStorage.getItem("cartDataBase")) || [];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Zomato</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          </Nav>
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
        </Container>
      </Navbar>
    </>
  );
};
