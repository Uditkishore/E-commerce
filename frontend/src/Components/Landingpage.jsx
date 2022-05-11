import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import Cardsdata from "./data";
import { useDispatch, useSelector } from "react-redux";
import { productItem } from "../Redux/action";
export const Homepage = () => {
  const dispatch = useDispatch();
  const data = useSelector((e) => e);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/product")
      .then((res) => dispatch(productItem(res.data)));
  };
  let sortBy = () => {
    let newData = data.sort((a, b) => a.rating - b.rating);
    dispatch(productItem(newData));
  };
  let filterBy = () => {
    let newData = data.filter((e) => e.price < 100);
    dispatch(productItem(newData));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Product page</h2>
      <div className="d-flex gap-3 justify-content-center align-items-center p-3">
        <Button onClick={sortBy} className="text-center">
          sortByRating
        </Button>
        <select onChange={filterBy}>
          <option>select...</option>
          <option value="hundred">below 100</option>
        </select>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <Card
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
              key={element.id}
            >
              <Card.Img
                variant="top"
                src={element.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Title>{element.rating}</Card.Title>
                <Card.Title>{element.address}</Card.Title>
                <Card.Text>Price : ₹ {element.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={() => send(element)}
                    className="col-lg-12"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
