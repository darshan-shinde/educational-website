"use client";

import { useState } from "react";
import "../styles/SubscribeSection.css";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-content">
          <h2>Subscribe</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">
              Subscribe Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
        <div className="subscribe-image">
          <img src="/Mask Group 72.svg" alt="Subscribe illustration" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
