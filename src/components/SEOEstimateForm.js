import React from 'react';
import './form.css';

const StylishForm = ({ updateContactFields, onEquirySubmit, sendMail }) => {
  return (
    <section style={{ paddingTop: 10 }} className="section bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="text-center mb-4">
              <h2 className="section-title">Get Your Google SEO Estimate</h2>
            </div>

            <form action="#" className="row">
              {/* Name and Email Inputs (2 per column) */}
              <div className="col-md-6 mb-4">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control form-control-lg shadow-sm rounded-pill"
                  placeholder="Your Name*"
                  name="name"
                />
              </div>
              <div className="col-md-6 mb-4">
                <input
                  onChange={updateContactFields}
                  type="email"
                  className="form-control form-control-lg shadow-sm rounded-pill"
                  placeholder="Your Email*"
                  name="email"
                />
              </div>

              {/* Phone and Service Select Inputs (2 per column) */}
              <div className="col-md-6 mb-4">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control form-control-lg shadow-sm rounded-pill"
                  placeholder="Your Phone"
                  name="phone"
                />
              </div>
              <div className="col-md-6 mb-4">
                <select
                  onChange={updateContactFields}
                  className="form-control form-control-lg shadow-sm rounded-pill"
                  name="service"
                >
                  <option value="Website SEO Services">Website SEO Services</option>
                  <option value="GMB SEO Services">GMB SEO Services</option>
                </select>
              </div>

              {/* URL and Subject Inputs (2 per column) */}
              <div className="col-md-6 mb-4">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control form-control-lg shadow-sm rounded-pill"
                  placeholder="GBP or Website URL"
                  name="url"
                />
              </div>
              <div className="col-md-6 mb-4">
                <input
                  onChange={updateContactFields}
                  type="text"
                  className="form-control form-control-lg shadow-sm rounded-pill"
                  placeholder="Subject"
                  name="subject"
                />
              </div>

              {/* Message Textarea */}
              <div className="col-12 mb-4">
                <textarea
                  onChange={updateContactFields}
                  className="form-control form-control-lg shadow-sm rounded"
                  placeholder="Message*"
                  name="message"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="col-4 text-center">
                <button
                  onClick={() => {
                    onEquirySubmit();
                    sendMail();
                  }}
                  type="button"
                  className="btn btn-primary btn-lg rounded-pill px-5 py-3"
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

export default StylishForm;
