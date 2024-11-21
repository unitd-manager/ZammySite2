import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import contact1 from "../src/assets/images/contact/01.svg";
import contact2 from "../src/assets/images/contact/02.svg";
import contact3 from "../src/assets/images/contact/03.svg";
import ball1 from "../src/assets/images/service/shape/01.png"
import ball2 from "../src/assets/images/service/shape/02.png"
import ball3 from "../src/assets/images/service/shape/03.png"
import ball4 from "../src/assets/images/service/shape/04.png"


const ContactBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    setFormData({ name: "", email: "", message: "" });
    setRecaptchaValue(null); // Reset reCAPTCHA
  };

  return (
    <div>
      {/* Contact Banner Section */}
      <div className="contact-banner-area-start faq rts-section-gap"  style={{
    padding: "60px", // Increase padding for more content space
    minHeight: "500px", // Set a minimum height to enlarge the panel
  }}
>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-inner-area-contact-inner">
                <h1 className="title skew-up-2"  style={{
    color: "blue ", // Increase padding for more content space
    textAlign: "center"
  }}>Contact-Us</h1>
                <span  style={{
    color: "blue", // Increase padding for more content space
    textAlign: "center"
  }}>Zammy Zaif</span>
              </div>
            </div>
          </div>
          <div class="service-banner-area">
            <img class="one" src={ball1} alt="shape"/>
            <img class="two" src={ball2} alt="shape"/>
            <img class="three" src={ball3} alt="shape"/>
            <img class="four" src={ball4} alt="shape"/>
        </div>
        </div>
      </div>
      <div class="rts-working-porcess-area-two ptb--160 bg-dark-border-radious-sd">
     
      <div class="container-1058">
      <div class="row align-items-center justify-content-md-center">
                <div class="col-lg-6 col-md-10">
                                        <h2 class="title split-collab"  style={{
    color: "white", // Increase padding for more content space
    textAlign: "center"
  }}
> Get In Touch </h2>
                        <p  style={{
    color: "white", // Increase padding for more content space
    textAlign: "center",
    fontSize:"22px"
  }}> For any inquiries or collaborations, please fill out the form below or email us at info@bamstechnologies.org. 
  Let's create something amazing together!</p>
                     
               
                
            </div>
        </div>
        <div class="shape-area">
            <img class="one" src={ball1} alt="shape"/>
            <img class="two" src={ball2} alt="shape"/>
            <img class="three" src={ball3} alt="shape"/>
            <img class="four" src={ball4} alt="shape"/>
        </div>
    </div>
     </div>

{/* Contact Info Section */}
<div className="rts-contact-single-area rts-section-gap2Bottom pt--120">
        <div className="container">
          <div className="row g-48">
            <div className="col-lg-4 col-md-4 col-sm-7">
              <div className="single-contact-inner-info">
                <div className="icon">
                  <img src={contact1} alt="Address" />
                </div>
                <h3 >Tirunelveli | Erode | Trivandrum</h3>
                
              <p>Online support</p>

              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-7">
              <div className="single-contact-inner-info mid">
                <div className="icon">
                  <img src={contact2} alt="Email" />
                </div>
                <h3 >Email</h3>
                <p>   <a href="mailto:info@bamstechnologies.org">info@bamstechnologies.org</a></p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-7">
              <div className="single-contact-inner-info">
                <div className="icon">
                  <img src={contact3} alt="Phone" />
                </div>
                <h3 >Phone</h3>
                <p><a href="tel:+91 9344618144">+91 9344 618 144</a></p>
              <p>Mon-Sat 10am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Google Map */}
      <div className="contact-map">
        <h3 style={{ textAlign: "center" }}>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5988901164956!2d77.6881652!3d8.7295832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04116b74fb527d%3A0xede392a219af9177!2sZammy%20Zaif%20%7C%20Google%20Ranking%20SEO%20Expert%20%7C%20GMB%20Specialist%20-%20India!5e0!3m2!1sen!2sin!4v1669439277555!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      
      <div >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                
              <div className="single-input-area">
                  <label htmlFor="email">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="single-input-area">
                  <label htmlFor="email">URL*</label>
                  <input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="Your URL"
                    value={formData.url}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="single-input-area">
                  <label htmlFor="email">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="Your Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>


                <div className="single-input-area">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="single-input-area text-area">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group col-md-12">
                      <ReCAPTCHA
                        sitekey="6LfnZ3IqAAAAAILh6W3SwazKLmifIV2VqL0-fV1c" // Replace with your reCAPTCHA site key
                        onChange={handleRecaptchaChange}
                      />
                    </div>

                <button type="submit" className="rts-btn btn-primary">
                  Submit Now <i className="fa-solid fa-location-arrow"></i>
                </button>

                {/* Confirmation Message */}
                {formMessage && (
                  <div id="form-messages" className="text-center text-primary mt-5 text-capitalize">
                    {formMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactBanner;
