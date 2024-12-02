import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/main.css";
import serviceShape01png from "../assets/images/service/shape/01.png";
import realestateCoach from "../assets/images/SliderImage/realestate-coach.webp";
import dentru from "../assets/images/SliderImage/dentru.webp";
import royCleeves from "../assets/images/SliderImage/roy-cleeves.webp";
import dentruGurgaon from "../assets/images/SliderImage/dentru-gurgaon.webp";
import studio7rk from "../assets/images/SliderImage/studio-7rk.webp";
import propertyBuyersInLondonResult from "../assets/images/SliderImage/property-buyers-in-london-result.webp";
import googleBusinessRankingPerformance from "../assets/images/SliderImage/google-business-ranking-performance.webp";
import shingleRoofingExpertsLosAngelesResult from "../assets/images/SliderImage/shingle-roofing-experts-los-angeles-result.webp";
import progressiveAcServicesNorthHollywood from "../assets/images/SliderImage/progressive-ac-services-north-hollywood.png";
import ctaPanf2 from "../assets/images/cta/02.png";
import serviceShape03png from "../assets/images/service/shape/03.png";
import serviceShape04png from "../assets/images/service/shape/04.png";
import serviceShape06png from "../assets/images/service/shape/06.png";
import workingProcess from "../assets/images/service/digital-influencer-faq.webp";
import revolutionizeWithGoogleSeoServices from "../assets/images/WebsiteRankingServices/revolutionize-with-google-seo-services.svg";
import getMoreCalls from "../assets/images/WebsiteRankingServices/get-more-calls.gif";
import dominatingSearchankings from "../assets/images/WebsiteRankingServices/dominating-search-rankings.svg";
import boostWebsiteVisibility from "../assets/images/WebsiteRankingServices/boost-website-visibility.svg";
import growWithGoogleBusinessProfile from "../assets/images/WebsiteRankingServices/grow-with-google-business-profile.gif";
import googleNo1BusinessPride from "../assets/images/WebsiteRankingServices/google-no1-business-pride.svg";
import website1stRankResult from "../assets/images/WebsiteRankingServices/website-1st-rank-result.gif";
import specialisedSeoRankingServices from "../assets/images/WebsiteRankingServices/specialised-seo-ranking-services.webp";
import winGoogleAlgorithm from "../assets/images/WebsiteRankingServices/win-google-algorithm.webp";
import aboutSeoStrategypng from "../assets/images/about/seo-strategy.png";
import ball1 from "../assets/images/service/shape/01.png";
import ball2 from "../assets/images/service/shape/02.png";
import ball3 from "../assets/images/service/shape/03.png";
import ball4 from "../assets/images/service/shape/04.png";
import ball11 from "../assets/images/service/shape/11.png";
import ball12 from "../assets/images/service/shape/12.png";
import ball17 from "../assets/images/service/shape/12.png";
import ball13 from "../assets/images/service/shape/13.png";
import ball14 from "../assets/images/service/shape/14.png";
import emailjs from "emailjs-com";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    contactNumber: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    emailjs
      .send(
        "service_yegrj7t",
        "template_a8la14c",
        formData,
        "EPiO8dC8xRYmdvDsz"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email.");
      });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between slide transitions in ms
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsprice = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between slide transitions in ms
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* rts banner area start */}
      <div className="contact-banner-area-start faq rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* banner main inner contact areas start */}
              <div className="banner-inner-area-contact-inner">
                <h1 className="title skew-up-2 mb--40" style={{ opacity: 1 }}>Google Ranking Services</h1>
                <Link to="/Home" style={{ color: "blue" }}>
                  Home
                </Link>
                &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<span>Google Ranking Services</span>
              </div>
              {/* banner main inner contact areas end */}
              <div className="service--shape">
                <img src={serviceShape01png} alt="service" className="five" />
                <img src={serviceShape03png} alt="service" className="two" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-product-area section-bg" style={{ marginTop: 75 }}>
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-5 col-md-5 pr--50 pr_md--0 pr_sm--0">
              <div className="large-thumbnail">
                <div className="thumbnail">
                  <img
                    src={getMoreCalls}
                    width={450}
                    alt="Website Ranking Services"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="portfolio-content-wrapper-list">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px)",
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    >
                      Get More Sales Calls
                    </div>
                  </div>
                </h3>
                <p className="disc">
                  Our specialized SEO services are carefully designed to propel
                  your online visibility with a multi-pronged approach. We'll
                  enhance your Google Business Profile to secure coveted
                  first-rank placement, meticulously optimize your website to
                  dominate search results, and develop cutting-edge strategies
                  that leave your competition trailing behind. By prioritizing a
                  user-centric, keyword-rich experience, we'll ensure an
                  increase in high-quality organic traffic, driving more
                  inquiries and those all-important sales calls.{" "}
                </p>
                <button className="rts-btn btn-primary">Get Quote</button>
              </div>
            </div>
            <div className="service--shape">
              <img src={serviceShape04png} alt="service" className="one" />
              <img src={serviceShape06png} alt="service" className="two" />
            </div>
          </div>
        </div>
      </div>

      <div
  className="rts-cta-area-start area-3 rts-section-gapBottom"
  style={{ marginTop: 100 }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="cta-main-wrapper-style-box">
          <div>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              Our First Rank Result Speak for us
            </span>
          </div>
          <h2 className="title">Expert in Google Ranking Services</h2>
          <p>
            Google Ranking Services specializes in achieving the first rank on
            Google's SERP for clients locally & globally. We offer comprehensive
            services, including competitor analysis, strategic content creation,
            high-quality backlinks, GBP optimization & on-page technical
            optimization tailored to align with Google's algorithms. Our team
            of Google Rank Experts attracts the right audience for your
            business with our specialized SEO ranking services.
          </p>
          <div className="my-carousel">
            <Slider {...settings}>
              <div>
                <img
                  src={realestateCoach}
                  alt="realestateCoach"
                  style={{ padding: 20, marginBottom: 10 }}
                />
              </div>
              <div>
                <img
                  src={dentru}
                  alt="dentru"
                  style={{ padding: 20,}}
                />
              </div>
              <div>
                <img
                  src={royCleeves}
                  alt="roy-cleeves"
                  style={{ padding: 20, }}
                />
              </div>
              <div>
                <img
                  src={dentruGurgaon}
                  alt="dentru-gurgaon"
                  style={{ padding: 20, }}
                />
              </div>
              <div>
                <img
                  src={studio7rk}
                  alt="studio-7rk"
                  style={{ padding: 20, }}
                />
              </div>
              <div>
                <img
                  src={propertyBuyersInLondonResult}
                  alt="propertyBuyersInLondonResult"
                  style={{ padding: 20, }}
                />
              </div>
              <div>
                <img
                  src={googleBusinessRankingPerformance}
                  alt="googleBusinessRankingPerformance"
                  style={{ padding: 20, }}
                />
              </div>
              <div>
                <img
                  src={shingleRoofingExpertsLosAngelesResult}
                  alt="shingle-roofing-experts-los-angeles-result"
                  style={{ padding: 20, }}
                />
              </div>
              <div>
                <img
                  src={progressiveAcServicesNorthHollywood}
                  alt="progressiveAcServicesNorthHollywood"
                  style={{ padding:20, }}
                />
              </div>
            </Slider>
          </div>

          <div className="shape-area">
            {/* <img src={ball1} alt="sahpe" class="one"/> */}
            <img src={ball11} alt="shape" className="two" />
            <img src={ball2} alt="shape" className="three" />
            {/* <img src={ball4} alt="sahpe" class="four"/> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <div
        class="rts-appoinment-area bg-dark-border-radious-2 pb--40 pt--40"
      >
        <div class="container">
          <div class="row align-items-center justify-content-md-center">
            <div class="col-lg-6 col-md-10 pr--50 pr_md--0 pr_sm--0">
              <div class="appoinment-wrapper-one-left">
                <div
                  style={{
                    color: "white",
                    fontSize: 30,
                    fontWeight: "bold",
                    marginBottom: 20,
                  }}
                >
                  {" "}
                  Looking for More Traffic & Leads?
                </div>
                <p class="disc">
                  {" "}
                  We have helped 38 top brands in the world and 250+ local
                  brands for the last 14 years.
                </p>
                <div class="feature-area-wrapper">
                  <div class="single-feature">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewbox="0 0 32 32"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_724_8705)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 5H25C25.53 5.00153 26.0378 5.21274 26.4125 5.58748C26.7873 5.96222 26.9985 6.47004 27 7V12H25V7H22V10H10V7H7V28H16V30H7C6.47004 29.9985 5.96222 29.7873 5.58748 29.4125C5.21274 29.0378 5.00153 28.53 5 28V7C5.00153 6.47004 5.21274 5.96222 5.58748 5.58748C5.96222 5.21274 6.47004 5.00153 7 5H10V4C10.0015 3.47004 10.2127 2.96222 10.5875 2.58748C10.9622 2.21274 11.47 2.00153 12 2H20C20.53 2.00153 21.0378 2.21274 21.4125 2.58748C21.7873 2.96222 21.9985 3.47004 22 4V5ZM12 8H20V4H12V8ZM29.2768 17.1325C29.7534 18.0131 30.002 18.9991 30 20.0004C29.9996 20.8427 29.8212 21.6755 29.4765 22.4441C29.1318 23.2127 28.6287 23.8998 28 24.4604V32.0004L24 30.1068L20 32.0004V24.4604C19.2536 23.7928 18.6862 22.9491 18.3495 22.0061C18.0127 21.063 17.9174 20.0507 18.072 19.0614C18.2267 18.0721 18.6266 17.1372 19.2351 16.342C19.8437 15.5467 20.6416 14.9165 21.5561 14.5086C22.4706 14.1007 23.4727 13.9282 24.4709 14.0068C25.4692 14.0854 26.4319 14.4126 27.2713 14.9585C28.1108 15.5045 28.8002 16.2518 29.2768 17.1325ZM24 27.8937L26 28.8404V25.6504C24.7075 26.1172 23.2925 26.1172 22 25.6504V28.8404L24 27.8937ZM21.7777 23.3263C22.4355 23.7658 23.2089 24.0004 24 24.0004C25.0605 23.9992 26.0772 23.5774 26.8271 22.8275C27.577 22.0776 27.9988 21.0609 28 20.0004C28 19.2093 27.7654 18.4359 27.3259 17.7781C26.8864 17.1203 26.2617 16.6076 25.5307 16.3049C24.7998 16.0021 23.9956 15.9229 23.2197 16.0773C22.4437 16.2316 21.731 16.6126 21.1716 17.172C20.6122 17.7314 20.2312 18.4441 20.0769 19.22C19.9225 19.996 20.0017 20.8002 20.3045 21.5311C20.6072 22.262 21.1199 22.8868 21.7777 23.3263Z"
                            fill="#36D659"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 5H25C25.53 5.00153 26.0378 5.21274 26.4125 5.58748C26.7873 5.96222 26.9985 6.47004 27 7V12H25V7H22V10H10V7H7V28H16V30H7C6.47004 29.9985 5.96222 29.7873 5.58748 29.4125C5.21274 29.0378 5.00153 28.53 5 28V7C5.00153 6.47004 5.21274 5.96222 5.58748 5.58748C5.96222 5.21274 6.47004 5.00153 7 5H10V4C10.0015 3.47004 10.2127 2.96222 10.5875 2.58748C10.9622 2.21274 11.47 2.00153 12 2H20C20.53 2.00153 21.0378 2.21274 21.4125 2.58748C21.7873 2.96222 21.9985 3.47004 22 4V5ZM12 8H20V4H12V8ZM29.2768 17.1325C29.7534 18.0131 30.002 18.9991 30 20.0004C29.9996 20.8427 29.8212 21.6755 29.4765 22.4441C29.1318 23.2127 28.6287 23.8998 28 24.4604V32.0004L24 30.1068L20 32.0004V24.4604C19.2536 23.7928 18.6862 22.9491 18.3495 22.0061C18.0127 21.063 17.9174 20.0507 18.072 19.0614C18.2267 18.0721 18.6266 17.1372 19.2351 16.342C19.8437 15.5467 20.6416 14.9165 21.5561 14.5086C22.4706 14.1007 23.4727 13.9282 24.4709 14.0068C25.4692 14.0854 26.4319 14.4126 27.2713 14.9585C28.1108 15.5045 28.8002 16.2518 29.2768 17.1325ZM24 27.8937L26 28.8404V25.6504C24.7075 26.1172 23.2925 26.1172 22 25.6504V28.8404L24 27.8937ZM21.7777 23.3263C22.4355 23.7658 23.2089 24.0004 24 24.0004C25.0605 23.9992 26.0772 23.5774 26.8271 22.8275C27.577 22.0776 27.9988 21.0609 28 20.0004C28 19.2093 27.7654 18.4359 27.3259 17.7781C26.8864 17.1203 26.2617 16.6076 25.5307 16.3049C24.7998 16.0021 23.9956 15.9229 23.2197 16.0773C22.4437 16.2316 21.731 16.6126 21.1716 17.172C20.6122 17.7314 20.2312 18.4441 20.0769 19.22C19.9225 19.996 20.0017 20.8002 20.3045 21.5311C20.6072 22.262 21.1199 22.8868 21.7777 23.3263Z"
                            fill="white"
                            fill-opacity="0.2"
                          ></path>
                        </g>
                        <defs>
                          <clippath id="clip0_724_8705">
                            <rect width="32" height="32" fill="white"></rect>
                          </clippath>
                        </defs>
                      </svg>
                    </div>
                    <p>Strategy Call</p>
                  </div>
                  <div class="single-feature">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewbox="0 0 33 32"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7501 9.67433C20.9097 8.57942 18.8082 8.00102 16.6668 8.00003C13.4853 8.00365 10.4351 9.2691 8.18549 11.5187C5.93584 13.7684 4.67039 16.8185 4.66677 20H2.66677C2.66268 17.4879 3.33574 15.021 4.61513 12.859C5.89451 10.697 7.73294 8.91981 9.93699 7.71434C12.1411 6.50886 14.6293 5.91969 17.1399 6.0088C19.6504 6.09791 22.0906 6.86202 24.2037 8.22073L22.7501 9.67433ZM28.6668 9.414L27.2527 8L18.6858 16.5669C18.0761 16.1996 17.3785 16.0037 16.6668 16C15.8756 16 15.1023 16.2346 14.4445 16.6741C13.7867 17.1136 13.274 17.7384 12.9712 18.4693C12.6685 19.2002 12.5893 20.0044 12.7436 20.7804C12.898 21.5563 13.2789 22.269 13.8383 22.8284C14.3977 23.3878 15.1105 23.7688 15.8864 23.9231C16.6623 24.0775 17.4666 23.9983 18.1975 23.6955C18.9284 23.3928 19.5531 22.8801 19.9926 22.2223C20.4322 21.5645 20.6668 20.7911 20.6668 20C20.663 19.2882 20.4672 18.5906 20.0999 17.9809L28.6668 9.414ZM16.6668 22C16.2712 22 15.8845 21.8827 15.5556 21.6629C15.2267 21.4432 14.9704 21.1308 14.819 20.7654C14.6676 20.3999 14.628 19.9978 14.7052 19.6098C14.7824 19.2219 14.9728 18.8655 15.2526 18.5858C15.5323 18.3061 15.8886 18.1156 16.2766 18.0384C16.6645 17.9613 17.0667 18.0009 17.4321 18.1522C17.7976 18.3036 18.1099 18.56 18.3297 18.8889C18.5495 19.2178 18.6668 19.6044 18.6668 20C18.6662 20.5302 18.4552 21.0386 18.0803 21.4135C17.7054 21.7885 17.197 21.9994 16.6668 22ZM30.6668 20C30.6654 17.3279 29.8912 14.7133 28.4377 12.4712L26.9925 13.9165C28.0882 15.7566 28.6666 17.8584 28.6668 20H30.6668Z"
                          fill="#36D659"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7501 9.67433C20.9097 8.57942 18.8082 8.00102 16.6668 8.00003C13.4853 8.00365 10.4351 9.2691 8.18549 11.5187C5.93584 13.7684 4.67039 16.8185 4.66677 20H2.66677C2.66268 17.4879 3.33574 15.021 4.61513 12.859C5.89451 10.697 7.73294 8.91981 9.93699 7.71434C12.1411 6.50886 14.6293 5.91969 17.1399 6.0088C19.6504 6.09791 22.0906 6.86202 24.2037 8.22073L22.7501 9.67433ZM28.6668 9.414L27.2527 8L18.6858 16.5669C18.0761 16.1996 17.3785 16.0037 16.6668 16C15.8756 16 15.1023 16.2346 14.4445 16.6741C13.7867 17.1136 13.274 17.7384 12.9712 18.4693C12.6685 19.2002 12.5893 20.0044 12.7436 20.7804C12.898 21.5563 13.2789 22.269 13.8383 22.8284C14.3977 23.3878 15.1105 23.7688 15.8864 23.9231C16.6623 24.0775 17.4666 23.9983 18.1975 23.6955C18.9284 23.3928 19.5531 22.8801 19.9926 22.2223C20.4322 21.5645 20.6668 20.7911 20.6668 20C20.663 19.2882 20.4672 18.5906 20.0999 17.9809L28.6668 9.414ZM16.6668 22C16.2712 22 15.8845 21.8827 15.5556 21.6629C15.2267 21.4432 14.9704 21.1308 14.819 20.7654C14.6676 20.3999 14.628 19.9978 14.7052 19.6098C14.7824 19.2219 14.9728 18.8655 15.2526 18.5858C15.5323 18.3061 15.8886 18.1156 16.2766 18.0384C16.6645 17.9613 17.0667 18.0009 17.4321 18.1522C17.7976 18.3036 18.1099 18.56 18.3297 18.8889C18.5495 19.2178 18.6668 19.6044 18.6668 20C18.6662 20.5302 18.4552 21.0386 18.0803 21.4135C17.7054 21.7885 17.197 21.9994 16.6668 22ZM30.6668 20C30.6654 17.3279 29.8912 14.7133 28.4377 12.4712L26.9925 13.9165C28.0882 15.7566 28.6666 17.8584 28.6668 20H30.6668Z"
                          fill="white"
                          fill-opacity="0.2"
                        ></path>
                      </svg>
                    </div>
                    <p>In-depth Audit</p>
                  </div>
                  <div class="single-feature">
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewbox="0 0 33 32"
                        fill="none"
                      >
                        <path
                          d="M23.3333 4L18.3333 7.75V14.25L15.3333 12L10.3333 15.75V22.25L7.33325 20L2.33325 23.75V30H4.33325V24.75L7.33325 22.5L10.3333 24.75V30H12.3333V16.75L15.3333 14.5L18.3333 16.75V30H20.3333V8.75L23.3333 6.5L26.3333 8.75V30H28.3333V7.75L23.3333 4Z"
                          fill="#36D659"
                        ></path>
                        <path
                          d="M23.3333 4L18.3333 7.75V14.25L15.3333 12L10.3333 15.75V22.25L7.33325 20L2.33325 23.75V30H4.33325V24.75L7.33325 22.5L10.3333 24.75V30H12.3333V16.75L15.3333 14.5L18.3333 16.75V30H20.3333V8.75L23.3333 6.5L26.3333 8.75V30H28.3333V7.75L23.3333 4Z"
                          fill="white"
                          fill-opacity="0.2"
                        ></path>
                      </svg>
                    </div>
                    <p>Growth Roadmap</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10">
              <form action="#" class="appoinment_form-1">
                <div class="signle-input">
                  <label for="website">Website</label>
                  <input
                    type="url"
                    id="website"
                    placeholder="yourwebsite.com"
                    value={formData.website}
                    name="website"
                    onChange={handleInputChange}
                  />
                  <i class="fa-light fa-globe"></i>
                </div>
                <div class="signle-input">
                  <label for="phone">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder="Your phone"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                  />
                  <i class="fa-regular fa-user"></i>
                </div>
                <div class="signle-input">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                  <i class="fa-light fa-envelope"></i>
                </div>
                <div class="signle-input">
                  <label for="name">Subject</label>
                  <input
                    type="textarea"
                    id="name"
                    placeholder=" Type in your subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <i class="fa-regular fa-user"></i>
                </div>

                <button class="rts-btn btn-primary-2" onClick={sendMail}>
                  Enquiry Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="sape-area">
          <img class="one" src={ball1} alt="shape" />
          <img class="two" src={ball2} alt="shape" />
          <img class="three" src={ball3} alt="shape" />
          <img class="four" src={ball4} alt="shape" />
        </div>
      </div>

      <div className="rtws-pricing-area-start-two rts-section-gap bg-light-border-radious pt--120 mb--80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-one-center">
                <span className="pre skew-up">
                  Local to Global Ranking SEO Services
                </span>
                <h2 className="title skew-up">Cost of SEO Rank Services</h2>
                <p class="disc text-center">
                  {" "}
                  Specializing in Google Ranking Services to elevate your online
                  presence and drive organic traffic to your website.
                </p>
              </div>
            </div>
          </div>
          <Slider {...settingsprice}>
            {" "}
            {/* Wrap pricing cards with Slider component */}
            {/* Pricing Plan 1 */}
            <div className="col-lg-2 col-md-6 col-sm-10">
              <div className="single-pricing-area-two professional-place" style={{
            height: "560px", padding: 20, marginRight:20 , marginBottom:20 // Limit height
          }}>
                <div className="head-pricing" >
                  <span className="plane_name">GBP Local SEO</span>
                  <div className="doller-area">
                    <h3 className="title">$750</h3>
                    <span className="time">Start From</span>
                  </div>
                </div>
                <div className="body" style={{ fontSize: "14px" }}>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>45 Days TimeFrame</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>5-10 Miles of Area Radious</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>5 Major Category Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>5 Business Related Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1 Google Business Profile</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>website Ranking</p>
                  </div>
                </div>
                <div
                  className="footer"
                  style={{
                    marginTop: "10px", // Reduce space between the body and footer
                    textAlign: "center",
                  }}
                >
                  <a href="#" className="rts-btn btn-primary-2">
                    Contact Now
                  </a>
                  {/* <p>No credit card required.</p> */}
                </div>
              </div>
            </div>
            {/* Pricing Plan 2 */}
            <div className="col-lg-2 col-md-6 col-sm-10">
              <div className="single-pricing-area-two professional-place"  style={{
            height: "560px",padding: 20, marginRight:20
          }}>
                <div className="head-pricing">
                  <span className="plane_name">City Based SEO</span>
                  <div className="doller-area">
                    <h3 className="title">$999</h3>
                    <span className="time">/Month</span>
                  </div>
                </div>
                <div className="body" style={{ fontSize: "14px" }}>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>3-6 Months TimeFrame</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>A Particular City or District</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Rank for 25 Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st page Rank for 45 Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1 Google Business Profile</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>300 HQ White Hat Backlinks</p>
                  </div>
                </div>
                <div
                  className="footer"
                  style={{
                    marginTop: "10px", // Reduce space between the body and footer
                    textAlign: "center",
                  }}
                >
                  <a href="#" className="rts-btn btn-primary-2">
                    Contact Now
                  </a>
                  {/* <p>No credit card required.</p> */}
                </div>
              </div>
            </div>
            {/* Pricing Plan 3 */}
            <div className="col-lg-2 col-md-6 col-sm-10">
              <div className="single-pricing-area-two professional-place"  style={{
            height: "560px",padding: 20, marginRight:20 
          }}>
                <div className="head-pricing">
                  <span className="plane_name">State Level SEO</span>
                  <div className="doller-area">
                    <h3 className="title">$1350</h3>
                    <span className="time">/Month</span>
                  </div>
                </div>
                <div className="body" style={{ fontSize: "14px" }}>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>6-9 Months TimeFrame</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>State Level 1st Rank</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Rank for 25 Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Page Rank for 125 key</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1-5 Google Business Profile</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>500 HQ White Hat Backlinks</p>
                  </div>
                </div>
                <div
                  className="footer"
                  style={{
                    marginTop: "10px", // Reduce space between the body and footer
                    textAlign: "center",
                  }}
                >
                  <a href="#" className="rts-btn btn-primary-2">
                    Contact Now
                  </a>
                  {/* <p>No credit card required.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-10">
              <div className="single-pricing-area-two professional-place"  style={{
            height: "560px",padding: 20, marginRight:20 
          }}>
                <div className="head-pricing">
                  <span className="plane_name">Country Level SEO</span>

                  <div className="doller-area">
                    <h3 className="title">$1700</h3>
                    <span className="time">/Month</span>
                  </div>
                </div>
                <div className="body" style={{ fontSize: "14px" }}>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>9-12 Months TimeFrame</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>Country Level 1st Rank</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Rank for 50 Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Page Rank for 75 key</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1-10 Google Business Profile</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>750 HQ White Hat Backlinks</p>
                  </div>
                </div>
                <div
                  className="footer"
                  style={{
                    marginTop: "10px", // Reduce space between the body and footer
                    textAlign: "center",
                  }}
                >
                  <a href="#" className="rts-btn btn-primary-2">
                    Contact Now
                  </a>
                  {/* <p>No credit card required.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-10">
              <div className="single-pricing-area-two professional-place"  style={{
            height: "560px", padding: 20, marginRight:20
          }}>
                <div className="head-pricing">
                  <span className="plane_name">Global SEO</span>
                  <div className="doller-area">
                    <h3 className="title">$1500</h3>
                    <span className="time">/Month</span>
                  </div>
                </div>
                <div className="body" style={{ fontSize: "14px" }}>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>12-24 Months TimeFrame</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>Global Level 1st Rank</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Rank for 75 Keywords</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1st Page Rank for 125 key</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>Snippet Featured Result</p>
                  </div>
                  <div className="single-check" style={{ marginBottom: "8px" }}>
                    <i className="fa-regular fa-check"></i>
                    <p>1500 HQ White Hat Backlinks</p>
                  </div>
                </div>
                <div
                  className="footer"
                  style={{
                    marginTop: "10px", // Reduce space between the body and footer
                    textAlign: "center",
                  }}
                >
                  <a href="#" className="rts-btn btn-primary-2">
                    Contact Now
                  </a>
                  {/* <p>No credit card required.</p> */}
                </div>
              </div>
            </div>
          </Slider>
          {/* <div className="row">
          <div className="col-lg-12">
            <div className="button-text-bottom-area-pricing text-center">
              <p>Prices exclude any applicable taxes.</p>
              <a href="#" className="rts-btn btn-primary-4-border arrow-rotate">
                Compare all features <i className="fa-light fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div> */}
        </div>
        <div className="shape-area">
          <img src={ball12} alt="shape" className="one" />
          <img src={ball13} alt="shape" className="two" />
          <img src={ball14} alt="shape" className="three" />
        </div>
      </div>

      <div class="providing-service-area-start-seven1 gradient-7-radious rts-section-gap">
        <div class="container">
          <div class="row g-6 align-items-center mt--20">
            <div class="col-lg-6">
              <div class="image-area-service-1 area-3">
                <a href="#" class="thumbnail-service-1">
                  <img
                    src={googleNo1BusinessPride}
                    alt="White Hat SEO Process"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-6 order-change">
              <div className="portfolio-content-wrapper-list white-text">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  Google's No.1 - Your Business Pride
                </h3>
                <p className="disc" style={{ color: "white" }}>
                  Google's #1 ranking as a search engine directly benefits
                  businesses because it drives immense traffic to websites that
                  appear at the top of search results. High visibility on Google
                  translates to increased brand awareness, more potential
                  customers finding your website, and ultimately a boost in lead
                  generation and sales. Essentially, strong Google search
                  performance equates to an inherent competitive advantage and
                  signifies success in the digital landscape, making it a point
                  of pride for any business.
                </p>
                <div class="button-area">
                  <Link to="/Contact" class="rts-btn btn-primary-7">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-product-area">
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-8 col-md-6">
              <div className="portfolio-content-wrapper-list">
                <span className="pre">
                  GBP is Your Key to Attract Local Audience
                </span>
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px)",
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    >
                      Grow Leads with Google Business Profile
                    </div>
                  </div>
                </h3>
                <p className="disc">
                  Our team specializes in optimizing your Google Business
                  Profile to maximize visibility and attract qualified leads in
                  your local area. We'll ensure your profile is complete,
                  accurate, and showcases positive customer reviews.
                  Additionally, we'll strategically use Google Posts, messaging
                  features, and targeted Q&A responses to build trust and
                  convert searchers into customers. Our service helps you
                  dominate local search results and drive a consistent stream of
                  warm leads directly to your business.
                </p>
                <div class="button-area">
                  <Link to="/Contact" class="rts-btn btn-primary-7">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="large-thumbnail">
                <div className="thumbnail">
                  <img
                    src={growWithGoogleBusinessProfile}
                    width={450}
                    alt="Benefits for Google's First Rank"
                  />
                </div>
              </div>
            </div>
            <div className="service--shape">
              <img src={serviceShape04png} alt="service" className="five" />
              <img src={serviceShape06png} alt="service" className="three" />
            </div>
          </div>
        </div>
      </div>

      <div className="rts-product-area section-bg">
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-4 col-md-5">
              <div className="large-thumbnail">
                <div className="thumbnail">
                  <img
                    src={boostWebsiteVisibility}
                    width={450}
                    alt="Benefits for Google's First Rank"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div className="portfolio-content-wrapper-list">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px)",
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    >
                      Boost Website Visibility - Accelerate Sales
                    </div>
                  </div>
                </h3>
                <p className="disc">
                  The visibility of a website is one of the most important
                  factors for running a successful business. Accelerate your
                  sales by boosting your website's visibility. Our data-driven
                  optimization strategies transform your website presence into a
                  high-performing sales machine. With customized design
                  enhancements, persuasive copywriting and targeted A/B testing,
                  we focus on relevant business-enquiry keywords to lead you
                  towards sales qualified leads.{" "}
                </p>
                <p className="disc">
                  This increased visibility will take your business website to
                  the top of search results, driving more organic traffic and
                  has high chances of converting those leads into customers. By
                  attracting more business, our optimization method builds
                  strong credibility to help you stand out among your
                  competitors easily. This active engagement will earn the trust
                  of your targeted audience, resulting in more clicks. Choose
                  our ranking services to quickly increase your business growth
                  with high number of sales.{" "}
                </p>
              </div>
            </div>

            <div className="service--shape">
              <img src={serviceShape04png} alt="service" className="five" />
              <img src={serviceShape06png} alt="service" className="three" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="rts-appoinment-area bg-dark-border-radious-2 pb--100 pt--100"
        style={{ marginTop: 100 }}
      >
        <div class="container">
          <div class="row align-items-center justify-content-md-center">
            <div class="row g-6 align-items-center mt--20">
              <div class="col-lg-8 order-change">
                <div className="portfolio-content-wrapper-list white-text">
                  <h3 className="title split-collab" style={{ opacity: 1 }}>
                    {" "}
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px)",
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px)",
                          opacity: 1,
                          visibility: "inherit",
                        }}
                      >
                        Dominating Google Search Rankings
                      </div>
                    </div>
                  </h3>
                  <p className="disc">
                    Search engine ranking indicates where a website or URL
                    appears on search engine results pages. Pages that rank well
                    are positioned at the top, attracting more visitors.
                  </p>
                  <p className="disc">
                    Dominating Google search rankings means becoming the primary
                    choice for customers. Higher rankings boost your visibility,
                    establish you as an industry authority and drive traffic to
                    your website. Our strategies ensure you not only appear in
                    search results but also stand out, making you the focal
                    point in the digital landscape.{" "}
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="image-area-service-1 area-3">
                  <a href="#" class="thumbnail-service-1">
                    <img
                      src={dominatingSearchankings}
                      alt="White Hat SEO Process"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sape-area">
          <img class="one" src={ball1} alt="shape" />
          <img class="two" src={ball2} alt="shape" />
          <img class="three" src={ball3} alt="shape" />
          <img class="four" src={ball4} alt="shape" />
        </div>
      </div>
      {/* <div class="rts-call-to-action rts-section-gap2Bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="call-to-action-area-7">
                        <h2 class="title skew-up">Let us help you grow <br/>
                            at the fastest pace</h2>
                        <p class="disc">Our cross-disciplinary team integrates branding.</p>
                        <div class="button-area">
                            <a href="contact.html" class="rts-btn btn-primary-7"><i class="fa-light fa-paper-plane"></i>More about us</a>
                        </div>
                        <div class="shape-area">
                            <img src={ctaPanf1} alt="" class="one"/>
                            <img src={ctaPanf2} alt="" class="two"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      <div className="rts-product-area">
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-4 col-md-5">
              <div className="large-thumbnail">
                <div className="thumbnail">
                  <img
                    src={website1stRankResult}
                    width={450}
                    alt="Benefits for Google's First Rank"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div className="portfolio-content-wrapper-list">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px)",
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    >
                      Website 1st Rank Search Result
                    </div>
                  </div>
                </h3>
                <p className="disc">
                  Benefit from our seasoned SEO experts who are committed to
                  delivering Website Ranking Optimization services aimed at
                  securing the prestigious No.1 position on Google. With a track
                  record dating back to 2008, we've consistently assisted
                  businesses in dominating search results and reaching the
                  summit of Google. Harness the potency of top-tier outcomes
                  through our unwavering SEO services. Since 2014, we've enabled
                  businesses of all scales to conquer search rankings and secure
                  coveted first-page placements on Google.{" "}
                </p>
                <p className="disc">
                  With our unwavering dedication to tangible results, we assure
                  you of substantial sales growth and heightened online
                  visibility. Join forces with us to elevate your business to
                  the pinnacle of Google's rankings.{" "}
                </p>
              </div>
            </div>

            <div className="service--shape">
              <img src={serviceShape04png} alt="service" className="five" />
              <img src={serviceShape06png} alt="service" className="three" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="providing-service-area-start-seven1 gradient-7-radious rts-section-gap"
      >
        <div class="container">
          <div class="row g-6 align-items-center mt--20">
            <div class="col-lg-8 order-change">
              <div className="portfolio-content-wrapper-list white-text">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  Revolutionize with Google SEO Service
                </h3>
                <p className="disc" style={{ color: "white" }}>
                  Focusing your business growth with Google offers several
                  compelling advantages. Google's dominance in search makes
                  mastering Search Engine Optimization (SEO) critical – aligning
                  your website with Google's algorithms boosts visibility and
                  attracts organic traffic. Moreover, Google provides an array
                  of invaluable free tools: Google Analytics helps you
                  understand website performance, Google My Business enhances
                  local search presence, and Google Search Console aids in
                  technical SEO management. Leveraging these resources alongside
                  strategic SEO practices positions your business to thrive
                  within the vast Google ecosystem, driving increased traffic,
                  leads, and ultimately sustainable growth.
                </p>
                <div class="button-area">
                  <Link to="/Contact" class="rts-btn btn-primary-7">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="image-area-service-1 area-3">
                <a href="#" class="thumbnail-service-1">
                  <img
                    src={revolutionizeWithGoogleSeoServices}
                    alt="revolutionize-with-google-seo-services"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rts-product-area">
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-4 col-md-5">
              <div className="large-thumbnail">
                <div className="thumbnail">
                  <img
                    src={specialisedSeoRankingServices}
                    width={450}
                    alt="Specialised SEO Ranking Services"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div className="portfolio-content-wrapper-list">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  {" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px)",
                      opacity: 1,
                      visibility: "inherit",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px)",
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    >
                      Specialised SEO Ranking Services
                    </div>
                  </div>
                </h3>
                <p className="disc">
                  <b>Local Search:</b>
                  This targets individuals within a 5 to 15-mile radius.
                  Optimizing for local SEO will ensure your Google Business
                  profile appears to those in your immediate vicinity. This
                  process typically takes 3 months.{" "}
                </p>
                <p className="disc">
                  <b>City-Specific Search:</b>
                  For instance, if someone searches from Los Angeles, they'll
                  find your website, but searches from other cities won't yield
                  your site. This process usually takes 6 months{" "}
                </p>
                <p className="disc">
                  <b>State Level SEO:</b>
                  We optimize your website to appear in searches throughout the
                  entire state, enhancing visibility for your product category.
                  This typically requires 9 months{" "}
                </p>
                <p className="disc">
                  <b>National SEO:</b>
                  By optimizing your website at a country level, we ensure
                  people across the nation find your site when searching for
                  your product category. This process generally takes 12 months.{" "}
                </p>
                <p className="disc">
                  <b>Global SEO:</b>
                  This involves optimizing your website to appear in search
                  results worldwide, targeting users searching for relevant
                  keywords from anywhere. Global SEO typically takes 12 to 16
                  months.{" "}
                </p>
              </div>
            </div>

            <div className="service--shape">
              <img src={serviceShape04png} alt="service" className="five" />
              <img src={serviceShape06png} alt="service" className="three" />
            </div>
          </div>
        </div>
      </div>
      <div className="rts-product-area section-bg">
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-8 col-md-6">
              <div className="portfolio-content-wrapper-list">
                <span className="pre">ZAMMY ZAIF</span>
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                      Win Google Algorithm & Win Competition
                </h3>
                <p className="disc">
                  Winning Google's algorithm and emerging victorious in
                  competitions requires a multifaceted approach focused on
                  high-quality, user-centric content. Prioritize original,
                  in-depth content that addresses searcher intent while adhering
                  to Google's quality guidelines. Employ technical SEO best
                  practices, ensuring your site is fast, mobile-friendly, and
                  crawlable. Build authority through reputable backlinks from
                  relevant websites. Stay updated on algorithm changes, and
                  don't engage in manipulative tactics that violate Google's
                  guidelines. Remember that genuine value for users lies at the
                  heart of long-term success.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 pl--50 pl_md--0 pl_sm--0">
              <div className="large-thumbnail">
                <div className="thumbnail">
                  <img
                    src={winGoogleAlgorithm}
                    width={450}
                    alt="win-google-algorithm"
                  />
                </div>
              </div>
            </div>
            <div className="service--shape">
              <img src={serviceShape04png} alt="service" className="five" />
              <img src={serviceShape06png} alt="service" className="three" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="rts-working-porcess-area-two ptb--45 bg-dark-border-radious-sd"
        style={{ marginTop: 75 }}
      >
        <div class="container-1058">
          <div class="row">
            <div class="col-lg-12">
              <div class="title-style-one-center">
                <span class="pre skew-up">FAQ</span>
                <h2 class="title skew-up">Frequently Asked Question</h2>
              </div>
            </div>
          </div>
          <div class="row g-48 mt--0">
            <div class="col-lg-6 col-md-6">
              <div class="working-process-right-area-one">
                <div class="thumbnail">
                  <img
                    class="large"
                    src={workingProcess}
                    alt="working-process"
                  />
                  <img
                    src="assets/images/working-process/01.png"
                    alt=""
                    class="small"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="working-process-accordion-one">
                <div class="accordion" id="accordionExamples">
                  <div class="accordion-item show">
                    <div class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        01. Why is ranking #1 on Google so important?
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        Google Rank 1 matters because it positions at the top of
                        search results increasing visibility,attracting more
                        organic traffic and turning visitors to customers
                        through lead generation.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item show">
                    <div class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        02. Can #1 rank boost sales?
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        Obtaining Google Rank 1 enhances your brand visibility
                        that attracts more qualified leads and converts them
                        into customers through trust and authority.{" "}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item show">
                    <div class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        03. What makes Google #1 rank more effective?
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        Studies show that the majority of users click on one of
                        the top three search results from that #1 rank receiving
                        the more organic traffic and sales leads.{" "}
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item show">
                    <div class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        04. Does Google #1 benefit business?
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        Google's #1 ranking considers a business as a leading
                        authority in their industry, building essential trust
                        and credibility for long-term success beyond just
                        increased traffic.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
