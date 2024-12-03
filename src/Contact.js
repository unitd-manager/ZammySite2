import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import contact1 from "../src/assets/images/contact/01.svg";
import contact2 from "../src/assets/images/contact/02.svg";
import contact3 from "../src/assets/images/contact/03.svg";
import ball1 from "../src/assets/images/service/shape/01.png";
import ball2 from "../src/assets/images/service/shape/02.png";
import ball3 from "../src/assets/images/service/shape/03.png";
import ball4 from "../src/assets/images/service/shape/04.png";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    url: "",
    phone: "",
  });

  const [formMessage, setFormMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      setFormMessage("Please verify that you're not a robot.");
      return;
    }

    setFormMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "", url: "", phone: "" });
    setRecaptchaValue(null); // Reset reCAPTCHA
  };

  return (
    <div>
      {/* Contact Banner Section */}
      <div className="contact-banner-area-start faq rts-section-gap" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-inner-area-contact-inner">
                <h1 className="title skew-up-2 mb--40" style={{ opacity: 1 }}>
                      Contact <span>Zammy Zaif</span>
                </h1>
                <Link to ="/Home" style={{color:'blue'}}>Home</Link> &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; <span>Contact Zammy Zaif</span>
              </div>
            </div>
          </div>
          <div className="service-banner-area">
            <img className="one" src={ball1} alt="shape1" />
            <img className="two" src={ball2} alt="shape2" />
            <img className="three" src={ball3} alt="shape3" />
            <img className="four" src={ball4} alt="shape4" />
          </div>
        </div>
      </div>

     {/* Working Process Section */}
    
<div 
  className="rts-working-process-area-two gradient-7-radious mt--50 pt--80 pb--80"
>
  <div className="container">
    <div className="row align-items-center justify-content-md-center bg-color-tertiary">
      <div className="col-lg-7 col-md-10">
        <h2 className="title split-collab"
          style={{ textAlign: "center", }}
        >
          Get In Touch
        </h2>
        <p
          style={{            
            textAlign: "center",
            color:"#fff",
            fontWeight:"bold",
          }}
        >
          For any inquiries or collaborations, please fill out the form below or email us at{" "}
          <a
            href="mailto:info@bamstechnologies.org"
            style={{ color: "#fff", textDecoration: "underline" }} 
          >
            info@bamstechnologies.org
          </a>.
          Let's create something amazing together!
        </p>
      </div>
    </div>
 
  </div>
</div>  


      {/* Contact Info Section */}
      <div className="rts-contact-single-area rts-section-gap2Bottom pt--120">
  <div className="container">
    <div className="row g-4">
      {/* Address Section */}
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div
          className="single-contact-inner-info"
          style={{
            background: "#fff", // White background for contrast
            padding: "20px",
            borderRadius: "8px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            textAlign: "center",
            border: "2px solid #ADD8E6", // Light blue outline
            height: "100%", // Ensure equal height for all panels
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
            transition: "transform 0.3s ease", // Smooth hover transition
          }}
        >
          <div className="icon">
            <img
              src={contact1}
              alt="Address"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#333" }}>
            Tirunelveli | Erode | Trivandrum
          </h3>
          <p style={{ color: "#555", fontSize: "16px" }}>Locations</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div
          className="single-contact-inner-info"
          style={{
            background: "#fff", // White background for contrast
            padding: "20px",
            borderRadius: "8px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            textAlign: "center",
            border: "2px solid #ADD8E6", // Light blue outline
            height: "100%", // Ensure equal height for all panels
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
            transition: "transform 0.3s ease", // Smooth hover transition
          }}
        >
          <div className="icon">
            <img
              src={contact2}
              alt="Email"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#333" }}>Email</h3>
          <p style={{ color: "#555", fontSize: "16px" }}>
            <a
              href="mailto:info@bamstechnologies.org"
              style={{ color: "#007bff", textDecoration: "underline" }}
            >
              info@bamstechnologies.org
            </a>
          </p>
          <p style={{ color: "#777", fontSize: "14px" }}>Online Support</p>
        </div>
      </div>

      {/* Phone Section */}
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div
          className="single-contact-inner-info"
          style={{
            background: "#fff", // White background for contrast
            padding: "20px",
            borderRadius: "8px", // Rounded corners
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            textAlign: "center",
            border: "2px solid #ADD8E6", // Light blue outline
            height: "100%", // Ensure equal height for all panels
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center content vertically
            transition: "transform 0.3s ease", // Smooth hover transition
          }}
        >
          <div className="icon">
            <img
              src={contact3}
              alt="Phone"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#333" }}>Phone</h3>
          <p style={{ color: "#555", fontSize: "16px" }}>
            <a
              href="tel:+91 9344618144"
              style={{ color: "#007bff", textDecoration: "underline" }}
            >
              +91 9344 618 144
            </a>
          </p>
          <p style={{ color: "#777", fontSize: "14px" }}>Mon-Sat 10am-6pm</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="contact-banner-area-start faq rts-section-gap">
      
  <div
  className="contact-map"
  style={{
    marginTop: "40px", // Adds space from previous sections
    padding: "20px", // Adds padding inside the map container
    backgroundColor: "#fff", // Ensures the background is white for better contrast
    borderRadius: "8px", // Adds rounded corners to the container
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow for depth
     border: " black"
  }}
>
  <h3
    style={{
      textAlign: "center",
      fontSize: "24px", // Larger font size for better visibility
      fontWeight: "600", // Bold for emphasis
      color: "#333", // Dark grey text for better contrast
      marginBottom: "20px", // Adds space below the title
    }}
  >
    Our Location
  </h3>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5988901164956!2d77.6881652!3d8.7295832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04116b74fb527d%3A0xede392a219af9177!2sZammy%20Zaif%20%7C%20Google%20Ranking%20SEO%20Expert%20%7C%20GMB%20Specialist%20-%20India!5e0!3m2!1sen!2sin!4v1669439277555!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{
      borderRadius: "8px", // Rounded corners for the iframe
      border: "none", // Removes iframe border for a cleaner look
    }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
</div>

      {/* Contact Form */}
      <div className="rts-appoinment-area bg-dark-border-radious-2 pb--40 pt--40" style={{ marginTop: 80 }}>
  <div className="row justify-content-center">
    <div className="col-12 text-center">
      <h3 style={{ color: "white" }}>Have You Any Questions?</h3>
      <h6 style={{ color: "white" }}>Please contact us using the form and we’ll get back to you as soon as possible.</h6>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <form
        action="#"
        className="appoinment_form-1"
        onSubmit={handleSubmit}
        style={{ width: "1200px", height: "500px" }}
      >
        {/* Name and Website Fields */}
        <div className="row mb-4">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <input
              type="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <input
              type="url"
              id="website"
              placeholder="yourwebsite.com"
              value={formData.website}
              name="website"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Email and Phone Fields */}
        <div className="row mb-4">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <input
              type="phone"
              id="phone"
              placeholder="Your phone"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-center">
            <textarea
              id="message"
              placeholder="Type in your Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={{
                width: "100%",  // Takes full width of the column
                maxWidth: "500px",  // Max width for the text area
                minHeight: "150px",  // Minimum height for a bigger text box
                padding: "10px",  // Padding inside the text area
                resize: "vertical",  // Allow resizing vertically
              }}
            />
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="form-group col-md-12 text-center mb-4 d-flex justify-content-center">
          <ReCAPTCHA
            sitekey="6LfnZ3IqAAAAAILh6W3SwazKLmifIV2VqL0-fV1c"
            onChange={handleRecaptchaChange}
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-md-12 text-center mb-4 d-flex justify-content-center">
          <button
            type="submit"
            className="rts-btn btn-primary-2"
            style={{ maxWidth: "400px" }}
          >
            Submit Now <i className="fa-solid fa-location-arrow"></i>
          </button>
        </div>

        {/* Confirmation Message */}
        {formMessage && (
          <div
            id="form-messages"
            className="text-center text-primary mt-5 text-capitalize"
          >
            {formMessage}
          </div>
        )}
      </form>
    </div>
  
  </div>
  
</div>




    </div>
  );
};

export default ContactBanner;
