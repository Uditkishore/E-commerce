import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countAction } from "../Redux/action";

export const Productpage = () => {
  var cartArr = JSON.parse(localStorage.getItem("cartDataBase")) || [];
  const data = useSelector((e) => e.selectedProduct);
  const dispatch = useDispatch();

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
    localStorage.setItem("cartDataBase", JSON.stringify(cartArr));
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
              <img src={data.imgdata} alt="" />
            </div>
            <div className="details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Restaurant</strong> : {data.rname}
                      </p>
                      <p>
                        <strong>Price</strong> : ₹{data.price}
                      </p>
                      <p>
                        <strong>Dishes</strong> : {data.address}
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
                          {data.rating} ★
                        </span>
                      </p>
                      <p>
                        <strong>Order Review :</strong>
                        <span>{data.somedata} </span>
                      </p>
                      <div className="button_div d-flex justify-content-center">
                        <Button
                          onClick={() => sendCartITem(data)}
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
