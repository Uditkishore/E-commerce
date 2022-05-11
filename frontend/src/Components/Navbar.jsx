import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { productItem } from "../Redux/action";

export const Headers = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const dispatch = useDispatch();
  const handleChange = () => {
    axios
      .get("http://localhost:8080/product")
      .then((res) => dispatch(productItem(res.data)));
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Zomato</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handleChange}>Home</Nav.Link>
          </Nav>
          <Badge
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={() => navigate("/cart")}
            badgeContent={4}
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
