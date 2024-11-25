import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css'
import seobannerimg from '../assets/images/google-seo-consultant.webp';

const SEOConsultantBanner = () => {
  return (
    <div className="rts-service-banner-area rts-section-gap inner">
    <div className="container">
      <div className="row">
      <div className="row align-items-center">
        <div className="col-lg-5 text-center text-lg-left mb-4 mb-lg-0">
          <div className="content">
            <h2 className="text-dark position-relative">
              Google SEO Consultant
              <span className="watermark">SEO</span>
            </h2>
            <p className="text-dark mb-4">
              Zammy Zaif, Google SEO Consultant, renowned worldwide for top-notch 
              Google ranking expertise. Achieve unmatched online visibility and growth.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item mx-1 my-2">
                <a href="#" className="btn btn-primary">
                  {" Check Our Track Record "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5">
          <img
            src={seobannerimg}
            className="img-fluid w-10 shadow rounded-lg banner-image"
            alt="app-interface"
            data-aos="fade-left"
            data-aos-delay="100"
          />
        </div>
      </div>
    </div>
    </div>
      </div>
    
  );
};

export default SEOConsultantBanner;
