import React, { useEffect, useState } from "react";
import { Table, Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cart, newCart } from "../Redux/action";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const Cart = () => {
  const data = useSelector((e) => e.cart);
  const [counterdata, setCounterdata] = useState(1);
  const [sum, setSum] = useState(0);
  const [data1, setData1] = useState([]);
  const dispatch = useDispatch();

  const Container = styled.div((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
  }));

  useEffect(() => {
    filterProducts();
  }, []);

  const sumPrice = (cart) => {
    let temp = 0;
    for (let i = 0; i < cart.length; i++) {
      temp += cart[i].price * cart[i].qnty;
    }
    setSum(temp);
  };

  const dlt = (i) => {
    let cartItems = data1;
    cartItems.splice(i, 1);
    dispatch(newCart(cartItems));
    sumPrice(cartItems);
  };

  const filterProducts = () => {
    let temp = data;

    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i].id === temp[j].id) {
          temp[i].qnty = temp[i].qnty + 1;
          temp.splice(j, 1);
          j--;
        }
      }
    }

    dispatch(newCart(temp));
    sumPrice(temp);
    setData1(temp);
  };

  const quantityUpdate = (i, nexteven) => {
    let cartItems = data1;

    cartItems[i].qnty = Number(cartItems[i].qnty) + nexteven;

    if (cartItems[i].qnty == 0) {
      cartItems.splice(i, 1);
    }

    dispatch(newCart(cartItems));
    sumPrice(cartItems);
  };
  return (
    <>
      {data1.length ? (
        <div className="card_details" style={{ padding: 20 }}>
          <Container className="d-flex justify-content-between">
            <p className="text-center">Total :₹ {sum}</p>
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
              {data1.map((e, i) => {
                console.log(e, i);
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
                          onClick={() => quantityUpdate(i, -1)}
                          id="subs"
                          style={{ fontSize: 24 }}
                        >
                          -
                        </span>
                        <span style={{ fontSize: 22 }}>{e.qnty}</span>
                        <span
                          onClick={() => quantityUpdate(i, 1)}
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
