import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectedItem } from "../Redux/action";
import { useNavigate } from "react-router";
export const Homepage = () => {
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const data = useSelector((e) => e.AllProducts);

  const navigate = useNavigate();

  const sortBy = () => {
    if (toggle) {
      let newData = data.sort((a, b) => a.rating - b.rating);
      dispatch(productItem(newData));
      setToggle(!toggle);
    } else {
      let newData = data.sort((a, b) => b.rating - a.rating);
      dispatch(productItem(newData));
      setToggle(!toggle);
    }
  };
  const filterByPrice = () => {
    if (toggle1) {
      axios
        .get(`https://zomatofakeshopdb.herokuapp.com/product`)
        .then((res) => {
          let data = res.data;
          let newData = data.filter((e) => e.price <= 100);
          dispatch(productItem(newData));
          setToggle1(!toggle1);
        });
    } else {
      axios
        .get(`https://zomatofakeshopdb.herokuapp.com/product`)
        .then((res) => {
          let data = res.data;
          let newData = data.filter((e) => e.price >= 100);
          dispatch(productItem(newData));
          setToggle1(!toggle1);
        });
    }
  };

  const sendProductItem = (data) => {
    dispatch(selectedItem(data));
    navigate(`/product/${data.id}`);
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Product page</h2>
      <div className="d-flex gap-3 justify-content-center align-items-center p-3">
        <Button onClick={sortBy} className="text-center">
          {toggle ? "Rating-high-low" : "Rating-low-high"}
        </Button>
        <Button onClick={filterByPrice} className="text-center">
          {toggle1 ? "Price below 100" : "Price above 100"}
        </Button>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <Card
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
              key={element.id}
              onClick={() => sendProductItem(element)}
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
        })}
      </div>
    </div>
  );
};
