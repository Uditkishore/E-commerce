import React from "react";
import { useSelector } from "react-redux";
import { Table, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cart = () => {
  const data = useSelector((e) => e.cartReducer);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Restaurant Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={data.imgdata}
                style={{ width: "5rem", height: "5rem" }}
                alt=""
              />
            </td>
            <td>
              <p>{data.rname}</p>
              <p>Price : ₹{data.price}</p>
              <p>Quantity : {data.qnty}</p>
              <p
                style={{
                  color: "red",
                  fontSize: 20,
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-trash smalltrash"></i>
              </p>
              <div
                className="mt-5 d-flex justify-content-between align-items-center"
                style={{
                  width: 100,
                  cursor: "pointer",
                  background: "#ddd",
                  color: "#111",
                }}
              >
                <span style={{ fontSize: 24 }}>-</span>
                <span style={{ fontSize: 22 }}>{data.qnty}</span>
                <span style={{ fontSize: 24 }}>+</span>
              </div>
            </td>

            <td
              className="mt-5"
              style={{
                color: "red",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              <i className="fas fa-trash largetrash"></i>
            </td>
          </tr>
          <br />
          <p className="text-center">Total :₹ </p>
        </tbody>
      </Table>
      <Link to={"/checkout"}>
        <Button>Checkout</Button>
      </Link>
    </>
  );
};
