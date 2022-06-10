import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Redux/SingleProduct/action";
import { fetchData, fetchDataSucces } from "../../Redux/Products/action";
import { fetchCartData } from "../../Redux/Cart/action";
import { useNavigate } from "react-router";
import ShortingComp from "./shortingComp";
import Filter from "./filter";

export const Homepage = () => {
  const data = useSelector((store) => store.ecommerceData.products);
  const [toggle, setToggle] = useState(true);
  const [filterData, setFilterData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCartData());
  }, []);

  const navigate = useNavigate();

  const sortBy = (payload) => {
    if (payload == "ascPrice") {
      let newData = data.sort((a, b) => a.price - b.price);
      dispatch(fetchDataSucces(newData));
      setToggle(!toggle);
    }
    if (payload == "descPrice") {
      let newData = data.sort((a, b) => b.price - a.price);
      dispatch(fetchDataSucces(newData));
      setToggle(!toggle);
    }
    if (payload == "ascRating") {
      let newData = data.sort((a, b) => a.rating - b.rating);
      dispatch(fetchDataSucces(newData));
      setToggle(!toggle);
    }
    if (payload == "descRating") {
      let newData = data.sort((a, b) => b.rating - a.rating);
      dispatch(fetchDataSucces(newData));
      setToggle(!toggle);
    }
    if (payload == "popular") {
      dispatch(fetchData());
    }
  };
  const filterProducts = (payload) => {
    console.log(payload);
    setFilterData(payload);
  };

  const sendproductListItem = (data) => {
    dispatch(getSingleProduct(data));
    navigate(`/product/${data.id}`);
  };

  return (
    <div className="container h-100 mt-3">
      <div className="buttunsDiv">
        <Filter filterProducts={filterProducts} />
        <ShortingComp sortBy={sortBy} />
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        {data && data.length ? (
          data
            .filter((e) => {
              if (filterData && filterData !== "all") {
                return e.category == filterData;
              } else if (filterData == "all") {
                return e;
              }
              return e;
            })
            .map((element, id) => {
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
