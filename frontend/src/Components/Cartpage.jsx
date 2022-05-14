import React, { useEffect, useState } from "react";
import { Table, Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cart, newCart } from "../Redux/action";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const Cart = () => {
  const data = useSelector((e) => e.cart);

  const dispatch = useDispatch();

  const [data1, setData1] = useState(data);

  const Container = styled.div((props) => ({
    display: "flex",
    flexDirection: props.column && "column",
  }));

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price;
  }

  const dlt = (e) => {
    let fit = data1.filter((ele) => ele.id !== e.id);
    dispatch(newCart(fit));
    setData1(fit);
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
              {data1.map((e) => {
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
                        <span id="subs" style={{ fontSize: 24 }}>
                          -
                        </span>
                        <span style={{ fontSize: 22 }}>{e.qnty}</span>
                        <span id="add" style={{ fontSize: 24 }}>
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
                        onClick={() => dlt(e)}
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
