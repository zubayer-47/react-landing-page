import React from "react";
import Input from "../Signup/Input";
import generateID from '../UniqueID'
import "./Contact.css";

const contactItems = [
  {
    icon: "fas fa-mobile",
    type: "Phone",
    address: "+8801276792638",
  },
  {
    icon: "fas fa-envelope",
    type: "Email",
    address: "test@gmail.com",
  },
  {
    icon: "fas fa-address-card",
    type: "Address",
    address: "Dhaka, Bangladesh",
  },
];

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
    placeholder: "Your Number",
  },
];

const Contact = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {contactItems.map((contactItem) => (
            <div className="col-md-4 mb-4" key={generateID()}>
              <div className="card bg-light">
                <div className="card-body">
                  <div className="d-flex justify-content-*-start align-items-center">
                    <div className="icon">
                      <i className={`${contactItem.icon}`}></i>
                    </div>
                    <div className="contact__item">
                      <p>
                        {contactItem.type}
                        <br />
                        <small>{contactItem.address}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact__wrapper">
        <div className="contact__box bg-light">
          <h3>Get in Touch</h3>

          <form>
            <div className="row d-flex justify-content-between align-items-center">
              {inputInfos.map((inputInfo) => (
                <div className="col-md-4 my-3" key={generateID()}>
                  <Input
                    type={inputInfo.type}
                    className="form-control"
                    placeholder={inputInfo.placeholder}
                  />
                </div>
              ))}

              <div className="col-md-12">
                <textarea
                  cols="30"
                  rows="10"
                  className="form-control"
                ></textarea>

                  <button className="btn btn-secondary my-3">Send Message</button>
              </div>

            
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
