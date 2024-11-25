import React from 'react';

// Import the necessary images
import SerProduct45 from '../assets/images/google-branding-specialist.webp';
import serviceShape04png   from '../assets/images/service/shape/04.png';

const ContentRight = () => {
  return (
    <div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list pt--125 pb--125">
      <div className="col-lg-6 col-md-6">
        <a href="#" className="thumbnail">
          <img
            src={SerProduct45}
            width={505}
            height={616}
            alt="Google Maps Rank Services"
          />
        </a>
      </div>
      <div className="col-lg-5 col-md-6 offset-lg-1">
        <div className="portfolio-content-wrapper-list">
          <h2 className="title">
            Google Maps Rank Services
          </h2>
          <p className="disc">
            Google Business Profile (GBP) Pack 3 services offer a comprehensive approach to boosting a business's local online visibility. This package specializes in first-rank local SEO services, focusing on optimizing GBP profiles to achieve top positions in Google's local search results, commonly referred to as the "Local Pack." Services include complete GBP profile optimization, tailored local SEO strategies for specific locations, ongoing GBP management to maintain freshness and relevance, and prompt customer feedback responses. By leveraging these services, businesses can significantly enhance their local presence, attract more customers, improve their overall online reputation, and ultimately generate more calls and directions.
          </p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service shape"
          className="six"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default ContentRight;
