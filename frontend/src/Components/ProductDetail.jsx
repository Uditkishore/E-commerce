import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countAction } from "../Redux/action";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

export const Productpage = () => {
  const [product, setProduct] = useState({});
  const cartArr = JSON.parse(localStorage.getItem("cartDataBase")) || [];
  const data = useSelector((e) => e.AllProducts);
  const token = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  useEffect(() => {
    getselectedProduct();
  });

  const getselectedProduct = () => {
    let outputData = data.filter((e) => {
      if (e.id == param.id) {
        setProduct(e);
      }
    });
    return outputData;
  };

  const sendCartITem = (cartdata) => {
    let data = cartdata;
    if (cartArr.length === 0) {
      cartArr.push(data);
      localStorage.setItem("cartDataBase", JSON.stringify(cartArr));
      alert("Product added to the cart");
      dispatch(countAction(cartArr.length));
    } else {
      let x = cartArr.filter((e) => e.id == data.id);
      if (x.length == 0) {
        cartArr.push(data);
        localStorage.setItem("cartDataBase", JSON.stringify(cartArr));
        alert("Product added to the cart");
        dispatch(countAction(cartArr.length));
      } else {
        x[0].qnty++;
        localStorage.setItem("cartDataBase", JSON.stringify(cartArr));
        alert("Quantity got added to existing product");
      }
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
                        {token && token.token ? (
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
