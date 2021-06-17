/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RegisterImg from "../../img/register.png";
import Input from "./Input";
import "./Signup.css";
import generateID from '../UniqueID'

const inputInfos = [
  {
    type: "text",
    placeholder: "Your Name",
  },
  {
    type: "email",
    placeholder: "Your Email",
  },
  {
    type: "number",
    placeholder: "Mobile Number",
  },
  {
    type: "text",
    placeholder: "Your Profession",
  },
  {
    type: "password",
    placeholder: "Password",
  },
  {
    type: "password",
    placeholder: "Confirm Password",
  },
];

const Signup = () => {
  return (
    <div className="signup__wrapper">
      <div className="signup__box bg-light">
        <div className="row ">
          <div className="col-md-6 ">
            <h2>Register Now</h2>

            <form>
              {inputInfos.map((inputInfo) => (
                <Input
                  key={generateID()}
                  type={inputInfo.type}
                  placeholder={inputInfo.placeholder}
                  className="form-control my-4"
                />
              ))}
              <button className="btn btn-secondary" type="submit">
                Register
              </button>
            </form>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={RegisterImg}
              alt="register user"
              className="img-fluid bg-light"
            />
            <a href="#" className="text-muted">
              I'm already register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
