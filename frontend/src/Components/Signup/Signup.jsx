import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [register, setregister] = useState({});
  const [toggle, settoggle] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setregister({
      ...register,
      [id]: value,
    });
    if (Object.keys(register).length == 3) {
      settoggle(false);
    }
  };

  const handleSubmit = () => {
    axios
      .post(`https://fakeshopapi.herokuapp.com/register`, register)
      .then((res) => {
        alert("Registration successfull");
        navigate("/login");
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };

  return (
    <div id="contain">
      <h2>Create an Account</h2>
      <div id="detailsDiv">
        <div>
          <p>Name</p>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <p>Email Address</p>
          <input
            type="email"
            onChange={handleChange}
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            onChange={handleChange}
            id="password"
            placeholder="Password"
          />
        </div>
        <br />
        <div>
          <button
            className="w-100 btn btn-primary"
            onClick={handleSubmit}
            disabled={toggle}
          >
            Create an Account
          </button>
        </div>
      </div>
      <br />
      <div id="ptags">
        <p>
          Already have an Account?
          <span className="cursor" onClick={() => navigate("/login")}>
            {" "}
            Sign In{" "}
          </span>
        </p>
        <div id="miniptags">
          <p>
            By selecting 'Create an Account' you are agreeing to the Pro Xtra
            Terms and
          </p>
          <p>
            Conditions, Privacy and Security Statement, & My Account Terms and
            Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
