import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DI from "../utility/DependenciesEnjection";

const Login = (props) => {
  const {
    di: { FAKE, success, error },
  } = props;
  const navigate = useNavigate();
  const [state, setState] = useState({
    msg: "",
  });
  const signIncall = () => {
    FAKE("login").then((res) => {
      if (res.success) {
        success(res?.msg);
        navigate("/panel");
      } else {
        error(res?.msg);
      }
    });

    setState({ msg: "Wrong username or password!!" });
  };
  const SignInHandler = (e) => {
    e.preventDefault();
    let x = e.target;
    if (x.email.value && x.password.value)
      signIncall({ email: x.email.value, pass: x.password.value });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{ backgroundColor: "#f1f2f3",height:'100vh' }}
    >
      <main
        className="form-signin "
        style={{ minWidth: "300px", maxWidth: "350px", width: "30%" }}
      >
        <form onSubmit={SignInHandler}>
          <img
            className="mb-4"
            src="logo192.png"
            alt=""
            width="100"
            height="80"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <h6>
            <small>{state.msg}</small>
          </h6>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating my-2">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p
            className="mt-5 mb-3 text-muted"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </p>
        </form>
      </main>
    </div>
  );
};

export default DI(Login);
