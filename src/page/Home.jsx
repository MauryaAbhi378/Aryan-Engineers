import React, { useState } from "react";
import banner from "../assets/fittings-banner.jpg";
import "./Home.css";

const Home = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "047e9b1b-aaab-45b6-a24e-1a16feac8ba4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner Img" />
      </div>
      <div className="introduction">
        <p className="intro-heading">Welcome To Aryan Engineers</p>
        <p className="intro">
          At Aryan Engineers, we are dedicated to producing top-quality
          instrument fittings that meet the highest industry standards. With a
          foundation built on precision engineering and attention to detail, we
          strive to create products that empower industries to operate smoothly
          and reliably. Our team combines innovation with craftsmanship to
          provide fittings that enhance performance and ensure safety in
          critical applications.
          <br />
          We understand that every project is unique, and we offer tailored
          solutions to meet diverse requirements. Our goal is not just to
          manufacture fittings, but to provide solutions that inspire confidence
          and enable success for our clients..Choose Aryan Engineers for
          reliability, durability, and excellence in every fitting we create.
        </p>
      </div>
      <div className="contact-container">
        <div className="address-box">
          <p>Aryan Engineers</p>
          <p>Unit No 103 Shiva Industrial Estate,</p>
          <p>
            Lake Road, near Tata Power House, Bhandup - West, Mumbai-400078,
            Maharashtra, India.
          </p>
          <p>📞 +91 9892722747</p>
          <p>📞 +91 8104826436</p>
          <p>
            📧 <a href="mailto:surajentp999@gmail.com"></a>
          </p>
          <p>
            📧 <a href="mailto:sales@surajvalves.com">abhim0505@gmail.com</a>
          </p>
        </div>

        <div className="form-container">
          <h2>Request A Quote</h2>
          <form onSubmit={onSubmit} className="contact-form">
            <label>
              Full Name:
              <input type="text" name="name" className="input-field" required />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="number"
                className="input-field"
                required
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                className="input-field"
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                className="textarea-field"
                required
              ></textarea>
            </label>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;