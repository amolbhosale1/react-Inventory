import "./css/contact.css";
import { useEffect, useState } from "react";
import React from "react";

const Contact = () => {
  const [userData, setUserData] = useState({});

  const callContactPage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callContactPage();
  }, []);

  return (
    <React.Fragment>
      <div className="contact__info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact__info__item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact__info__content">
                  <div className="contact__info__title">Phone</div>
                  <div className="contact__info__text">+92 3003202039</div>
                </div>
              </div>
              <div className="contact__info__item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact__info__content">
                  <div className="contact__info__title">Email</div>
                  <div className="contact__info__text">info@example.com</div>
                </div>
              </div>
              <div className="contact__info__item d-flex justify-content-start align-items-center">
                <img src="" alt="phone" />
                <div className="contact__info__content">
                  <div className="contact__info__title">Address</div>
                  <div className="contact__info__text">Karachi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact__form__container py-5">
                <div className="contact__form__title">Get in Touch</div>
                <form id="contact-form">
                  <div className="contact__form__name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      value={userData.name}
                      id="contact__form__name"
                      className="contact__form__name input__field"
                      placeholder="Your name"
                      required="true"
                    />
                    <input
                      type="email"
                      value={userData.email}
                      id="contact__form__email"
                      className="contact__form__email input__field"
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="number"
                      value={userData.phone}
                      id="contact__form__phone"
                      className="contact__form__phone input__field"
                      placeholder="Your Phone Number"
                      required="true"
                    />
                  </div>
                  <div className="contact__form__text mt-5">
                    <textarea
                      className="contact__form__message"
                      placeholder="Message..."
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="contact__form__btn">
                    <button
                      type="submit"
                      className="button contact__submit__btn"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
  );
};

export default Contact;
