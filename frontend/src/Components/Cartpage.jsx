import React, { useEffect, useState, useRef } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { countAction } from "../Redux/action";
import { Link } from "react-router-dom";
import "./css/checkout.css";

export const Cart = () => {
  const [cartData, setCartData] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = () => {
    return setCartData(JSON.parse(localStorage.getItem("cartDataBase")) || []);
  };

  const total = useRef(0);
  const sum = () => {
    let s = 0;
    for (let i = 0; i < cartData.length; i++) {
      s += cartData[i].price * cartData[i].qnty;
    }
    total.current = s;
    localStorage.setItem("total", JSON.stringify(s));
  };
  sum();

  const dlt = (i) => {
    let cartItems = cartData;
    cartItems.splice(i, 1);
    localStorage.setItem("cartDataBase", JSON.stringify(cartItems));
    dispatch(countAction(cartItems.length));
    fetchingData();
  };

  const changeData = (id, val) => {
    let temp = cartData;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id == id) {
        temp[i].qnty += val;
        if (temp[i].qnty === 0) {
          return dlt(i);
        }
      }
    }

    localStorage.setItem("cartDataBase", JSON.stringify(temp));
    fetchingData();
  };

  return (
    <>
      {cartData.length ? (
        <div className="card_details" style={{ padding: 20 }}>
          <Container className="d-flex justify-content-between">
            <p className="text-center">Total :₹ {total.current}</p>
            <Link to={"/checkout"}>
              <Button>Checkout</Button>
            </Link>
          </Container>
          <Table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Restaurant Name</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((e, i) => {
                return (
                  <tr key={e.id}>
                    <td>
                      <img
                        src={e.imgdata}
                        style={{ width: "10rem", height: "10rem" }}
                        alt=""
                      />
                    </td>
                    <td>
                      <p>{e.rname}</p>
                      <p>Price : ₹{e.price}</p>
                      <div
                        className="mt-5 mb-5 p-2 d-flex justify-content-between align-items-center"
                        style={{
                          width: 100,
                          cursor: "pointer",
                          background: "#ddd",
                          color: "#111",
                        }}
                      >
                        <span
                          onClick={() => changeData(e.id, -1)}
                          id="subs"
                          style={{ fontSize: 24 }}
                        >
                          -
                        </span>
                        <span style={{ fontSize: 22 }}>{e.qnty}</span>
                        <span
                          onClick={() => changeData(e.id, 1)}
                          id="add"
                          style={{ fontSize: 24 }}
                        >
                          +
                        </span>
                      </div>
                      <p
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                      >
                        <i className="fas fa-trash smalltrash"></i>
                      </p>
                    </td>
                    <td
                      className="mt-5"
                      style={{
                        color: "red",
                        fontSize: 20,
                        cursor: "pointer",
                      }}
                    >
                      <i
                        onClick={() => dlt(i)}
                        className="fas fa-trash largetrash"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        <div
          className="card_details d-flex justify-content-center align-items-center"
          style={{ padding: 10, position: "relative" }}
        >
          <p style={{ fontSize: 22 }}>Your carts is empty</p>
        </div>
      )}
    </>
  );
};
