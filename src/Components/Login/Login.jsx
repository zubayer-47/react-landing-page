/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LoginImg from "../../img/login.png";
import Input from "../Signup/Input";
import "./Login.css";

const inputInfos = [
  {
    type: "text",
    placeholder: "Your Email",
    icon: "fas fa-user",
  },
  {
    type: "password",
    placeholder: "Password",
    icon: "fas fa-lock",
  },
];

const generateID = () => {
  const randomID = Math.ceil(Math.random() * 999);
  return randomID;
};

const Signup = () => {
  return (
    <div className="login__wrapper">
      <div className="login__box bg-light">
        <div className="row ">
          <div className="col-md-6 text-center">
            <img
              src={LoginImg}
              alt="register user"
              className="img-fluid bg-light"
            />
            <a href="#" className="text-muted">
              Create an account
            </a>
          </div>
          <div className="col-md-6">
            <h2>Sign in</h2>

            <form className="mt-5">
              {inputInfos.map((inputInfo) => (
                <div className="parent">
                  <div className="child1">
                      <i className={`${inputInfo.icon}`}></i>
                  </div>
                  <div className="child2">
                  <Input
                  key={generateID()}
                  type={inputInfo.type}
                  placeholder={inputInfo.placeholder}
                  className="mb-2"
                />
                  </div>
                </div>
            
              ))}
              <button className="btn btn-secondary" type="submit">
                Login
              </button>
            </form>
            <p className="login_icon" style={{ marginTop: "5rem" }}>
              Or Login With
              <a className="mx-2 text-primary login__color" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="mx-2 text-primary login__color" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="mx-2 text-danger login__color" href="#">
                <i className="fab fa-google"></i>
              </a>
            </p>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
};

export default Signup;
