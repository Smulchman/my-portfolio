// similar to the about page, just a form that sends an email to me

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_qqzocaq",
        "template_6c21s69",
        form.current,
        "5FCsAhRYCj_20nT0J"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.error(error);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="mt-5 mb-3">
        <label for="emailInput" className="form-label">
          email address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@example.com"
          name="email_name"
        ></input>
      </div>
      <div className="mb-3">
        <label for="messageInput" className="form-label">
          message
        </label>
        <textarea
          className="form-control"
          id="messageInput"
          rows="5"
          name="message"
        ></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit" value="send">
          send
        </button>
      </div>
    </form>
  );
}

export default Contact;
