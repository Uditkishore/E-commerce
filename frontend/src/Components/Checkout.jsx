import React, { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";

export const Checkout = () => {
  const [order, setOrder] = useState();
  const data = useSelector((e) => e.cart);
  console.log(data);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price;
  }
  const inputOrders = (e) => {
    const { id, value } = e.target;
    setOrder({
      ...order,
      [id]: value,
    });
  };
  const navigate = useNavigate();

  const sendOrder = (e) => {
    e.preventDefault();
    axios
      .post(`https://zomatofakeshopdb.herokuapp.com/orders`, order)
      .then((res) => {
        alert("Order placed");
        navigate("/");
      });
  };

  http: return (
    <form className="m-auto p-5 border">
      <Container className="cartContainer">
        <div className="mb-5 bg-primary p-3 text-light">
          Total Amount :₹ {sum}
        </div>
        <div className="d-flex flex-column text-center form-row">
          <div className="form-group ">
            <label>Card Number</label>

            <input
              type="Number"
              className="form-control"
              id="email"
              onChange={inputOrders}
              placeholder="16 digit Number"
            />
          </div>
          <div className="text-center form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={inputOrders}
              placeholder="1234 Main St"
            />
          </div>
          <div className="d-flex  text-center form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input
                onChange={inputOrders}
                type="text"
                className="form-control"
                id="city"
              />
            </div>
            <div className="form-group col-md-4">
              <label>State</label>
              <select
                onChange={inputOrders}
                id="state"
                className="form-control"
              >
                <option disabled>Choose...</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="maharastra">Maharastra</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Zip</label>
              <input
                onChange={inputOrders}
                type="text"
                className="form-control"
                id="zip"
              />
            </div>
          </div>
          <br />
          <div className="d-flex gap-3  align-items-baseline  ">
            <input
              id="cod"
              onClick={inputOrders}
              type="checkbox"
              value={"true"}
            />
            <p>Cash On Delivery</p>
          </div>
        </div>

        <input
          type="submit"
          onClick={sendOrder}
          value="Place Order"
          className="mt-5 btn btn-primary"
        />
      </Container>
    </form>
  );
};
