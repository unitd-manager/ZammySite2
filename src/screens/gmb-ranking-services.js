import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/main.css";
import serviceShape01png from "../assets/images/service/shape/01.png";
import localCitationAudit from "../assets/images/WebsiteRankingServices/local-citation-audit.webp";
import serviceShape03png from "../assets/images/service/shape/03.png";
import serviceShape04png from "../assets/images/service/shape/04.png";
import serviceShape06png from "../assets/images/service/shape/06.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import workingProcess from "../assets/images/service/digital-influencer-faq.webp";
import googleBusinessProfile from "../assets/images/WebsiteRankingServices/google-business-profile.webp";
import gmbRankingExpert from "../assets/images/WebsiteRankingServices/gmb-ranking-expert.webp";
import gmbLocalCitationBuildingService from "../assets/images/WebsiteRankingServices/gmb-local-citation-building-service.webp";
import googleBusinessProfileOptimization from "../assets/images/WebsiteRankingServices/google-business-profile-optimization.webp";
import websigoogleMyBusinessRankingServiceteRankNo1 from "../assets/images/WebsiteRankingServices/google-my-business-ranking-service.webp";
import realestateCoach from "../assets/images/SliderImage/realestate-coach.webp";
import dentru from "../assets/images/SliderImage/dentru.webp";
import royCleeves from "../assets/images/SliderImage/roy-cleeves.webp";
import dentruGurgaon from "../assets/images/SliderImage/dentru-gurgaon.webp";
import studio7rk from "../assets/images/SliderImage/studio-7rk.webp";
import propertyBuyersInLondonResult from "../assets/images/SliderImage/property-buyers-in-london-result.webp";
import googleBusinessRankingPerformance from "../assets/images/SliderImage/google-business-ranking-performance.webp";
import shingleRoofingExpertsLosAngelesResult from "../assets/images/SliderImage/shingle-roofing-experts-los-angeles-result.webp";
import progressiveAcServicesNorthHollywood from "../assets/images/SliderImage/progressive-ac-services-north-hollywood.png";
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

  return (
    <>
      {/* rts banner area start */}
      <div className="contact-banner-area-start faq rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* banner main inner contact areas start */}
              <div className="banner-inner-area-contact-inner">
                <h1 className="title skew-up-2 mb--40" style={{ opacity: 1 }}>
                    GMB Ranking Services
                </h1>
                <Link to ="/Home" style={{color:'blue'}}>Home</Link> &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; <span>GMB Ranking Services</span>
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
                  Google Business Profile - GMB Ranking Optimization is a
                  service offered by Zammy Zaif, a renowned Google Business
                  Profile expert. This service is designed to help businesses
                  improve their online visibility and increase their chances of
                  attracting potential customers locally. With years of
                  experience in the field, Zammy Zaif has developed an extensive
                  understanding of the Google Business Profile platform and can
                  leverage this knowledge to optimize a business's profile to
                  its fullest potential.{" "}
                </p>
                <p className="disc">
                  Through the Google Business Profile Ranking Optimization
                  service, Zammy Zaif assists businesses in creating a
                  well-optimized profile that accurately represents their
                  products and services. This includes optimizing the profile's
                  information, images, and videos to enhance its search engine
                  visibility. Furthermore, he helps businesses improve their
                  online reputation by managing their reviews, responding to
                  customer inquiries, and creating engaging posts that attract
                  potential customers
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 pl--50 pl_md--0 pl_sm--0">
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
            <div className="col-lg-4 col-md-4 pr--50 pr_md--0 pr_sm--0">
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
            <div className="col-lg-8 col-md-8">
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
                  Maximize the impact of your Google Business Profile with our
                  comprehensive optimization services. Our team of specialists
                  will enhance every aspect of your profile to help you attract
                  more customers, boost your visibility in search results, and
                  establish a positive online reputation.{" "}
                </p>
                <p className="disc">
                  Through our strategic approach, we'll help your profile stand
                  out from the competition. Our experts will highlight your
                  unique selling points, feature positive testimonials and craft
                  engaging posts that resonate with your target audience. Take
                  charge of your online presence and become an industry leader
                  with a captivating and conversion-oriented Google Business
                  Profile.{" "}
                </p>
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
        class="rts-cta-area-start area-3 rts-section-gapBottom"
        style={{ marginTop: 100 }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="cta-main-wrapper-style-box">
                <div>
                  <span style={{ color: "#614ce1", fontWeight: "bold" }}>
                    Our First Rank Result Speak for us
                  </span>
                </div>
                <h2 class="title">1st Rank Result in 45 Days</h2>
                <p>
                  Google Ranking Services specializes in achieving the first
                  rank on Google's SERP for clients locally & globally. We offer
                  comprehensive services, including competitor analysis,
                  strategic content creation, high-quality backlinks, GBP
                  optimization & on-page technical optimization tailored to
                  align with Google's algorithms. Our team of Google Rank
                  Experts attracts the right audience for your business with our
                  specialized SEO ranking services.
                </p>
                <div className="my-carousel">
                  <Slider {...settings}>
                    <div>
                      <img src={realestateCoach} alt="realestateCoach" style={{ padding: 20, }} />
                    </div>
                    <div>
                      <img src={dentru} alt="dentru"  style={{ padding: 20, }}/>
                    </div>
                    <div>
                      <img src={royCleeves} alt="roy-cleeves" style={{ padding: 20, }} />
                    </div>
                    <div>
                      <img src={dentruGurgaon} alt="dentru-gurgaon"  style={{ padding: 20, }}/>
                    </div>
                    <div>
                      <img src={studio7rk} alt="studio-7rk" style={{ padding: 20, }} />
                    </div>
                    <div>
                      <img
                        src={propertyBuyersInLondonResult}
                        alt="propertyBuyersInLondonResult"
                        style={{ padding: 20, }}/>
                    </div>
                    <div>
                      <img
                        src={googleBusinessRankingPerformance}
                        alt="googleBusinessRankingPerformance"
                        style={{ padding: 20, }}   />
                    </div>
                    <div>
                      <img
                        src={shingleRoofingExpertsLosAngelesResult}
                        alt="shingle-roofing-experts-los-angeles-result"
                        style={{ padding: 20, }}  />
                    </div>
                    <div>
                      <img
                        src={progressiveAcServicesNorthHollywood}
                        alt="progressiveAcServicesNorthHollywood"
                       style={{ padding: 20, }}/>
                    </div>
                  </Slider>
                </div>

                <div class="shape-area">
                  {/* <img src={ball1} alt="sahpe" class="one"/> */}
                  <img src={ball11} alt="sahpe" class="two" />
                  <img src={ball2} alt="sahpe" class="three" />
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
                  Boost your ranking in local search results with our affordable
                  optimization services. Starting from just $350 per profile,
                  we'll work tirelessly to enhance your visibility and attract
                  more local customers. Our team of experts will analyze your
                  Google Business profile and implement proven strategies to
                  improve its performance.
                </p>
                <p className="disc">
                  With our optimization techniques, we'll optimize your
                  profile's information, images, and reviews to increase its
                  relevance and credibility in local search rankings. We'll also
                  focus on enhancing your online reputation through effective
                  review management and engagement with customers.
                </p>
                <p className="disc">
                  Invest in our cost-effective optimization services and watch
                  your business climb the ranks in local search results. Don't
                  miss out on valuable local customers – let us help you
                  maximize your online presence and drive more traffic to your
                  business.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 ">
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

      <div class="our-service-area rts-section-gapBottom pt--60 section-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div className="title-style-one-center">
                <h2 className="title skew-up" style={{ opacity: 1 }}>
                      How Our GMB & GBP Optimization Service Works
                </h2>
              </div>  
            </div>
          </div>
          <div class="row g-48 mt--10 ">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="rts-service-area-style-4">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.5 3H3.5V6H27.5V3ZM38.4672 35.8467L45.5 42.8793L43.3788 45.0004L36.3462 37.9677C33.927 39.8474 30.8822 40.7342 27.8319 40.4477C24.7817 40.1612 21.9553 38.7229 19.9284 36.4256C17.9014 34.1283 16.8263 31.1448 16.9219 28.0827C17.0175 25.0205 18.2767 22.1099 20.4431 19.9435C22.6094 17.7772 25.52 16.518 28.5822 16.4224C31.6444 16.3268 34.6279 17.4019 36.9252 19.4288C39.2225 21.4558 40.6608 24.2822 40.9473 27.3324C41.2338 30.3827 40.3469 33.4274 38.4672 35.8467ZM23.9999 35.9837C25.4799 36.9726 27.22 37.5004 29 37.5004C31.3861 37.4978 33.6738 36.5488 35.3611 34.8615C37.0483 33.1743 37.9974 30.8866 38 28.5004C38 26.7204 37.4721 24.9804 36.4832 23.5003C35.4943 22.0203 34.0887 20.8667 32.4441 20.1855C30.7996 19.5043 28.99 19.3261 27.2442 19.6734C25.4983 20.0206 23.8947 20.8778 22.636 22.1365C21.3774 23.3952 20.5202 24.9988 20.1729 26.7446C19.8256 28.4905 20.0039 30.3001 20.6851 31.9446C21.3663 33.5891 22.5198 34.9947 23.9999 35.9837ZM3.5 18H15.5V21H3.5V18ZM3.5 10.5H27.5V13.5H3.5V10.5Z"
                      fill="#614CE1"
                    />
                  </svg>
                </div>
                <h6 class="title">Step 1 : Local Citation Audit</h6>
                <p class="disc">
                  We conduct a thorough local citation audit to identify any
                  inconsistencies in your business information across online
                  directories.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="rts-service-area-style-4">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9997 7.81502C10.7599 7.81197 10.5269 7.73429 10.3332 7.59278C10.1394 7.45127 9.99459 7.25295 9.91873 7.02536C9.84286 6.79777 9.83975 6.55221 9.90982 6.32277C9.97989 6.09333 10.1197 5.8914 10.3097 5.74502C14.4485 2.81694 19.4329 1.32586 24.4997 1.50002C28.4897 1.50002 34.2197 2.17502 38.7497 5.43002C38.9975 5.60775 39.1649 5.87622 39.2155 6.17689C39.266 6.47755 39.1957 6.78602 39.0197 7.03502C38.837 7.28139 38.5649 7.44616 38.2619 7.49385C37.9589 7.54154 37.6493 7.46835 37.3997 7.29002C33.553 4.84533 29.0545 3.62655 24.4997 3.79502C19.9525 3.64054 15.478 4.96708 11.7497 7.57502C11.5375 7.74399 11.2707 7.82937 10.9997 7.81502ZM42.8447 18.39C42.6593 18.3883 42.4768 18.3426 42.3125 18.2565C42.1482 18.1704 42.0067 18.0465 41.8997 17.895C39.3047 14.235 34.6697 9.36003 24.4997 9.36003C21.1183 9.27488 17.7664 10.0078 14.7291 11.4964C11.6918 12.985 9.059 15.1853 7.05474 17.91C6.87475 18.1554 6.6052 18.3198 6.30467 18.3676C6.00414 18.4153 5.69691 18.3425 5.44974 18.165C5.32007 18.0748 5.21058 17.9586 5.1282 17.8238C5.04582 17.689 4.99236 17.5385 4.97121 17.382C4.95005 17.2254 4.96166 17.0662 5.00531 16.9144C5.04895 16.7625 5.12368 16.6214 5.22474 16.5C7.44676 13.4983 10.3575 11.0744 13.7119 9.43244C17.0663 7.79049 20.7661 6.97857 24.4997 7.06502C32.9147 7.06502 39.2147 10.185 43.7597 16.575C43.9342 16.8259 44.0021 17.1356 43.9487 17.4364C43.8953 17.7372 43.7249 18.0046 43.4747 18.18C43.289 18.3086 43.0705 18.3815 42.8447 18.39ZM18.2676 46.2974C18.46 46.4283 18.687 46.4989 18.9197 46.5001C19.0244 46.5121 19.1301 46.5121 19.2347 46.5001C26.7347 43.6351 31.2347 37.6651 31.2347 30.5551C31.2886 29.6479 31.1506 28.7396 30.8298 27.8893C30.5089 27.0391 30.0124 26.266 29.3726 25.6206C28.7329 24.9752 27.9642 24.4719 27.1168 24.1435C26.2694 23.8152 25.3624 23.6692 24.4547 23.7151C20.4497 23.7151 18.1547 26.0851 17.6147 30.7501C17.5659 31.2907 17.4104 31.8164 17.1573 32.2966C16.9042 32.7768 16.5585 33.2021 16.1401 33.548C15.7217 33.8939 15.2389 34.1535 14.7197 34.3117C14.2004 34.47 13.6549 34.5238 13.1147 34.4701C12.528 34.4776 11.9463 34.3607 11.4079 34.1271C10.8696 33.8935 10.3869 33.5485 9.99151 33.1149C9.59614 32.6813 9.2971 32.1688 9.11409 31.6112C8.93108 31.0537 8.86825 30.4637 8.92974 29.8801C8.96485 27.8721 9.39571 25.8908 10.1976 24.0496C10.9995 22.2084 12.1568 20.5435 13.6031 19.1502C15.0493 17.7568 16.7562 16.6625 18.6261 15.9298C20.4959 15.197 22.4919 14.8403 24.4997 14.8801C28.6492 14.8721 32.6326 16.5098 35.5766 19.4341C38.5205 22.3583 40.1849 26.3306 40.2047 30.4801C40.0965 33.5242 39.4516 36.5253 38.2997 39.3451C38.2408 39.4839 38.2099 39.6329 38.2089 39.7837C38.208 39.9345 38.2369 40.084 38.2941 40.2235C38.3513 40.363 38.4356 40.4898 38.5422 40.5965C38.6487 40.7032 38.7753 40.7877 38.9147 40.8451C39.1958 40.9561 39.5089 40.9541 39.7885 40.8395C40.0681 40.7249 40.2925 40.5065 40.4147 40.2301C41.6877 37.1311 42.3939 33.8287 42.4997 30.4801C42.472 25.7244 40.5633 21.173 37.1907 17.82C33.818 14.467 29.2555 12.585 24.4997 12.5851C19.8616 12.5329 15.3911 14.3173 12.0638 17.5491C8.73655 20.7808 6.82263 25.1974 6.73974 29.8351C6.67299 30.722 6.7917 31.6132 7.08832 32.4517C7.38493 33.2903 7.85295 34.0578 8.46255 34.7055C9.07216 35.3532 9.80998 35.8669 10.629 36.2137C11.4481 36.5606 12.3304 36.733 13.2197 36.7201C14.8735 36.8256 16.5038 36.286 17.7682 35.2147C19.0325 34.1434 19.8323 32.6238 19.9997 30.9751C20.3597 27.4501 21.7097 25.9501 24.4997 25.9501C25.1022 25.9053 25.7072 25.9909 26.2734 26.2012C26.8397 26.4115 27.354 26.7415 27.7812 27.1687C28.2083 27.5958 28.5383 28.1101 28.7486 28.6764C28.9589 29.2427 29.0446 29.8477 28.9997 30.4501C28.9997 36.5851 25.0547 41.7451 18.4997 44.2651C18.355 44.3163 18.2223 44.3967 18.1098 44.5011C17.9973 44.6056 17.9074 44.732 17.8456 44.8725C17.7838 45.013 17.7513 45.1647 17.7503 45.3182C17.7493 45.4717 17.7798 45.6238 17.8397 45.7651C17.9263 45.9811 18.0752 46.1664 18.2676 46.2974ZM30.1547 45.4201C29.8674 45.4154 29.5911 45.3091 29.3747 45.1201C29.2677 45.0141 29.1827 44.8879 29.1248 44.7489C29.0668 44.6098 29.0369 44.4607 29.0369 44.3101C29.0369 44.1594 29.0668 44.0103 29.1248 43.8713C29.1827 43.7322 29.2677 43.6061 29.3747 43.5001C32.7494 40.0019 34.6505 35.3405 34.6847 30.4801C34.6847 28.1401 33.9647 20.5051 24.6347 20.5051C23.2752 20.4572 21.9198 20.6806 20.6476 21.1622C19.3754 21.6438 18.2118 22.374 17.2247 23.3101C16.3416 24.1838 15.6434 25.2265 15.1718 26.3759C14.7002 27.5252 14.4648 28.7578 14.4797 30.0001C14.4758 30.3038 14.3524 30.5937 14.1362 30.8071C13.92 31.0205 13.6285 31.1401 13.3247 31.1401C13.1738 31.142 13.0239 31.114 12.8839 31.0576C12.7438 31.0012 12.6164 30.9176 12.5089 30.8115C12.4015 30.7055 12.3162 30.5791 12.2579 30.4398C12.1997 30.3005 12.1697 30.151 12.1697 30.0001C12.1464 28.4633 12.4287 26.9373 13.0004 25.5107C13.5721 24.0841 14.4216 22.7854 15.4997 21.6901C16.6948 20.543 18.1057 19.6448 19.6507 19.0474C21.1957 18.45 22.8439 18.1654 24.4997 18.2101C33.6197 18.2101 36.8597 24.8101 36.8597 30.4801C36.8401 35.8904 34.7464 41.0872 31.0097 45.0001C30.9066 45.1284 30.7766 45.2325 30.6289 45.305C30.4811 45.3776 30.3193 45.4169 30.1547 45.4201ZM11.1497 41.4751C11.9267 41.5632 12.7078 41.6082 13.4897 41.6101C16.4295 41.7424 19.3194 40.8164 21.6347 39.0001C22.8416 37.9411 23.8204 36.6476 24.5115 35.1984C25.2026 33.7491 25.5915 32.1744 25.6547 30.5701C25.6673 30.2671 25.5617 29.971 25.3602 29.7444C25.1587 29.5177 24.8771 29.3781 24.5747 29.3551C24.4233 29.3407 24.2706 29.3572 24.1258 29.4035C23.9809 29.4498 23.847 29.525 23.732 29.6245C23.617 29.7241 23.5234 29.8459 23.4569 29.9826C23.3903 30.1194 23.3522 30.2682 23.3447 30.4201C23.3006 31.7087 22.996 32.975 22.4495 34.1427C21.903 35.3105 21.1258 36.3556 20.1647 37.2151C18.0797 38.9551 15.1397 39.6151 11.4047 39.1951C11.255 39.1783 11.1035 39.1912 10.9588 39.2331C10.8141 39.2749 10.679 39.3448 10.5613 39.4388C10.4436 39.5328 10.3456 39.6491 10.2728 39.781C10.2 39.9129 10.154 40.0579 10.1372 40.2076C10.1205 40.3573 10.1334 40.5088 10.1752 40.6535C10.217 40.7983 10.287 40.9333 10.381 41.051C10.475 41.1687 10.5913 41.2668 10.7232 41.3395C10.8551 41.4123 11 41.4583 11.1497 41.4751Z"
                      fill="#614CE1"
                    />
                  </svg>
                </div>
                <h6 class="title">Step 2 : Find In-consistent NAP</h6>
                <p class="disc">
                  Our team diligently finds and rectifies any inconsistent Name,
                  Address, and Phone (NAP) details to ensure accurate and
                  consistent listings.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="rts-service-area-style-4">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.11 45L24.5 43.5L30.5 33H39.5C40.2957 33 41.0587 32.6839 41.6213 32.1213C42.1839 31.5587 42.5 30.7956 42.5 30V12C42.5 11.2044 42.1839 10.4413 41.6213 9.87868C41.0587 9.31607 40.2957 9 39.5 9H9.5C8.70435 9 7.94129 9.31607 7.37868 9.87868C6.81607 10.4413 6.5 11.2044 6.5 12V30C6.5 30.7956 6.81607 31.5587 7.37868 32.1213C7.94129 32.6839 8.70435 33 9.5 33H23V36H9.5C7.9087 36 6.38258 35.3679 5.25736 34.2426C4.13214 33.1174 3.5 31.5913 3.5 30V12C3.5 10.4087 4.13214 8.88258 5.25736 7.75736C6.38258 6.63214 7.9087 6 9.5 6H39.5C41.0913 6 42.6174 6.63214 43.7426 7.75736C44.8679 8.88258 45.5 10.4087 45.5 12V30C45.5 31.5913 44.8679 33.1174 43.7426 34.2426C42.6174 35.3679 41.0913 36 39.5 36H32.24L27.11 45ZM36.5 15H12.5V18H36.5V15ZM12.5 24H27.5V27H12.5V24Z"
                      fill="#614CE1"
                    />
                  </svg>
                </div>
                <h6 class="title">Step 3 : Competitors Citation</h6>
                <p class="disc">
                  We analyze your competitors' citations to identify
                  opportunities for improvement and stay ahead in local search
                  results.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="rts-service-area-style-4">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      d="M44.6222 32.4998L35.12 22.9959L44.6206 13.4949C45.1834 12.9327 45.4998 12.1699 45.5003 11.3744C45.5008 10.5789 45.1852 9.81571 44.6231 9.25278L44.6206 9.24979L39.2506 3.87979C38.6883 3.31689 37.9254 3.00042 37.1297 3C36.3341 2.99958 35.5709 3.31524 35.008 3.87753L35.0054 3.87979L25.505 13.3793L16.0028 3.87603C15.4394 3.31503 14.6767 3.00013 13.8816 3.00027C13.0865 3.00041 12.3239 3.31558 11.7607 3.87678L4.37813 11.2596C3.81584 11.8225 3.5 12.5855 3.5 13.3811C3.5 14.1767 3.81584 14.9397 4.37813 15.5025L13.8788 25.0043L3.50003 35.3826V45.0002H13.1159L23.4944 34.6211L32.9975 44.1257C33.5616 44.6858 34.3244 45.0002 35.1194 45.0002C35.9143 45.0002 36.6771 44.6858 37.2412 44.1257L44.6222 36.7422C45.1844 36.1794 45.5001 35.4165 45.5001 34.621C45.5001 33.8255 45.1844 33.0626 44.6222 32.4998V32.4998ZM37.12 5.99479L42.505 11.3798L33.005 20.8802L27.62 15.4952L37.12 5.99479ZM12.5 42.0002H6.50003V36.6131L15.9937 27.1202L21.5092 32.6369L12.5 42.0002ZM35.12 42.0054L6.50003 13.3821L13.8829 6.00018L19.565 11.6814L16.187 15.0602L18.31 17.1813L21.686 13.8033L27.8801 19.9974L24.5 23.3753L26.624 25.4964L30.0016 22.1184L36.1966 28.3134L32.819 31.6899L34.9402 33.8124L38.3176 30.4352L42.5036 34.6217L35.12 42.0054Z"
                      fill="#614CE1"
                    />
                  </svg>
                </div>
                <h6 class="title">Step 4 : Prepare Citation List</h6>
                <p class="disc">
                  Our experts prepare a comprehensive citation list, ensuring
                  your business is listed accurately on relevant directories and
                  platforms.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="rts-service-area-style-4">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.5 6H42.5C43.2957 6 44.0587 6.31607 44.6213 6.87868C45.1839 7.44129 45.5 8.20435 45.5 9V30C45.5 30.7956 45.1839 31.5587 44.6213 32.1213C44.0587 32.6839 43.2957 33 42.5 33H27.5V39H35V42H21.5V39H24.5V33H21.5V30H42.5V9H9.5V18H6.5V9C6.5 8.20435 6.81607 7.44129 7.37868 6.87868C7.94129 6.31607 8.70435 6 9.5 6ZM6.5 45H15.5C16.2956 45 17.0587 44.6839 17.6213 44.1213C18.1839 43.5587 18.5 42.7957 18.5 42V24C18.5 23.2044 18.1839 22.4413 17.6213 21.8787C17.0587 21.3161 16.2956 21 15.5 21H6.5C5.70435 21 4.94129 21.3161 4.37868 21.8787C3.81607 22.4413 3.5 23.2044 3.5 24V42C3.5 42.7957 3.81607 43.5587 4.37868 44.1213C4.94129 44.6839 5.70435 45 6.5 45ZM6.5 42V24H15.5V42H6.5Z"
                      fill="#614CE1"
                    />
                  </svg>
                </div>
                <h6 class="title">Step 5 : Rich Media Citation</h6>
                <p class="disc">
                  We enhance your online presence with rich media citations,
                  including images and videos, to make your business stand out
                  from the competition.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="rts-service-area-style-4">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="48"
                    viewBox="0 0 49 48"
                    fill="none"
                  >
                    <path
                      d="M38.5915 35.9999C39.4874 33.8492 39.7276 31.4815 39.2817 29.1947C38.8358 26.9079 37.7238 24.8039 36.0854 23.1473C36.5363 22.0116 36.6219 20.7635 36.3303 19.5768C36.0388 18.3902 35.3846 17.3239 34.4588 16.5263L38.6227 12.3625C39.1844 11.7994 39.4999 11.0364 39.4999 10.241C39.4999 9.4456 39.1844 8.68267 38.6227 8.11956L34.3804 3.87726C33.8173 3.31534 33.0544 2.99976 32.2589 2.99976C31.4634 2.99976 30.7005 3.31534 30.1375 3.87726L10.3788 23.6359C9.81715 24.199 9.50171 24.9619 9.50171 25.7573C9.50171 26.5527 9.81715 27.3156 10.3788 27.8788L14.6211 32.1211C15.1842 32.6829 15.9472 32.9984 16.7426 32.9984C17.538 32.9984 18.301 32.6829 18.864 32.1211L26.0264 24.958C27.042 26.1331 28.48 26.8604 30.0285 26.9819C31.5769 27.1033 33.1108 26.6093 34.2972 25.6069C35.5303 27.0177 36.2876 28.7811 36.4615 30.6468C36.6355 32.5124 36.2173 34.3855 35.2662 35.9999H24.5V41.9999H6.5V44.9999H42.5V35.9999H38.5915ZM16.7422 29.9999L12.5 25.757L15.3181 22.9394L19.5605 27.1816L16.7422 29.9999ZM24.5 20.9999C24.5022 21.3789 24.5405 21.7568 24.6143 22.1285L21.6817 25.0604L17.439 20.8183L32.2591 5.99826L36.5015 10.2406L31.6283 15.1142C30.7604 14.9417 29.8649 14.9645 29.0069 15.1809C28.1488 15.3973 27.3496 15.8018 26.6673 16.3652C25.9849 16.9287 25.4364 17.6368 25.0616 18.4384C24.6867 19.2401 24.4949 20.115 24.5 20.9999V20.9999ZM30.5 23.9999C29.9067 23.9999 29.3266 23.824 28.8333 23.4943C28.3399 23.1647 27.9554 22.6961 27.7284 22.148C27.5013 21.5998 27.4419 20.9966 27.5576 20.4146C27.6734 19.8327 27.9591 19.2982 28.3787 18.8786C28.7982 18.459 29.3328 18.1733 29.9147 18.0576C30.4967 17.9418 31.0999 18.0012 31.6481 18.2283C32.1962 18.4553 32.6648 18.8399 32.9944 19.3332C33.3241 19.8265 33.5 20.4066 33.5 20.9999C33.4991 21.7953 33.1827 22.5578 32.6203 23.1202C32.0579 23.6826 31.2954 23.999 30.5 23.9999V23.9999ZM39.5 41.9999H27.5V38.9999H39.5V41.9999Z"
                      fill="#614CE1"
                    />
                  </svg>
                </div>
                <h6 class="title">Step 6 : White Label Report</h6>
                <p class="disc">
                  You'll receive a detailed white-label report outlining the
                  work done, improvements made, and the overall impact of our
                  Google My Business Optimization service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="providing-service-area-start-seven gradient-7-radious rts-section-gap">
        <div class="container">
          <div class="row g-6 align-items-center mt--20">
            <div class="col-lg-4 pr--50 pr_md--0 pr_sm--0">
              <div class="image-area-service-1 area-3">
                <a href="#" class="thumbnail-service-1">
                  <img
                    src={websigoogleMyBusinessRankingServiceteRankNo1}
                    alt="White Hat SEO Process"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-8 order-change">
              <div className="portfolio-content-wrapper-list white-text">
                <h3 className="title split-collab" style={{ opacity: 1 }}>
                  Google Business Profile Ranking Service
                </h3>
                <p className="disc" style={{ color: "white" }}>
                  Elevate your Google My Business listing ranking with our
                  specialized service. Our team of experts understands the
                  significance of securing a top position in search results, and
                  we're here to help you achieve that. With our proven
                  strategies and in-depth knowledge of Google's algorithms,
                  we'll optimize your listing to enhance its visibility, attract
                  organic traffic, and outshine your competitors.
                </p>
                <p className="disc" style={{ color: "white" }}>
                  Our comprehensive approach includes optimizing your business
                  information, selecting relevant categories, managing reviews,
                  implementing targeted keywords, and creating engaging content.
                  By leveraging our Google My Business listing ranking service,
                  you'll gain a competitive advantage, increase your online
                  presence, and attract more customers to your business. Don't
                  miss out on the opportunity to dominate local search results
                  and experience substantial growth - entrust your Google My
                  Business listing ranking to our expert team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-product-area">
        <div className="container">
          <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
            <div className="col-lg-8 col-md-6 pr--50 pr_md--0 pr_sm--0">
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
                  Take advantage of our GMB Local Citation Building Service to
                  strengthen your online presence. We understand the importance
                  of accurate and consistent business information across various
                  online directories and platforms. Our expert team will
                  meticulously build relevant citations to establish your
                  business as a trusted and authoritative entity in your
                  industry.
                </p>
                <p className="disc">
                  Through our service, we'll conduct thorough research to
                  identify authoritative directories and platforms that are
                  relevant to your business. We'll ensure your business
                  information, including Name, Address, and Phone (NAP) details,
                  is listed accurately and consistently across these platforms.
                  By leveraging our GMB Local Citation Building Service, you'll
                  not only improve your local search rankings but also enhance
                  your online reputation. Increased visibility, credibility, and
                  customer trust await you as we build a robust network of
                  citations for your business. Don't underestimate the power of
                  accurate citations - let us help you establish a strong online
                  presence that drives more customers to your door.
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

      <div class="rts-working-porcess-area-two ptb--45 bg-dark-border-radious-sd">
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
                        01. Is your Phone Number not displaying ?
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        If your phone number is not displaying on your Google My
                        Business listing, there could be a few reasons for this
                        issue. First, ensure that you have entered the correct
                        phone number in your business information. Check for any
                        typos or errors. Additionally, make sure that you have
                        selected the option to display your phone number on your
                        listing. If you have done these steps correctly and the
                        issue persists, it would be beneficial to reach out to
                        Google My Business support for further assistance. They
                        can help troubleshoot the problem and provide guidance
                        on how to get your phone number to display correctly on
                        your listing.
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
                        02. How to claim your Business?
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        Claiming your business on Google My Business is a
                        straightforward process. Start by visiting the Google My
                        Business website and signing in using your Google
                        account. Once logged in, click on the "Manage now"
                        button. From there, you can enter your business name and
                        address. If your business is already listed, select it
                        from the options provided. If not, click on "Add your
                        business" and provide the necessary details. Next, you
                        will need to choose a verification method, such as
                        phone, email, or postcard, to confirm that you are the
                        rightful owner of the business. Follow the verification
                        steps, and once your business is verified, you will gain
                        access to manage and optimize your listing effectively.{" "}
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
                        03. Do you want to change your Location?
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        If you need to change the location of your business on
                        your Google My Business listing, you can do so by
                        following a few simple steps. Sign in to your Google My
                        Business account and select the listing you wish to
                        modify. Go to the "Info" tab and scroll down to the
                        "Address" section. Click on the pencil icon next to the
                        address and make the necessary changes to update your
                        location information. Ensure that the new address is
                        accurate and complete. After making the changes, save
                        them, and Google will review and verify the modified
                        address. It's important to note that changing your
                        location may require additional verification steps to
                        confirm the new address.{" "}
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
                        04. What to do if your Business Listing is not
                        Optimized?
                      </button>
                    </div>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExamples"
                    >
                      <div class="accordion-body">
                        If your business listing on Google My Business is not
                        optimized, you may be missing out on valuable
                        opportunities to attract customers. To optimize your
                        listing, start by ensuring that all your business
                        information, such as the name, address, phone number,
                        and website URL, is accurate and up-to-date. Select the
                        appropriate business categories that best represent your
                        products or services. Enhance your listing by adding
                        high-quality images and videos that showcase your
                        business visually. Encourage satisfied customers to
                        leave positive reviews, and make sure to respond to
                        those reviews promptly. Utilize the "Posts" feature to
                        share updates, promotions, and events with your
                        audience. Regularly monitor and update your listing with
                        relevant information to keep it fresh and engaging. If
                        you feel overwhelmed or would like professional
                        assistance, consider reaching out to Google My Business
                        optimization services. They can provide expert guidance
                        and help you maximize the potential of your business
                        listing to attract more customers.{" "}
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
