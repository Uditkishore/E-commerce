import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { cart } from "../Redux/action";
export const Productpage = () => {
  const data = useSelector((e) => e.selectedProduct);
  const cartDetails = useSelector((e) => e.cart);
  const dispatch = useDispatch();
  const sendCartITem = (cartdata) => {    
    dispatch(cart(cartdata));
    alert("Product added to the cart");
  };
  return (
    <>
      <div className="container mt-2 ">
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
