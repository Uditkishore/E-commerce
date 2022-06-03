import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import fakestoreapi from "../../apis/fakeStoreApi";
import { countAction } from "../Redux/action";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Productpage = () => {
  const [product, setProduct] = useState({});
  const cartArr = useSelector((e) => e.cart);
  const data = useSelector((e) => e.AllProducts);
  const dispatch = useDispatch();
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
      alert("Product added to the cart");
      dispatch(countAction(cartArr.length));
    } else {
      let x = cartArr.filter((e) => e.id == data.id);
      if (x.length == 0) {
        cartArr.push(data);
        alert("Product added to the cart");
        dispatch(countAction(cartArr.length));
      } else {
        alert("Quantity got added to existing product");
        x[0].qnty++;
      }
    }

    console.log(fakestoreapi);
  };

  return (
    <>
      <div id="producDetailstpage" className="container mt-2 ">
        <h2 className="text-center">Iteams Details Page</h2>
        <section
          className="container"
          style={{ marginTop: "20px", marginBottom: "50px" }}
        >
          <div className="iteamsdetails">
            <div className="items_img">
              <img src={product.imgdata} alt="" />
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
                        <Button
                          onClick={() => sendCartITem(product)}
                          variant="primary"
                          className="col-lg-12"
                        >
                          Add to Cart
                        </Button>
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
