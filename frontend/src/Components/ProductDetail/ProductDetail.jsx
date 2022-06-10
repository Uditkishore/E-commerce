import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { postCartRequest } from "../../Redux/Cart/action";
import { fetchCartData } from "../../Redux/Cart/action";

export const Productpage = () => {
  const [product, setProduct] = useState({});
  const data = useSelector((store) => store.ecommerceData.products);
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = useSelector((e) => e.cartData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getselectedProduct();
  }, []);

  const getselectedProduct = () => {
    if (data.length) {
      data.filter((e) => {
        if (e.id == param.id) {
          setProduct(e);
        }
      });
    } else {
      navigate("/");
    }
  };

  const sendCartITem = (cartdata) => {
    cartdata.userid = user.user._id;
    let bool = false;
    let cartData = cart.cart;
    cartData.map((e) => {
      if (e.id == cartdata.id) {
        bool = true;
      }
    });
    if (bool) {
      alert("item already added");
    } else {
      dispatch(postCartRequest(cartdata));
      alert("item added to cart");
      dispatch(fetchCartData());
    }
  };

  const navigateLogin = () => {
    alert("You need to login first");
    navigate("/login");
  };

  return (
    <>
      <div id="producDetailstpage" className="container mt-2 ">
        <h2 className="text-center mb-5">Product Details Page</h2>
        <section style={{ marginTop: "20px", marginBottom: "50px" }}>
          <div className="iteamsdetails">
            <div className="items_img">
              <img src={product.imgdata} alt="Image" />
            </div>
            <div className="details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Restaurant</strong> : {product.rname}
                      </p>
                      <p>
                        <strong>Price</strong> : ₹{product.price}
                      </p>
                      <p>
                        <strong>Dishes</strong> : {product.address}
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Rating :</strong>
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {product.rating} ★
                        </span>
                      </p>
                      <p>
                        <strong>Order Review :</strong>
                        <span>{product.somedata} </span>
                      </p>
                      <div className="button_div d-flex justify-content-center">
                        {user ? (
                          <Button
                            onClick={() => sendCartITem(product)}
                            variant="primary"
                            className="col-lg-12"
                          >
                            Add to Cart
                          </Button>
                        ) : (
                          <button
                            className="btn btn-primary col-lg-12"
                            onClick={navigateLogin}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
