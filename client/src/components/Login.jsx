import SignIn from "../img/login.jpg";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import "./css/Login.css";
import React from "react";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      
    });
    const data = await res.json();
      if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Success");
  
    }   
  };
 
  return (
    <React.Fragment>
        <div className="login">
      <div className="container mt-5">
        <div className="login__content">
          <div className="login__form">
            <h2 className="form__title">Sign In</h2>
            <form method="POST" className="" >
              <div className="form-group">
                <label htmlFor="email">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i class="zmdi zmdi-key"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group form__button">
                <input
                  type="submit"
                  name="login"
                  id="login"
                  className="form__submit"
                  value="Login"
                  onClick={loginUser}
                />
              </div>
            </form>
          </div>
          <div className="login__image">
            <figure>
              <img src={SignIn} alt="Sign In" />
            </figure>
            <NavLink to="/register" className="imageLink">
              No Account? Create your account!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Login;
