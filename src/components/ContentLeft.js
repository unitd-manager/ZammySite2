import React from 'react';

// Assuming you have the image imports available like below
import googleseoimg from '../assets/images/google-seo-consultant.webp'; 
import ball4 from "../assets/images/service/shape/04.png"
import ball6 from "../assets/images/service/shape/06.png"

const ContentLeft = () => {
  return (
    <div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list pt--125 pb--125">
      <div className="col-lg-5 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h2 className="title">
            #1 Google SEO Consultant
          </h2>
          <p className="disc">
            Zammy Zaif has been a leading Google SEO consultant with a wealth of experience in the field, having been active in SEO since 2008. From 2014, he has consistently achieved first-rank results for clients, demonstrating his expertise and commitment to delivering top-tier SEO performance. Recognized as a Global Google SEO Expert from 2018, Zammy Zaif offers unparalleled insights and strategies to elevate your brand’s presence on Google. Consult with him to leverage his extensive knowledge and drive significant growth for your business.
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 offset-lg-1">
        <a href="#" className="thumbnail">
          <img
            src={googleseoimg}
            width={505}
            height={616}
            alt="Google SEO Consultant"
          />
        </a>
      </div>
      <div className="service--shape">
        <img
          src={ball4}
          alt="service"
          className="three"
        />
        <img
          src={ball6}
          alt="service"
          className="four"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default ContentLeft;
