import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/main.css";
import serviceShape01png from "../assets/images/service/shape/01.png";
import serviceShape02png from "../assets/images/service/shape/02.png";
import serviceShape03png from "../assets/images/service/shape/03.png";
import serviceShape04png from "../assets/images/service/shape/04.png";
import serviceShape06png from "../assets/images/service/shape/06.png";
import aboutShape01png from "../assets/images/about/shape/01.png";
import aboutShape02png from "../assets/images/about/shape/02.png";
import googleBusinessProfile from "../assets/images/WebsiteRankingServices/google-business-profile.webp";
import gmbRankingExpert from "../assets/images/WebsiteRankingServices/gmb-ranking-expert.webp";
import gmbLocalCitationBuildingService from "../assets/images/WebsiteRankingServices/gmb-local-citation-building-service.webp";
import googleBusinessProfileOptimization from "../assets/images/WebsiteRankingServices/google-business-profile-optimization.webp";
import websigoogleMyBusinessRankingServiceteRankNo1 from "../assets/images/WebsiteRankingServices/google-my-business-ranking-service.webp";
import aboutBusinessMentorpng from "../assets/images/about/zammy-business-mentor.jpg";
import aboutGreatPublicSpeakerpng from "../assets/images/about/zammy-zaif-public-speaker.jpg";
import aboutOnlinePresencepng from "../assets/images/about/zammy-online-presence.png";
import aboutSeoStrategypng from "../assets/images/about/seo-strategy.png";
import ball1 from "../assets/images/service/shape/01.png";
import ball2 from "../assets/images/service/shape/02.png";
import ball3 from "../assets/images/service/shape/03.png";
import ball4 from "../assets/images/service/shape/04.png";
import ball11 from "../assets/images/service/shape/11.png";
import ball12 from "../assets/images/service/shape/12.png";
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

  return (
      <>
        {/* rts banner area start */}
        <div className="contact-banner-area-start faq rts-section-gap" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* banner main inner contact areas start */}
                <div className="banner-inner-area-contact-inner">
                  <h2 style={{fontWeight:'bold'}}>
                  GMB Ranking Services
                  </h2>
                  <Link to ="/Home" style={{color:'blue'}}>Home</Link>/<span >GMB Ranking Services</span>
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
        <div className="rts-product-area">
          <div className="container">
            <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
              <div className="col-lg-7 col-md-6">
                <div className="portfolio-content-wrapper-list">
                  <span className="pre skew-up" style={{ opacity: 1 }}>
                  GMB Ranking Services
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
                       Business Profile Rank Optimization
                      </div>
                    </div>
                  </h3>
                  <p className="disc">
                  Google Business Profile - GMB Ranking Optimization is a service offered by Zammy Zaif, 
                  a renowned Google Business Profile expert. This service is designed to help businesses improve their online visibility and increase 
                  their chances of attracting potential customers locally. With years of experience in the field,
                  Zammy Zaif has developed an extensive understanding of 
                  the Google Business Profile platform and can leverage this knowledge to optimize a business's profile to its fullest potential.{" "}
                  </p>
                  <p className="disc">
                  Through the Google Business Profile Ranking Optimization service, Zammy Zaif assists businesses in creating 
                  a well-optimized profile that accurately represents their products and services. This includes 
                  optimizing the profile's information, images, and videos to enhance its search engine visibility. 
                  Furthermore, he helps businesses improve their online reputation by managing their reviews,
                  responding to customer inquiries, and creating engaging posts that attract potential customers
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="large-thumbnail">
                  <div className="thumbnail">
                    <img
                      src={gmbRankingExpert}
                      width={450}
                      alt="Achieving First Rank in Google"
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
              <div className="col-lg-5 col-md-5">
                <div className="large-thumbnail">
                  <div className="thumbnail">
                    <img
                      src={googleBusinessProfile}
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
                        Dominate your Google Business Profile
                      </div>
                    </div>
                  </h3>
                  <p className="disc">
                  Maximize the impact of your Google Business Profile with our comprehensive optimization services. 
                  Our team of specialists will enhance every aspect of your profile to help you attract more customers,
                   boost your visibility in search results, and establish a positive online reputation.{" "}
                  </p>
                  <p className="disc">
                  Through our strategic approach, we'll help your profile stand out from the competition. 
                   Our experts will highlight your unique selling points, feature positive testimonials and craft engaging 
                   posts that resonate with your target audience. 
                  Take charge of your online presence and become an industry leader with a captivating and 
                  conversion-oriented Google Business Profile.{" "}
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
          class="rts-appoinment-area bg-dark-border-radious-2 pb--40 pt--40"
          style={{ marginTop: 150 }}
        >
          <div class="container">
            <div class="row align-items-center justify-content-md-center">
              <div class="col-lg-6 col-md-10">
                <div class="appoinment-wrapper-one-left">
                  <div
                    style={{
                      color: "white",
                      fontSize: 35,
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
                    <label for="name">Full name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <i class="fa-regular fa-user"></i>
                  </div>
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

        <div className="rts-product-area">
          <div className="container">
            <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
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
                        GMB Ranking Optimization Service
                      </div>
                    </div>
                  </h3>
                  <p className="disc">
                  Boost your ranking in local search results with our affordable optimization services. 
                  Starting from just $350 per profile, we'll work tirelessly to enhance your visibility and attract more local customers.
                  Our team of experts will analyze your Google Business profile and implement proven strategies to improve its performance.
                  </p>
                  <p className="disc">
                  With our optimization techniques, we'll optimize your profile's information, images,
                   and reviews to increase its relevance and credibility in local search rankings.
                   We'll also focus on enhancing your online reputation through effective review management and engagement with customers.
                  </p>
                  <p className="disc">
                  Invest in our cost-effective optimization services and watch your business climb the ranks in local search results.
                   Don't miss out on valuable local customers – let us help you maximize your online presence and drive more traffic to your business.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="large-thumbnail">
                  <div className="thumbnail">
                    <img
                      src={googleBusinessProfileOptimization}
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
         
        <div class="providing-service-area-start-seven gradient-7-radious rts-section-gap">
          <div class="container">
            <div class="row g-6 align-items-center mt--20">
              <div class="col-lg-5">
                <div class="image-area-service-1 area-3">
                  <a href="#" class="thumbnail-service-1">
                    <img src={websigoogleMyBusinessRankingServiceteRankNo1} alt="White Hat SEO Process" />
                  </a>
                </div>
              </div>
              <div class="col-lg-7 order-change">
                <div className="portfolio-content-wrapper-list white-text">
                  <h3 className="title split-collab" style={{ opacity: 1 }}>
                  Google Business Profile Ranking Service
                  </h3>
                  <p className="disc" style={{color:'white'}}>
                  Elevate your Google My Business listing ranking with our specialized service. Our team of experts understands the significance of securing a
                  top position in search results, and we're here to help you achieve that. 
                  With our proven strategies and in-depth knowledge of Google's algorithms,
                  we'll optimize your listing to enhance its visibility, attract organic traffic, and outshine your competitors.
                  </p>
                  <p className="disc" style={{color:'white'}}>
                  Our comprehensive approach includes optimizing your business information, selecting relevant categories, managing reviews, implementing targeted keywords, and creating engaging content. By leveraging our Google My Business listing ranking service, you'll gain a competitive advantage, increase your online presence, and attract more customers to your business. Don't miss out on the opportunity to dominate local search results and experience substantial growth - entrust your Google My Business listing ranking to our expert team.
                  </p>
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
                        GMB Local Citation Building Service
                      </div>
                    </div>
                  </h3>
                  <p className="disc">
                  Take advantage of our GMB Local Citation Building Service to strengthen your online presence.
                  We understand the importance of accurate and consistent business information across various online directories and platforms. 
                  Our expert team will meticulously build relevant citations to establish your business as a trusted and authoritative entity in your industry.
                  </p>
                  <p className="disc">
                  Through our service, we'll conduct thorough research to identify authoritative directories and platforms that are relevant to your business. We'll ensure your business information, including Name, Address, and Phone (NAP) details, is listed accurately and consistently across these platforms. By leveraging our GMB Local Citation Building Service, you'll not only improve your local search rankings but also enhance your online reputation. Increased visibility, credibility, and customer trust await you as we build a robust network of citations for your business. Don't underestimate the power of accurate citations - let us help you establish a strong online presence that drives more customers to your door.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="large-thumbnail">
                  <div className="thumbnail">
                    <img
                      src={gmbLocalCitationBuildingService}
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

        <div class="rts-cta-area-start area-3 rts-section-gapBottom" style={{marginTop :100}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="cta-main-wrapper-style-box">
                    <div>
                          <span>Zammy Zaif</span>
                      </div>      
                        <h2 class="title">Contact Us Today</h2>
                        <p class="disc">If you want to improve your website's ranking and grow your business, contact us today. Our team of SEO 
                        experts will be happy to assist you and answer any queries you may have. We look forward to helping</p>
                        <a href="contact.html" class="rts-btn btn-primary-3">Contact Now</a>
                        
                        <div class="shape-area">
                          
                            <img src={ball1} alt="sahpe" class="one"/>
                            <img src={ball11} alt="sahpe" class="two"/>
                            <img src={ball2} alt="sahpe" class="three"/>
                            <img src={ball4} alt="sahpe" class="four"/>
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
