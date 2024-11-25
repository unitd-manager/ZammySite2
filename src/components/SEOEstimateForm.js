import React, { useState } from 'react';
import './form.css';

const SEOEstimateForm = () => {
  // Initialize state for the form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website SEO Services',
    url: '',
    subject: '',
    message: '',
  });

  // Handle input change for all form fields
  const updateContactFields = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const onEquirySubmit = () => {
    // Handle the form submission logic here
    console.log('Form submitted with data:', formData);
  };

  // Handle email sending logic (if needed)
  const sendMail = () => {
    // Logic to send an email (e.g., using an API or SMTP server)
    console.log('Sending mail...');
  };

  return (
    <section style={{ paddingTop: '50px' }} className="section bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title text-dark">Get Your Google SEO Estimate</h2>
          </div>

          <div className="col-12">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onEquirySubmit();
                sendMail();
              }}
              className="row g-4"
            >
              <div className="col-lg-4 col-md-6">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control custom-input"
                  placeholder="Your Name*"
                  name="name"
                  value={formData.name}
                  required
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <input
                  onChange={updateContactFields}
                  type="email"
                  className="form-control custom-input"
                  placeholder="Your Email*"
                  name="email"
                  value={formData.email}
                  required
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control custom-input"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <select
                  onChange={updateContactFields}
                  className="form-control custom-input"
                  name="service"
                  value={formData.service}
                >
                  <option value="Website SEO Services">Website SEO Services</option>
                  <option value="GMB SEO Services">GMB SEO Services</option>
                </select>
              </div>

              <div className="col-lg-4 col-md-6">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control custom-input"
                  placeholder="GBP or Website URL"
                  name="url"
                  value={formData.url}
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control custom-input"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                />
              </div>

              <div className="col-12">
                <textarea
                  onChange={updateContactFields}
                  className="form-control custom-input"
                  placeholder="Message*"
                  name="message"
                  value={formData.message}
                  required
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary custom-button"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOEstimateForm;
