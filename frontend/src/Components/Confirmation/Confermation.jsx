import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchCartData } from "../../Redux/Cart/action";
import { deleteAllCartData } from "../../Redux/Cart/action";
import "./confirm.css";

const Confirmation = () => {
  const { cart } = useSelector((store) => store.cartData);
  var totalPrice = JSON.parse(localStorage.getItem("total")) || 0;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  const handleSubmit = () => {
    dispatch(deleteAllCartData());
    alert("Order Placed");
    navigate("/");
  };

  // ;
  return (
    <div className="ContaineConfirm">
      <div
        id="conatiner"
        className="container border rounded bg-success text-white "
      >
        <h1>Order Confirmed</h1>
        <div className="totalprice">
          <h3>Total Price ₹ {totalPrice} </h3>
        </div>
        <div>
          <h3>Items : {cart.length}</h3>
          <br />
          <div>
            {cart && cart.length ? (
              <div>
                {cart.map((e) => (
                  <p>{e.address}</p>
                ))}
              </div>
            ) : (
              <div id="loader">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <button onClick={handleSubmit} className="btn btn-primary">
              Continue Shoping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

// address: "Pizza, Fast Food, Pasta";
// createdAt: "2022-06-11T04:51:28.854Z";
// id: 5;
// imgdata: "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg";
// price: 70;
// qnty: 1;
// rating: "4.2";
// rname: "La Milano Pizzeria";
// somedata: " 650 + order placed from here recently";
// updatedAt: "2022-06-11T04:51:28.854Z";
// userid: "6299e844cbbf3e79a17c94b1";
// _id: "62a1bb9626d1e476299f8c04";
