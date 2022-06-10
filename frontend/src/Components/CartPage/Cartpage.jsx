import React, { useEffect, useState, useRef } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchCartData, deleteCartData } from "../../Redux/Cart/action";
import { Link } from "react-router-dom";
import "../css/checkout.css";

export const Cart = () => {
  const { cart, isLoading } = useSelector((store) => store.cartData);
  let dispatch = useDispatch();

  const [cartData, setCartData] = useState("");
  useEffect(() => {
    dispatch(fetchCartData());
  }, [cartData]);

  let total = useRef(0);
  const sum = () => {
    let s = 0;
    for (let i = 0; i < cart.length; i++) {
      s += cart[i].price * cart[i].qnty;
    }
    total = s;
    localStorage.setItem("total", JSON.stringify(total));
  };
  sum();

  const dlt = (payload) => {
    setCartData(payload);
    dispatch(deleteCartData(payload));
    dispatch(fetchCartData());
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
      {cart && cart.length ? (
        <div className="card_details" style={{ padding: 20 }}>
          <Container className="d-flex justify-content-between">
            <p className="text-center">Total :₹ {total}</p>
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
              {cart.map((e) => (
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
                        // onClick={() => changeData(e.id, -1)}
                        id="subs"
                        style={{ fontSize: 24, border: "1px dashed red" }}
                      >
                        -
                      </span>
                      <span style={{ fontSize: 22 }}>{e.qnty}</span>
                      <span
                        // onClick={() => changeData(e.id, 1)}
                        id="add"
                        style={{ fontSize: 24, border: "1px dashed red" }}
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
                      onClick={() => dlt(e._id)}
                      className="fas fa-trash largetrash"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div id="loader">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ padding: 10, position: "relative" }}
            >
              <p style={{ fontSize: 22 }}>Your carts is empty</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
