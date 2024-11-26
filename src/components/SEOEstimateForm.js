import React, { useState } from 'react';

const AppointmentArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: '',
    url: '',
    email: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="rts-appoinment-area bg-dark-border-radious-2 pb--40 pt--40" style={{ marginTop: 150 }}>
      <div className="container">
        <div className="row align-items-center justify-content-md-center">
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrapper-one-left">
              <div style={{ color: 'white', fontSize: 35, fontWeight: 'bold', marginBottom: 20 }}>
              Get Your Google SEO Estimate
              </div>
              {/* <p className="disc">
                We have helped 38 top brands in the world and 250+ local brands for the last 14 years.
              </p> */}
              {/* <div className="feature-area-wrapper">
                <div className="single-feature">
                  <div className="icon">
                    {/* Insert SVG here */}
                  {/* </div>
                  <p>Strategy Call</p>
                </div>
                <div className="single-feature">
                  <div className="icon"> */}
                    {/* Insert SVG here */}
                  {/* </div>
                  <p>In-depth Audit</p>
                </div>
                <div className="single-feature">
                  <div className="icon"> */}
                    {/* Insert SVG here */}
                  {/* </div>
                  <p>Growth Roadmap</p>
                </div>
              </div> */} 
            </div>
          </div>

          <div className="col-lg-6 col-md-10">
            <form action="#" className="appoinment_form-1">
              <div className="signle-input">
                <label htmlFor="name">name</label>
                <input
                  type="url"
                  id="name"
                  placeholder="yourname"
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-globe"></i>
              </div>
              <div className="signle-input">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-phone"></i>
              </div>
              <div className="signle-input">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="youremail"
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-globe"></i>
              </div>
              
              <div className="signle-input">
                <label htmlFor="website">Website</label>
                <input
                  type="url"
                  id="website"
                  placeholder="yourwebsite.com"
                  value={formData.website}
                  name="website"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-globe"></i>
              </div>
              <div className="signle-input">
                <label htmlFor="service">service</label>
                <input
                  type="url"
                  id="service"
                  placeholder="service"
                  value={formData.service}
                  name="service"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-globe"></i>
              </div>
              <div className="signle-input">
                <label htmlFor="url">url</label>
                <input
                  type="url"
                  id="url"
                  placeholder="url"
                  value={formData.url}
                  name="url"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-globe"></i>
              </div>
              <div className="signle-input">
                <label htmlFor="message">Message</label>
                <input
                  type="url"
                  id="message"
                  placeholder="yourmessage.com"
                  value={formData.message}
                  name="message"
                  onChange={handleInputChange}
                />
                <i className="fa-light fa-globe"></i>
              </div>
              <div className="signle-input">
                <button type="submit" className="rts-btn btn-primary-2">
                  Submit
                </button>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentArea;
