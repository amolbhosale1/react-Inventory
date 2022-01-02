import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import avatar from "../img/avatar.png";
import React from "react";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
  
      setUserData(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };
  
 
  useEffect(() => {
    callAboutPage();
  });

  return (
    <React.Fragment>
      <div className="container emp__profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img
                src={userData.name ===  avatar}
                alt="userProfileImg"
              />
            </div>
            <div className="col-md-6">
              <div className="profile__head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile__rating mt-3 mb-5">
                  Rating: <span>9/10</span>
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#home"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      className="nav-link"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      className="nav-link"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                name="btnAddMore"
                className="profile__edit"
                value="Edit Profile"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="prifle__work">
                <p>Work Link</p>
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
                <a href="https://youtube.com" target="blank">
                  Youtube
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 aboutInfo">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.id}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade show"
                  id="profile"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>92922020020200</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>example@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default About;


