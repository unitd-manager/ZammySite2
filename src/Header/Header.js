import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../assets/images/logo/it2-logo.svg'



const Header = () => {
    return (
  
        <>

  {/* header area start */}
  <header className="header-style-one header--sticky">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-style-one-wrapper">
            <div className="logo-area">
              <a href="/" className="logo">
                <img
                  className="light"
                  src={logo1}
                  alt="logo"
                />
              </a>
            </div>
            <nav className="main-nav-area">
              <ul className="list-unstyled fluxi-desktop-menu">
                <li className="menu-item fluxi-has-dropdown">
                <Link to="/" className="fluxi-dropdown-main-element">
                   Home
                </Link>
                
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                <Link to="/About" className="fluxi-dropdown-main-element">
                   About
                </Link>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                   Optimization
                  </a>
                  {/* Start Dropdown Menu */}
                  <ul className="fluxi-submenu list-unstyled menu-home">
                    <li className="nav-item sub-dropdown">
                      <a href="#" className="nav-link sub-menu-link">
                      Ranking Optimization
                      </a>
                      <ul className="fluxi-submenu third-lvl base">
                        <li>
                          <Link
                            
                            to ="/website-seo-ranking-services"
                            className="mobile-menu-link"
                          >
                            Website Ranking Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="mobile-menu-link"
                            to="/gmb-ranking-services"
                          >
                            GMB or GBP Ranking Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item sub-dropdown">
                      <a href="#" className="nav-link sub-menu-link">
                      Search Engine Optimization
                      </a>
                      <ul className="fluxi-submenu third-lvl base">
                        <li>
                          <Link
                            className="mobile-menu-link"
                            to="/google-ranking-services"
                          >
                            Google Ranking SEO Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#/Service" className="fluxi-dropdown-main-element">
                    Services
                  </a>
                  {/* Start Dropdown Menu */}
                  {/* <ul className="fluxi-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <a className="nav-link page" href="case-studies.html">
                        Case Studies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="single-case-studies.html">
                        Case Studies Details
                      </a>
                    </li>
                  </ul> */}
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                    Updates
                  </a>
                
                </li>
                <li className="menu-item fluxi-has-dropdown">
                <Link to="/Contact" className="fluxi-dropdown-main-element">
                  Contact
                </Link>
                </li>
              </ul>
            </nav>
            <div className="button-area-start">
              {/* <a className="call-us" href="tel:+91 9344 618 144">
                Call Us:+91 9344 618 144

              </a> */}
              <a href="free-audit.html" className="rts-btn btn-primary">
               Get in Touch
              </a>
              <div className="menu-btn" id="menu-btn">
                <svg
                  width={20}
                  height={16}
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y={14} width={20} height={2} fill="#1F1F25" />
                  <rect y={7} width={20} height={2} fill="#1F1F25" />
                  <rect width={20} height={2} fill="#1F1F25" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  {/* progress area end */}
  {/* jquery js */}
  {/* contact form js */}
</>

     

  );
};

export default Header;