import SignUp from "../img/signup.png";
import { NavLink, useHistory } from "react-router-dom";
import "./css/SignUp.css";
import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cPassword } = user;

    async function dummyFunc() {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          work,
          password,
          cPassword,
        }),
      });

      const data = await res.json();
      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Success");
        console.log("Registration Success");
        history.push("/signin");
      }
    }
    dummyFunc();
  };

  return (
    <React.Fragment>

      <div className="signup">
        <div className="container mt-3">
          <div className="signup__content ">
            <div className="signup__form ">
              <h2 className="form__title">Sign Up</h2>
              <form method="POST" className="register__form" id="register__form">

                <div className=" form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    value={user.work}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-key"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cPassword">
                    <i className="zmdi zmdi-key"></i>
                  </label>
                  <input
                    type="password"
                    name="cPassword"
                    id="cPassword"
                    value={user.cPassword}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group form__button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form__submit"
                    value="Register"
                    onClick={postData}
                  />
                </div>
              </form>
            </div>
            <div className=" mt-3">
              <figure >
                <img src={SignUp} alt="Sign Up" />
              </figure>
              <div className="link">
                <NavLink to="/signin" className="imageLink">
                  I am already Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  );
};

export default Register;
