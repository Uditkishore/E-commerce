import React from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div id="contain">
      <h2>Create an Account</h2>
      <div id="detailsDiv">
        <div>
          <p>Name</p>
          <input type="text" name="" id="name" placeholder="Name" />
        </div>
        <div>
          <p>Email Address</p>
          <input type="email" name="" id="email" placeholder="Email" />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
          />
        </div>
        <br />
        <div>
          <button>Create an Account</button>
        </div>
      </div>
      <br />
      <div id="ptags">
        <p>
          Already have an Account?
          <span className="cursor" onClick={() => navigate("/login")}> Sign In </span>
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
