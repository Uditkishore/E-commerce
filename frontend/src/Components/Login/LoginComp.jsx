import React, { useState } from "react";

const LoginComp = ({ HandleLogin }) => {
  const [user, setuser] = useState({});
  const [toggle, settoggle] = useState(true);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setuser({
      ...user,
      [id]: value,
    });
    if (Object.keys(user).length == 2) {
      settoggle(false);
    }
  };
  const userData = () => {
    HandleLogin(user);
  };
  return (
    <div id="contain">
      <h2>Sign In or Create an Account</h2>
      <div id="details">
        <div>
          <p>User Name</p>
          <input
            onChange={handleChange}
            type="email"
            name=""
            placeholder="email"
            id="email"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            id="password"
          />
        </div>
      </div>
      <button
        className="w-100 btn btn-primary"
        onClick={userData}
        disabled={toggle}
      >
        Login
      </button>
      <hr />
      <p className="street101">Don't Have an Account?</p>
      <button
        className="w-100 btn btn-primary"
        onClick={() => navigate("/signup")}
      >
        Create an Account
      </button>
      <div id="termsConds" className="street101">
        <p>
          By selecting 'Sign In' you are agreeing to the Pro Xtra Terms and
          Conditions,
        </p>
        <p>
          Privacy and Security Statement, & My Account Terms and Conditions. For
        </p>
        <p>Two-Factor Authentication, message and data rates may apply.</p>
      </div>
    </div>
  );
};

export default LoginComp;
