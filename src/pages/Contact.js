// similar to the about page, just a form that sends an email to me

import React from "react";

function Contact() {
  return (
    <div>
      <div class="mb-3">
        <label for="emailInput" class="form-label">
          email address
        </label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="mb-3">
        <label for="messageInput" class="form-label">
          message
        </label>
        <textarea class="form-control" id="messageInput" rows="5"></textarea>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          send
        </button>
      </div>
    </div>
  );
}

export default Contact;
