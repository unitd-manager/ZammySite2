import React, { useState } from "react";

const AppointmentArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "",
    url: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="rts-appoinment-area bg-dark-border-radious-2 pb--40 pt--40 mt--80 mb--80">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mb-4">
            <div
              style={{
                color: "white",
                fontSize: 35,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Get Your Google SEO Estimate
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form action="#" className="appoinment_form-1">
              <div className="row g-3">
                {/* Name Input */}
                {/* <div className="col-md-6">
                  <label htmlFor="name">Name</label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      name="name"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <label htmlFor="phone">Name</label>
                  <div className="input-group">
                    <input
                      type="email"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      name="name"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                </div>
                {/* Phone Input */}
                <div className="col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <div className="input-group">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      name="phone"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                  </div>
                </div>
                {/* Email Input */}
                <div className="col-md-6">
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      name="email"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                {/* Website Input */}
                <div className="col-md-6">
                  <label htmlFor="website">Website</label>
                  <div className="input-group">
                    <input
                      type="url"
                      id="website"
                      placeholder="yourwebsite.com"
                      value={formData.website}
                      name="website"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-globe"></i>
                    </span>
                  </div>
                </div>
                {/* Service Input */}
                <div className="col-md-6">
                  <label htmlFor="service">Service</label>
                  <div className="input-group">
                    <input
                      type="url"
                      id="service"
                      placeholder="Service"
                      value={formData.service}
                      name="service"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-briefcase"></i>
                    </span>
                  </div>
                </div>
                {/* URL Input */}
                <div className="col-md-6">
                  <label htmlFor="url">URL</label>
                  <div className="input-group">
                    <input
                      type="url"
                      id="url"
                      placeholder="URL"
                      value={formData.url}
                      name="url"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="fa fa-link"></i>
                    </span>
                  </div>
                </div>
                {/* Message Input */}
                <div className="col-12">
                  <label htmlFor="message">Message</label>
                  <div className="input-group">
                    <textarea
                      id="message"
                      placeholder="Message"
                      value={formData.message}
                      name="message"
                      onChange={handleInputChange}
                      className="form-control"
                      rows="4"
                    ></textarea>
                    <span className="input-group-text">
                      <i className="fa fa-comment"></i>
                    </span>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="col-12">
                  <button type="submit" className="rts-btn btn-primary-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentArea;
