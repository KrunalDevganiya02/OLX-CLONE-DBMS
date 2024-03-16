// ContactForm.js

import React, { useState } from "react";
import axios from "axios";
import "../style/about.css"; // Import the CSS file

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { name, email, message };

    // Send contact data to backend
    axios
      .post("http://localhost:8000/contact", contactData)
      .then((response) => {
        console.log("Message sent:", response.data);
        alert("your response marked successfully");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        // Optionally, you can show an error message here
      });
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <p>Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <p>Phone number</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="10"
            required
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <p>Message:</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="enter Message "
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ContactForm;
