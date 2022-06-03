import React from "react";
import { useNavigate } from "react-router";
import "./css/loginpage.css";
import axios from "axios";
function Login() {
  const [user, setuser] = useState({})
  const navigate = useNavigate();

  const userData = (e) => {
    
  }

  const postData = () => {
    // axios.post(`http://localhost:2345/login`);
  }

  return (
    <div id="contain">
      <h2>Sign In or Create an Account</h2>
      <div id="details">
        <div>
          <p>User Name</p>
          <input type="email" name="" placeholder="email" id="user" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="password" name="" id="pass" />
        </div>
      </div>
      <button onClick={userData} >Login</button>
      <hr />
      <p className="street101">Don't Have an Account?</p>
      <button onClick={() => navigate("/signup")}>Create an Account</button>
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
}

export default Login;
