// similar to the about page, just a form that sends an email to me

import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="form">
      <div className="mt-5 mb-3">
        <label for="emailInput" className="form-label">
          email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
        ></input>
      </div>
      <div className="mb-3">
        <label for="messageInput" className="form-label">
          message
        </label>
        <textarea className="form-control" id="messageInput" rows="5"></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          send
        </button>
      </div>
    </div>
  );
}

export default Contact;
