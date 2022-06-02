import React, { useState } from "react";
import axios from "axios";
import { countAction } from "../Redux/action";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Checkout = () => {
  const [order, setOrder] = useState();
  const [flag, setFlag] = useState(false);
  var totalPrice = JSON.parse(localStorage.getItem("total")) || 0;
  const dispatch = useDispatch();
  const inputOrders = (e) => {
    const { id, value } = e.target;
    setOrder({
      ...order,
      [id]: value,
    });
    let len = 0;
    for (let key in order) {
      len++;
    }
    if (len == 5) {
      setFlag(true);
    }
  };
  const navigate = useNavigate();

  const sendOrder = (e) => {
    let cartArr = [];
    alert("Do You want to conferm your order ?");
    e.preventDefault();
    axios
      .post(`https://zomatofakeshopdb.herokuapp.com/orders`, order)
      .then((res) => {
        alert("Order placed");
        localStorage.setItem("cartDataBase", JSON.stringify(cartArr));
        localStorage.setItem("total", JSON.stringify(cartArr));
        dispatch(countAction(0));
        navigate("/");
      });
  };

  return (
    <form className="m-auto p-5 border">
      <Container className="cartContainer">
        <div className="mb-5 bg-primary p-3 text-light">
          Total Amount :₹ {totalPrice}
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
        {flag ? (
          <input
            type="submit"
            onClick={sendOrder}
            value="Place Order"
            className="mt-5 btn btn-primary"
          />
        ) : (
          <input
            type="submit"
            disabled
            value="Place Order"
            className="mt-5 btn btn-primary"
          />
        )}
      </Container>
    </form>
  );
};


