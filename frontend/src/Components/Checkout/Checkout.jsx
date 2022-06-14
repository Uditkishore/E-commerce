import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckoutData } from "../../Redux/Checkout/action";

import "./checkout.css";
export const Checkout = () => {
  const [order, setOrder] = useState({});
  const [flag, setFlag] = useState(true);
  var totalPrice = JSON.parse(localStorage.getItem("total")) || 0;

  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const inputOrders = (e) => {
    const { id, value } = e.target;
    setOrder({
      ...order,
      [id]: value,
      price: totalPrice,
    });
    if (Object.keys(order).length == 7) {
      setFlag(false);
    }
  };
  const navigate = useNavigate();

  const sendOrder = () => {
    order.userid = user.user._id;
    dispatch(fetchCheckoutData(order));
    //
    navigate("/confirm");
  };

  return (
    <div className="cont">
      <div className="div60">
        <div className="d-flex justify-content-center">
          <img
            className="w-25"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCB2nm9hjvNvsZxjiNvWjJWgSVw65Erq2es9hBXxPZWqnRkW-4oi3SwNwIMZwg3dWYIU&usqp=CAU"
            alt=""
          />
        </div>

        <div className="d-flex align-items-center justify-content-between px-3">
          <p>Amount Payable</p>
          <h3 id="toPay">{totalPrice}</h3>
        </div>

        <hr />
        <h3>Pay with debit or credit card</h3>

        <div className="grey">
          <p>
            <img
              style={{ height: "40px", width: "40px" }}
              src="https://img.icons8.com/ios-glyphs/344/info.png"
              alt=""
            />
          </p>
          <p>
            The merchant requires a U.S. billing address for all purchases made
            using PayPal.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <img
            style={{ height: "40px", width: "250px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1NbG6qb5VaSLkJz25TvH28G--0J7egeafw&usqp=CAU"
            alt=""
          />
        </div>

        <h3>Billing address</h3>
        <div style={{ display: "flex", gap: "10px", borderRadius: "5px" }}>
          <div className="d-flex w-100 gap-2 border-rounded">
            <input
              onChange={inputOrders}
              type="text"
              placeholder="First name"
              id="firstname"
            />
            <input
              onChange={inputOrders}
              type="text"
              placeholder="Last name"
              id="lastname"
            />
          </div>
        </div>

        <input
          onChange={inputOrders}
          className="big_input"
          type="text"
          placeholder="Address line 1"
          id="address1"
        />

        <input
          onChange={inputOrders}
          className="big_input"
          type="text"
          placeholder="Town/City"
          id="town"
        />
        <input
          onChange={inputOrders}
          className="big_input"
          type="text"
          placeholder="State/ Country "
          id="country"
        />

        <input
          onChange={inputOrders}
          className="big_input"
          type="text"
          placeholder="ZIP code"
          id="pin"
        />
        <input
          onChange={inputOrders}
          className="big_input"
          type="tel"
          placeholder="Mobile Number"
          id="mobile"
        />

        <p style={{ fontSize: "11px" }}>
          By clicking you agree to the
          <span style={{ color: "teal" }}> User Agreement</span> and
          <span style={{ color: "teal" }}>Privacy Policy.</span>
        </p>

        <p style={{ fontSize: "12px" }}>
          I want to save PayPal for payments to The Home Depot. If I have funds
          in my PayPal account, they may be used first. If my selected payment
          method is unavailable, PayPal can use the other payment methods linked
          to my account in accordance with the . I can change my payment
          preferences or cancel in my PayPal account settings.
        </p>

        <h6>
          We'll pre-authorise up to $ 110.87 USD on your card, then send you
          back to the seller to complete your purchase. If you don't complete it
          or the purchase amount changes, any pending pre-authorisations usually
          drop off within 1 business day.
        </h6>
        <div className="d-flex justify-content-center ">
          <button
            onClick={sendOrder}
            disabled={flag}
            id="btn"
            className="btn btn-primary "
          >
            Agree and Continue
          </button>
        </div>

        <hr />

        <p
          onClick={() => navigate("/")}
          style={{
            fontSize: "12px",
            textDecoration: "underline",
            color: "blue",
          }}
        >
          Cancel and return to merchant
        </p>

        <p>
          <img
            style={{ height: "25px", width: "40px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABO1BMVEX5kz8Vj0b////4lD73lEH3fAAAdgAWj0cVj0T///3///z///r///n///cAAG0AAHIwMIYAAHcAAGr8+/7///QAAGX/+/8AAH4dG4H//+4cInYoLov69vjw8/rd3uP89/8AAGGWm7bY2eAAAFcmLIOkqcXJx92IjL5ucpxna5pUV5RZXpdjaJ7e4+5GRYgJCXQqKI4fIYHMz9giIowrNHlHSpgjKXYtMZJcXJ5TT488Q3q/vtWAf6UAAI6ursQzM35XWo3BwsRiZIzl6OZyca7U1+mBfbs/QIV5dqdsZquJiajJx9alrLsXE5IdFop/hJqdnrEdIn4jKm+Hkq7n7tmYmr+cn8AaFGu7tNnY2thBPo+2ucF+frDDzt5EU4ahotIAAE3BxeR8fZ6foauEjJwzN3Otp8xfWaQ6OZXF+CG3AAAJHUlEQVR4nO3ba0/bShrAcfbZ63g8sR0bcrEdiLFzgTjE5lJo3JjWTQl2yZKyCS0J52x7Wg7f/xOs09XRSsx7D1qen1SBoC8e/eUZX3A2NhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELoBfszemrjL+gp0Yfps/RX9NQGoKewCQ+b8J5DEyITIhE9/0aiRPQw8Cya6FtbLGcwpudETwPPoYmuS2z9NT9ECFAqehx4Dk0INFrtTndvb7/XbbcaoscBwU30fP/wm/3qQX0wCGaDgRsos/6iwaieHz0gbGsR2MSwdBbuaYF5WD08Ojrun528qgYz8/Dg1GEgUyJsaxHYZNtonG2aJ+br/WH05gxGeqylw/MLMz5RegnI0ktroucbKlto5qA+qIwajj3yaZs5nv7Wah4cVgezigeyDpKY5SOoCbGo/e5ArR4n7+MxXax/8oFKhLaJU+/4F1P1oGsbRBZzFhLUhFL/IlCrntOSbZlMJJnAJclPxCmRdJI5H6/U6Z5NQczyEbWf+PWgWr/6Bv9Mtij85hMKxyBDa5mvKjuF0/q07t5uGy9n7Ug6s+uH1Wj0e1Lzrw3YalznKUwgNLIoYU271jgbRVO3L0sCphPTRCf6+WwWjaCmM4j8/KT7iRBQ8pVSB6iNm1L+nbSMBtV3Yq5RhDShzWk8y+yUMGD2HjA4blBaBjLu5DtNX5es/H9Yb6uq5gmYTkwTGmrmSaUDyUTWZUg9Qm7m8K8SkG9zRuYLus2siV47nX56pQm51BfRRO671cW5LcP43LKYdZuAZ9Jxya9VPzP/lm2TpGMDHe+164N92Cr+fCyiSaaZ5zasb4PHZwmF6AzGO05WGrd2LTtu6rXGo0+3DQbJo6uFRvHziWgSm6a/nFsSEBJqCTRKC1pKs/J4pZColICz+YXmVyn2YunPBucCttmim+iEhgdq/RqSjkfBkkalIUwUa7/X2mz1O8lmCt5mCBaTFpEFi/qRNpYLnlDAcSLBxA2mpxKF4d0yXxhp2Usq0agyLLfKWS+g8505MOrFISPs4sodNIsesPgmRLdPBmc3fn7fW2Mrd5RApHgjJVRayn0lKw2vSylJvCDVqWSRcXTh/ih4QCi+iUScaZCuH0Xr2xZtKfkqSrXhL1F3NPs46XVH5Wu9eVAf14z14xNKLk+unIInFLB25F+Dejb60MwkYAbY3XI8bu6M617zovnRDZXre3dzZRv5dZy+vGkPh7NpVvSExTchPXfmQY2MeifRIrRh3C+l3u1Dd189fe+V375Xjn1mDedR/G3JKJkH1VXRExa/n8C+GysZkSmjWU/bMaPx8vT1sD975arq64eT7jJMp5tKJ8yPqO3asPxo9gqeUEAT684dxI38nk/P10cynLj/NiOv56pHpqqavdGqunk3GVpEZpKxRf247u7nlzHFzlj42rHV2UqSjf8+BUgcpzX+2rw+M2M1Nzu/bob3Y8dJfv5Wyk/Yp8GZXvQTAxFNLh/aq/fH8e1uWVMqpfJB/U4d/GwSPz7WNU1RlNLmThCf9VbzUd+8sKSCn7eJaNL+43s/zN5mo3uv2Tdjc32cnDa9+1EWZqG//vV6zVy+gOOEWBeu2bUNgzGW77NO+1QpvVtcuuaRaqqDzuK8pFzOHUKpTOmW0dg3zf2CJxR03illkkQYcdqHpZ13o/vVp9HFwHRN99irR6GXZ1HnXyDfgo3Pmjr7/z/vAPTcYC4bxEmDs5uPDrW72rvWjtc7U/u95dQ51r7ZNWfRvPhx7euyFbmzSeETFt6E/hoE43A+Gfn5dT6Bebm6fNj9+iPfUxZeP79L/lgpLYDmt4rjj9EiC6vTZdETFn+/I32pBJG/3j4ti/gn2spqbo56ne7DyWK1H813PHtS6vsG03UKxH8/O3AKnlDMfbF7vvSpTAwyv537kJYXSyVTWptfg+FuK1XmpJHeLoBJFvjZa/Oo4AFBQBMJuubgqgcyOHe/2YY8L6VGdX9YGmphOTw2pUjzgNg3vyREZxcVdxYVPCAIWDuUZhW13qR6esPWT2R3F7AqJb29YSl8jJzdOVzvNGBbtqO5QTqzu9K4+Aeyxe8nOpzEd/awnYBFmKOEkCiRpKStzfFkBp2qDd5BYpBtw08zuzo4ewHPY0m+uz4cHE6+SDJQ4l/kG8t8Rv3dsKWMhzuWfesRw7lLLGrl1y97rpaxl9CEUnYXV4ffLEmyz31q6VqDjGZSq+ww5avROtHzy9eewUgy/3zr7uUHU8ETCnqvIFPU+psIaNcGncybBL5HJNEYdOYUopFs0UYX2Pm0qmoOvIC1s2ZBVFWDzGhv14gsvdZl2HNqUAK47+YbTp9sScxOYTSNpwIe2oOgJoy8HtTToc50WUrHEoF6/k/7+V6BLrd+A8LA/vz9MDiXhLxsIeRv6DrzbwdKczlJaklKLL1xk6+hAdGlDs0v6yeWYUdOdPVpYDMhLyqJek/JKZvVeuU7SUFnMAph/Z4ShWF+c0O3m7B/Oz1Rb8fylpDZRL3jR51goFaH44zqBl1Bfsa9BFmClMp5Gfv6Kj6Mfdl4UU10ifjn+UY7sdvvfKm5Prt8oDJAmzZOvWS/Gld/nqbFDCfsnWEC8kozD38cVt42sq23vvTBaISwtNI3t2pgamm+64g4D6+JfN/eyNTqIHbPo3HzzSk80MfK9X16rB6507sQBH6SR2ATfQvYKJ4Gh4f1II7bv38PjoLpzJxpj0O6JYt6ORbEHids/Yp51olL05n7KhgMXg1mtwcXk5DmN0Uv9HMZf9DDX7v7F+pJ3O9NvHC78D/7cZ5BE6BUopZl2bpM1+ce4R9/E9+EUn17/WlAIkkMtraJ8MPkGTRZP3v7+WX9+UjGQNQnVP7nOTR5brAJD5vwNv6Gntr4B3pq4+/oKTxOeBt/Qk9hEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424f0HWJwXT9Y2dpIAAAAASUVORK5CYII="
            alt=""
          />
        </p>

        <div className="d-flex justify-content-between ">
          <div className="d-flex gap-2 justify-content-between ">
            <p>Legal</p>
            <p>User Agreement</p>
            <p>Privacy</p>
          </div>
          <div>
            <p>© 1999 - 2022</p>
          </div>
        </div>

        <p style={{ fontSize: "11px" }}>
          PayPal Services in India are provided by PayPal Payments Private
          Limited (CIN U74990MH2009PTC194653). Users are advised to read the
          <span style={{ color: "teal" }}>Terms and Conditions</span>
          Terms and Conditions carefully.
        </p>
      </div>
    </div>
  );
};
