import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
 import logo1 from '../assets/images/logo/it2-logo.svg';

 import logo3 from '../assets/images/logo/logo-one-dark.svg';



const Home = () => {
    return (
        <>
    
 
  {/* rts subs cribe section end */}
  {/* rts footer area start */}
  <div className="rts-footer-area-one pt--80 pb--80">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* footer top area */}
          <div className="footer-top-area">
            <div className="logo-area">
              <a href="#">
                <img
                  className="light"
                  src={logo1}
                  alt="logo"
                />
                <img
                  className="dark"
                  src={logo3}
                  alt="logo"
                />
              </a>
           

            </div>
            
            <ul className="social-area-one">
              
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
            </ul>
          </div>
          {/* footer top area end */}
        </div>
        <div class="footer-input-main-wrapper-one">
              <h6 className="title">Zammy Zaif</h6>
                            <p class="disc">Zammy Zaif featured by Google as a Google Ranking Expert Globally, is dedicated to helping every client achieve first rank, with a focus that extends beyond traditional first-page SEO services.</p>
                            <div class="button-area">
                                <a href="contact.html" class="rts-btn btn-primary"><i class="fa-light fa-paper-plane"></i>More about us</a>
                                
                            </div>
                        </div>
      </div>
      <div className="row g-48 g-lg-0 pt--40">
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <div className="single-footer-wized-one">
            <h6 className="title">Solutions</h6>
            <ul>
              <li>
                <a href="#">Content Marketing</a>
              </li>
              <li>
                <a href="#">Consumer Insights</a>
              </li>
              <li>
                <a href="#">SEO Content Strategy</a>
              </li>
              <li>
                <a href="#">Keyword Research</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <div className="single-footer-wized-one">
            <h6 className="title">Resources</h6>
            <ul>
              <li>
                <a href="#">Insights</a>
              </li>
              <li>
                <a href="#">Keyword Generator</a>
              </li>
              <li>
                <a href="#">Research Tool</a>
              </li>
              <li>
                <a href="#">News &amp; Events</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <div className="single-footer-wized-one">
            <h6 className="title">Company</h6>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12">
          <div className="single-footer-wized-one">
            <h6 className="title">Other links</h6>
            <ul>
              <li>
                <a href="#">Content Marketing</a>
              </li>
              <li>
                <a href="#">Consumer Insights</a>
              </li>
              <li>
                <a href="#">SEO Content Strategy</a>
              </li>
              <li>
                <a href="#">Keyword Research</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          {/* footer input wrapper inbner-main area */}
          <div className="footer-input-main-wrapper-one">
            <div className="single-footer-wized-one">
              <h6 className="title">Newsletter</h6>
              <form action="#">
                <input type="email" placeholder="Email address.." required="" />
                <i className="fa-regular fa-envelope" />
                <button className="rts-btn btn-primary">Subscribe now</button>
              </form>
            </div>
          </div>
          {/* footer input wrapper inbner-main area end */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* copyright area start */}
          <div className="copyright-area-start">
            <p>Copyright ©2024 All Rights Reserved by Bams Technologies Pvt Ltd.</p>
            <ul>
              <li>
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="terms.html">Terms of service</a>
              </li>
            </ul>
          </div>
          {/* copyright area end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts footer area end */}
  <div id="anywhere-home" className=""></div>
  {/* side bar area  */}
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="fa-sharp fa-thin fa-xmark" />
    </button>
    {/* mobile menu area start */}
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="has-droupdown">
            <a href="#" className="main">
              Home
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="index.html">
                  SEO Marketing
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-two.html">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-three.html">
                  Digital Agency
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-four.html">
                  Startup Agency
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Advertising Agency
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-six.html">
                  Web Design Agency
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-seven.html">
                  Social Media Agency
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-eight.html">
                  SEO Agency
                </a>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Pages
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="about.html">
                  About
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="team.html">
                  Our Team
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="faq.html">
                  FAQ's
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="book-a-demo.html">
                  Book a Demo
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="free-audit.html">
                  Free Audit
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing.html">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="404.html">
                  404 Page
                </a>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Services
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="service.html">
                  Services
                </a>
              </li>
              <li className="has-droupdown third-lvl">
                <a className="main" href="#">
                  Service Details
                </a>
                <ul className="submenu-third-lvl mm-collapse">
                  <li>
                    <a href="service-details.html" />
                    Paid Search Marketing
                  </li>
                  <li>
                    <a href="email-marketing.html" />
                    Email Marketing
                  </li>
                  <li>
                    <a href="social-media-marketing.html" />
                    Social Media Marketing
                  </li>
                  <li>
                    <a href="influencer-marketing.html" />
                    Influencer Marketing
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Work
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="case-studies.html">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="single-case-studies.html">
                  Case Studies Details
                </a>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">
              Blog
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-left-sidebar.html">
                  Blog Left Sidebar
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-grid.html">
                  Blog Grid
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-grid-2.html">
                  Blog Grid Right Sidebar
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-grid-3.html">
                  Blog Grid Left Sidebar
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-details.html">
                  Blog Details
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html" className="main">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <ul className="social-area-one pl--20 mt--100">
        <li>
          <a href="#">
            <i className="fa-brands fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-x-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-youtube" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-brands fa-facebook-f" />
          </a>
        </li>
      </ul>
    </div>
    {/* mobile menu area end */}
  </div>
  {/* side abr area end */}
  {/* pre loader start */}
  {/* <div className="loader-wrapper">
    <div className="loader"></div>
    <div className="loader-section section-left" />
    <div className="loader-section section-right" />
  </div> */}
  {/* pre loader end */}
  {/* THEME MODE SWITCHER */}
  <div className="rts-switcher rts-theme-mode">
    <div className="rts-darkmode">
      <a id="rts-data-toggle" className="rts-dark-light">
        <i className="rts-go-dark fal fa-moon" />
        <i className="rts-go-light fa-light fa-sun-bright" />
      </a>
    </div>
  </div>
  {/* THEME MODE SWITCHER END */}
  {/* progress area start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>

</>

   

  );
};

export default Home;