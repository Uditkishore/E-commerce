import React from "react";
import "../css/loginpage.css";
import LoginComp from "./LoginComp";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { loginUser } from "../../Redux/Auth/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();

  const { isAuth, isLoding, isError } = useSelector(
    (state) => state.isAuth,
    shallowEqual
  );

  const HandleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (isLoding) {
    return (
      <div id="loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      {isError && (
        <div className="text-center"> Username and password is incorrect </div>
      )}
      <LoginComp HandleLogin={HandleLogin} />
    </div>
  );
}

export default LoginPage;
