import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectedItem, productListItem } from "../Redux/action";
import { useNavigate } from "react-router";
export const Homepage = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const data = useSelector((e) => e.AllProducts);

  const navigate = useNavigate();

  const sortBy = () => {
    if (toggle) {
      let newData = data.sort((a, b) => a.rating - b.rating);
      dispatch(productListItem(newData));
      setToggle(!toggle);
    } else {
      let newData = data.sort((a, b) => b.rating - a.rating);
      dispatch(productListItem(newData));
      setToggle(!toggle);
    }
  };
  const filterallProducts = () => {
    dispatch(fetchApi());
  };
  const filterByPrice = () => {
    let newData = data.filter((a, b) => a.price < 100);
    dispatch(productListItem(newData));
  };

  const sendproductListItem = (data) => {
    dispatch(selectedItem(data));
    navigate(`/product/${data.id}`);
  };
  return (
    <div className="container h-100 mt-3">
      <div className="buttunsDiv">
        <Button onClick={sortBy} className="text-center">
          {toggle ? "Rating-high-low" : "Rating-low-high"}
        </Button>
        <Button onClick={filterallProducts} className="text-center">
          All Products
        </Button>
        <Button onClick={filterByPrice} className="text-center">
          Price below 100
        </Button>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {data.length ? (
          data.map((element, id) => {
            return (
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
                key={element.id}
                onClick={() => sendproductListItem(element)}
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
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <div id="loader">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
