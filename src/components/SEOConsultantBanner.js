import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css'
import seobannerimg from '../assets/images/google-seo-consultant.webp';
 import bannerImage1 from '../assets/images/banner/01.png';
 import bannerShortImage03 from '../assets/images/banner/short/03.png';
 import bannerShortImage05 from '../assets/images/banner/short/05.png';
 import bannerShortImage04 from '../assets/images/banner/short/04.png';
 import bannerShortImage06 from '../assets/images/banner/short/06.png';
 import bannershortshortimage01 from '../assets/images/banner/short/01.png';
 import bannershortshortimage02 from '../assets/images/banner/short/02.png';

const SEOConsultantBanner = () => {
  return (
    
    // <div className="rts-service-banner-area rts-section-gap inner">
    // <div className="container">
    //   <div className="row">
    //   <div className="row align-items-center">
    //     <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0 pt--160">
    //       <div className="content">
    //         <h2 className="text-dark position-relative">
    //           Google SEO Consultant
    //           <span className="watermark">SEO</span>
    //         </h2>
    //         <p className="text-dark mb-4">
    //           Zammy Zaif, Google SEO Consultant, renowned worldwide for top-notch 
    //           Google ranking expertise. Achieve unmatched online visibility and growth.
    //         </p>
    //         <ul className="list-inline">
    //           <li className="list-inline-item mx-1 my-2">
    //             <a href="#" className="btn btn-primary">
    //               {" Check Our Track Record "}
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="col-lg-6 pt--160">
    //       <img
    //         src={seobannerimg}
    //         className="img-fluid w-10 shadow rounded-lg banner-image"
    //         alt="app-interface"
    //         data-aos="fade-left"
    //         data-aos-delay="100"
    //       />
    //     </div>
    //   </div>
    // </div>
    // </div>
    //   </div>
    <div className="rts-banner-area-one home-five pt--80 pb--40">
    <div className="box-one-top" />
    <div className="box-one-bottom" />
    <div className="container pt--80 pt_sm--40">
      <div className="row align-items-center">
        <div className="col-lg-5 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2 mt_md--100 mt_sm--100">
          <div className="banner-one-content-left">
            <h1 className="title split-collab">
            Google SEO Consultant
            </h1>
            <p className="text-dark mb-4">
               Zammy Zaif, Google SEO Consultant, renowned worldwide for top-notch 
               Google ranking expertise. Achieve unmatched online visibility and growth.
             </p>
          </div>
        </div>
        <div className="col-lg-7 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1 d-flex justify-content-end justify-content-md-center justify-content-sm-center">
          <div className="banner-one-right-content-with-img text-center">
            <img src={seobannerimg} alt="banner_image" />
            <div className="short-image-area">
              <img
                src={bannershortshortimage01}
                alt="banner"
                className="img-1"
                width={180}
              />
              <img
                src={bannershortshortimage02}
                alt="banner"
                className="img-2"
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="radious-shape">
      <img
        className="right-top"
        src={bannerShortImage03}
        alt="banner_image"
      />
      <img
        className="mid-top"
        src={bannerShortImage05}
        alt="banner_image"
      />
      <img
        className="left-bottom"
        src={bannerShortImage04}
        alt="banner_image"
      />
      <img
        className="center-bottom"
        src={bannerShortImage06}
        alt="banner_image"
      />
    </div>
   
  </div>
      
  );
};

export default SEOConsultantBanner;
