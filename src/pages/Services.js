import React from 'react'

function Services() {
  return (
    <div>
  {/* header area start */}
  <header className="header-style-one header--sticky">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-style-one-wrapper">
            <div className="logo-area">
              <a href="index.html" className="logo">
                <img
                  className="light"
                  src="assets/images/logo/logo-1.svg"
                  alt="logo"
                />
                <img
                  className="dark"
                  src="assets/images/logo/logo-one-dark.svg"
                  alt="logo"
                />
              </a>
            </div>
            <nav className="main-nav-area">
              <ul className="list-unstyled fluxi-desktop-menu">
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                    Home
                  </a>
                  {/* Start Dropdown Menu */}
                  <ul className="fluxi-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <a className="nav-link page" href="index.html">
                        SEO Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-two.html">
                        Digital Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-three.html">
                        Digital Agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-four.html">
                        Startup Agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-five.html">
                        Advertising agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-six.html">
                        Web Design Agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-seven.html">
                        Social Media agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="index-eight.html">
                        SEO Agency
                      </a>
                    </li>
                  </ul>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                    Pages
                  </a>
                  {/* Start Dropdown Menu */}
                  <ul className="fluxi-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <a className="nav-link page" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page" href="team.html">
                        Our Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page" href="faq.html">
                        FAQ's
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="book-a-demo.html">
                        Book a Demo
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="free-audit.html">
                        Free Audit
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pricing.html">
                        Pricing Plans
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="404.html">
                        404 Page
                      </a>
                    </li>
                  </ul>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                    Services
                  </a>
                  {/* Start Dropdown Menu */}
                  <ul className="fluxi-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <a className="nav-link page" href="service.html">
                        Service
                      </a>
                    </li>
                    <li className="nav-item sub-dropdown">
                      <a href="#" className="nav-link sub-menu-link">
                        Service Details
                      </a>
                      <ul className="fluxi-submenu third-lvl base">
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="service-single.html"
                          >
                            Paid Search Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="email-marketing.html"
                          >
                            Email Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="social-media-marketing.html"
                          >
                            Social Media Marketing
                          </a>
                        </li>
                        <li>
                          <a
                            className="mobile-menu-link"
                            href="influencer-marketing.html"
                          >
                            Influencer Marketing
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                    Work
                  </a>
                  {/* Start Dropdown Menu */}
                  <ul className="fluxi-submenu list-unstyled menu-home">
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
                  </ul>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item fluxi-has-dropdown">
                  <a href="#" className="fluxi-dropdown-main-element">
                    Blog
                  </a>
                  {/* Start Dropdown Menu */}
                  <ul className="fluxi-submenu list-unstyled menu-home">
                    <li className="nav-item">
                      <a className="nav-link page" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog-left-sidebar.html">
                        Blog Left Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog-grid-2.html">
                        Blog Grid Right Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog-grid-3.html">
                        Blog Grid Left Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog-details.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                  {/* End Dropdown Menu */}
                </li>
                <li className="menu-item">
                  <a
                    className="main-element fluxi-dropdown-main-element"
                    href="contact.html"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="button-area-start">
              <a className="call-us" href="tel:123-456-7890">
                Call Us : +134 (99) 865
              </a>
              <a href="free-audit.html" className="rts-btn btn-primary">
                Free Audit
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
  {/* header area end */}
  {/* rts service banner area start */}
  <div className="rts-service-banner-area rts-section-gap inner">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-service-page-area-top text-center pt--160">
            <h1 className="title split-collab">
              Customized solutions to <br /> <span>your business</span>
            </h1>
            <p className="disc">
              Welcome to Fluxi! as a motivational speaker, we are passionate
              about helping individuals to unlock their true potential.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row g-48 mt--40">
        <div className="col-lg-4 col-sm-6">
          {/* single-service- */}
          <div className="service-page-service-style">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.24998 6.51219C9.05008 6.50965 8.85594 6.44492 8.6945 6.32699C8.53307 6.20907 8.41236 6.0438 8.34914 5.85414C8.28592 5.66448 8.28333 5.45985 8.34172 5.26865C8.40011 5.07745 8.51659 4.90917 8.67498 4.78719C12.124 2.34712 16.2776 1.10455 20.5 1.24969C23.825 1.24969 28.6 1.81219 32.375 4.52469C32.5814 4.6728 32.7209 4.89653 32.7631 5.14708C32.8052 5.39764 32.7466 5.65469 32.6 5.86219C32.4477 6.0675 32.2209 6.20481 31.9685 6.24455C31.716 6.2843 31.458 6.2233 31.25 6.07469C28.0444 4.03745 24.2956 3.0218 20.5 3.16219C16.7106 3.03345 12.9819 4.1389 9.87498 6.31219C9.69809 6.453 9.47576 6.52415 9.24998 6.51219ZM35.7875 15.3247C35.6329 15.3233 35.4809 15.2851 35.344 15.2134C35.2071 15.1417 35.0891 15.0385 35 14.9122C32.8375 11.8622 28.975 7.7997 20.5 7.7997C17.6821 7.72874 14.8889 8.3395 12.3578 9.58001C9.82668 10.8205 7.6327 12.6541 5.96248 14.9247C5.81249 15.1292 5.58787 15.2662 5.33743 15.306C5.08699 15.3458 4.83096 15.2851 4.62499 15.1372C4.51693 15.062 4.42569 14.9652 4.35704 14.8528C4.28839 14.7405 4.24384 14.6151 4.22621 14.4847C4.20858 14.3542 4.21826 14.2215 4.25463 14.095C4.291 13.9685 4.35327 13.8509 4.43749 13.7497C6.28917 11.2482 8.71479 9.22833 11.5101 7.86004C14.3054 6.49175 17.3886 5.81515 20.5 5.8872C27.5125 5.8872 32.7625 8.4872 36.55 13.8122C36.6953 14.0212 36.752 14.2793 36.7074 14.53C36.6629 14.7807 36.5209 15.0035 36.3125 15.1497C36.1577 15.2569 35.9756 15.3176 35.7875 15.3247ZM15.3065 38.5808C15.4669 38.6899 15.6561 38.7487 15.85 38.7498C15.9372 38.7598 16.0253 38.7598 16.1125 38.7498C22.3625 36.3623 26.1125 31.3873 26.1125 25.4623C26.1574 24.7063 26.0424 23.9493 25.775 23.2408C25.5076 22.5322 25.0939 21.888 24.5607 21.3502C24.0276 20.8123 23.3871 20.3929 22.6809 20.1193C21.9747 19.8457 21.2188 19.724 20.4625 19.7623C17.125 19.7623 15.2125 21.7373 14.7625 25.6248C14.7218 26.0753 14.5922 26.5133 14.3813 26.9135C14.1704 27.3137 13.8823 27.6681 13.5336 27.9564C13.1849 28.2446 12.7826 28.4609 12.3499 28.5928C11.9172 28.7247 11.4626 28.7695 11.0125 28.7248C10.5235 28.731 10.0388 28.6336 9.59016 28.4389C9.14155 28.2442 8.73927 27.9568 8.40979 27.5954C8.08032 27.2341 7.83112 26.807 7.67861 26.3424C7.52611 25.8777 7.47375 25.3861 7.52498 24.8998C7.55425 23.2265 7.91329 21.5754 8.58156 20.041C9.24982 18.5067 10.2142 17.1193 11.4194 15.9581C12.6246 14.797 14.0471 13.8851 15.6053 13.2745C17.1634 12.6639 18.8268 12.3666 20.5 12.3998C23.9579 12.3931 27.2774 13.7578 29.7307 16.1947C32.184 18.6316 33.5709 21.9419 33.5875 25.3998C33.4973 27.9365 32.9599 30.4374 32 32.7873C31.9508 32.9029 31.9251 33.0271 31.9243 33.1528C31.9235 33.2784 31.9476 33.403 31.9953 33.5192C32.043 33.6355 32.1132 33.7411 32.202 33.8301C32.2908 33.919 32.3963 33.9894 32.5125 34.0373C32.7467 34.1298 33.0076 34.1281 33.2406 34.0326C33.4736 33.9371 33.6606 33.7551 33.7625 33.5248C34.8232 30.9422 35.4117 28.1902 35.5 25.3998C35.4769 21.4367 33.8863 17.6438 31.0758 14.8497C28.2652 12.0555 24.4631 10.4872 20.5 10.4873C16.6349 10.4437 12.9095 11.9308 10.1367 14.6239C7.36399 17.317 5.76906 20.9975 5.69998 24.8623C5.64436 25.6014 5.74329 26.344 5.99047 27.0428C6.23765 27.7416 6.62766 28.3812 7.13567 28.921C7.64367 29.4607 8.25852 29.8887 8.94106 30.1778C9.62359 30.4668 10.3588 30.6105 11.1 30.5998C12.4781 30.6877 13.8367 30.238 14.8903 29.3453C15.9439 28.4525 16.6105 27.1862 16.75 25.8123C17.05 22.8748 18.175 21.6248 20.5 21.6248C21.002 21.5874 21.5062 21.6588 21.9781 21.834C22.45 22.0093 22.8785 22.2843 23.2345 22.6402C23.5905 22.9962 23.8654 23.4248 24.0407 23.8967C24.2159 24.3686 24.2873 24.8727 24.25 25.3748C24.25 30.4873 20.9625 34.7873 15.5 36.8873C15.3794 36.93 15.2688 36.9969 15.1751 37.084C15.0813 37.171 15.0064 37.2763 14.9549 37.3934C14.9033 37.5105 14.8763 37.6369 14.8755 37.7648C14.8747 37.8928 14.9 38.0195 14.95 38.1373C15.0221 38.3173 15.1462 38.4717 15.3065 38.5808ZM25.2125 37.8497C24.9731 37.8459 24.7428 37.7573 24.5625 37.5997C24.4733 37.5114 24.4025 37.4063 24.3542 37.2904C24.3058 37.1745 24.281 37.0503 24.281 36.9247C24.281 36.7992 24.3058 36.6749 24.3542 36.5591C24.4025 36.4432 24.4733 36.3381 24.5625 36.2497C27.3747 33.3346 28.959 29.4501 28.9875 25.3997C28.9875 23.4497 28.3875 17.0872 20.6125 17.0872C19.4796 17.0474 18.3501 17.2335 17.2899 17.6349C16.2297 18.0362 15.26 18.6447 14.4375 19.4247C13.7015 20.1529 13.1197 21.0218 12.7267 21.9796C12.3337 22.9374 12.1376 23.9645 12.15 24.9997C12.1467 25.2528 12.0438 25.4944 11.8637 25.6722C11.6835 25.8501 11.4406 25.9497 11.1875 25.9497C11.0617 25.9514 10.9368 25.928 10.8201 25.881C10.7034 25.834 10.5972 25.7643 10.5076 25.6759C10.4181 25.5876 10.347 25.4823 10.2985 25.3662C10.25 25.2501 10.225 25.1255 10.225 24.9997C10.2055 23.7191 10.4408 22.4474 10.9172 21.2586C11.3936 20.0698 12.1016 18.9875 13 18.0747C13.9959 17.1189 15.1717 16.3703 16.4591 15.8725C17.7466 15.3747 19.1201 15.1375 20.5 15.1747C28.1 15.1747 30.8 20.6747 30.8 25.3997C30.7836 29.9084 29.0388 34.2391 25.925 37.4997C25.8391 37.6066 25.7307 37.6934 25.6076 37.7539C25.4845 37.8143 25.3496 37.8471 25.2125 37.8497ZM9.37499 34.5622C10.0224 34.6357 10.6734 34.6732 11.325 34.6747C13.7748 34.785 16.183 34.0134 18.1125 32.4997C19.1182 31.6173 19.9338 30.5394 20.5097 29.3317C21.0857 28.124 21.4098 26.8117 21.4625 25.4747C21.4729 25.2222 21.3849 24.9755 21.217 24.7867C21.0491 24.5978 20.8145 24.4815 20.5625 24.4622C20.4363 24.4503 20.309 24.464 20.1883 24.5026C20.0676 24.5412 19.956 24.6038 19.8602 24.6868C19.7644 24.7697 19.6864 24.8713 19.6309 24.9852C19.5755 25.0992 19.5437 25.2232 19.5375 25.3497C19.5007 26.4236 19.2469 27.4788 18.7915 28.452C18.3361 29.4251 17.6884 30.296 16.8875 31.0122C15.15 32.4622 12.7 33.0122 9.58749 32.6622C9.46273 32.6483 9.33645 32.659 9.21585 32.6939C9.09525 32.7287 8.9827 32.787 8.88462 32.8654C8.78653 32.9437 8.70484 33.0406 8.64421 33.1505C8.58358 33.2604 8.54519 33.3812 8.53124 33.506C8.51728 33.6307 8.52804 33.757 8.56289 33.8776C8.59774 33.9982 8.65601 34.1108 8.73435 34.2089C8.8127 34.3069 8.9096 34.3886 9.01952 34.4493C9.12944 34.5099 9.25023 34.5483 9.37499 34.5622Z"
                  fill="#614CE1"
                />
              </svg>
            </div>
            <h6 className="title">Strategy Branding</h6>
            <p className="disc">
              Get organic traffic and high rankings with multi-team
              collaboration that will help you optimize on-page and off-page
              SEO.
            </p>
            <a href="#" className="learn-more-btn-underline">
              Learn more <i className="fa-light fa-arrow-right" />
            </a>
          </div>
          {/* single-service-end */}
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* single-service- */}
          <div className="service-page-service-style">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
              >
                <path
                  d="M25.5 7.5C23.7785 7.49913 22.0757 7.85672 20.5 8.55C18.9243 7.85672 17.2215 7.49913 15.5 7.5C12.1848 7.5 9.00537 8.81696 6.66117 11.1612C4.31696 13.5054 3 16.6848 3 20C3 23.3152 4.31696 26.4946 6.66117 28.8388C9.00537 31.183 12.1848 32.5 15.5 32.5C17.2215 32.5009 18.9243 32.1433 20.5 31.45C22.0757 32.1433 23.7785 32.5009 25.5 32.5C28.8152 32.5 31.9946 31.183 34.3388 28.8388C36.683 26.4946 38 23.3152 38 20C38 16.6848 36.683 13.5054 34.3388 11.1612C31.9946 8.81696 28.8152 7.5 25.5 7.5V7.5ZM15.5 30C12.8478 30 10.3043 28.9464 8.42893 27.0711C6.55357 25.1957 5.5 22.6522 5.5 20C5.5 17.3478 6.55357 14.8043 8.42893 12.9289C10.3043 11.0536 12.8478 10 15.5 10C16.2404 10.0007 16.9783 10.0846 17.7 10.25C16.2401 11.4213 15.0618 12.9054 14.2522 14.593C13.4426 16.2805 13.0222 18.1283 13.0222 20C13.0222 21.8717 13.4426 23.7195 14.2522 25.407C15.0618 27.0946 16.2401 28.5787 17.7 29.75C16.9783 29.9154 16.2404 29.9993 15.5 30ZM25.5 20C25.4982 21.7536 25.0353 23.476 24.1577 24.9942C23.2801 26.5124 22.0187 27.7732 20.5 28.65C18.9846 27.771 17.7267 26.5092 16.8524 24.9911C15.978 23.4731 15.5177 21.7519 15.5177 20C15.5177 18.2481 15.978 16.527 16.8524 15.0089C17.7267 13.4908 18.9846 12.2291 20.5 11.35C22.0187 12.2268 23.2801 13.4876 24.1577 15.0058C25.0353 16.5241 25.4982 18.2464 25.5 20ZM25.5 30C24.7596 29.9993 24.0217 29.9154 23.3 29.75C24.7599 28.5787 25.9382 27.0946 26.7478 25.407C27.5574 23.7195 27.9778 21.8717 27.9778 20C27.9778 18.1283 27.5574 16.2805 26.7478 14.593C25.9382 12.9054 24.7599 11.4213 23.3 10.25C24.0217 10.0846 24.7596 10.0007 25.5 10C28.1522 10 30.6957 11.0536 32.5711 12.9289C34.4464 14.8043 35.5 17.3478 35.5 20C35.5 22.6522 34.4464 25.1957 32.5711 27.0711C30.6957 28.9464 28.1522 30 25.5 30Z"
                  fill="white"
                />
              </svg>
            </div>
            <h6 className="title">Digital Interactions</h6>
            <p className="disc">
              Building the site map with places to house in mind means
              implementing your SEO landing pages.
            </p>
            <a href="#" className="learn-more-btn-underline">
              Learn more <i className="fa-light fa-arrow-right" />
            </a>
          </div>
          {/* single-service-end */}
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* single-service- */}
          <div className="service-page-service-style">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={41}
                height={40}
                viewBox="0 0 41 40"
                fill="none"
              >
                <path
                  d="M29.25 28.7503H29.0856L30.29 26.9437C30.4269 26.7384 30.4999 26.4971 30.5 26.2503V15.001C30.5 2.64373 20.6 2.50098 20.5 2.50098C20.1686 2.50098 19.8507 2.63259 19.6163 2.86687C19.3819 3.10116 19.2502 3.41894 19.25 3.75035L19.2494 6.25035H18C17.7395 6.25013 17.4855 6.33167 17.2737 6.48348L8.52374 12.7335C8.30617 12.8888 8.14414 13.1098 8.06144 13.3641C7.97873 13.6183 7.97972 13.8923 8.06424 14.146L9.31424 17.896C9.4064 18.1739 9.59342 18.4105 9.84253 18.5644C10.0916 18.7183 10.387 18.7796 10.6767 18.7376L16.7642 17.8679L11.9399 25.5878C11.8123 25.7919 11.7464 26.0284 11.75 26.2689C11.7535 26.5095 11.8265 26.7439 11.96 26.9441L13.1644 28.7503H13C12.0058 28.7514 11.0526 29.1469 10.3495 29.8499C9.64652 30.5529 9.25109 31.5061 9.24999 32.5003V37.5003H33V32.5003C32.9989 31.5061 32.6035 30.5529 31.9004 29.8499C31.1974 29.1469 30.2442 28.7514 29.25 28.7503V28.7503ZM20.3101 16.9129C20.4364 16.7108 20.5024 16.4769 20.5002 16.2386C20.498 16.0003 20.4277 15.7676 20.2977 15.568C20.1676 15.3683 19.9832 15.21 19.7662 15.1116C19.5491 15.0133 19.3085 14.979 19.0726 15.0129L11.3554 16.1152L10.7272 14.2305L18.4 8.75098H20.4987C20.8302 8.75098 21.148 8.61937 21.3824 8.38508C21.6168 8.1508 21.7486 7.83301 21.7487 7.5016L21.75 5.16148C23.6266 5.57985 27.0209 7.08785 27.825 12.5004H24.25V15.0004H28V17.5004H24.25V20.0004H28V22.5003H24.25V25.0003H28V25.872L26.081 28.7503H16.1685L14.4875 26.2284L20.3101 16.9129ZM30.5 35.0003H11.75V32.5003C11.7503 32.1689 11.8821 31.8511 12.1164 31.6168C12.3508 31.3824 12.6686 31.2506 13 31.2503H29.25C29.5815 31.2505 29.8993 31.3823 30.1337 31.6167C30.368 31.8511 30.4998 32.1689 30.5 32.5003V35.0003Z"
                  fill="white"
                />
              </svg>
            </div>
            <h6 className="title">Service Innovation</h6>
            <p className="disc">
              Optimizing your website for each of the main components to put a
              good and fit in house strategy in place.
            </p>
            <a href="#" className="learn-more-btn-underline">
              Learn more <i className="fa-light fa-arrow-right" />
            </a>
          </div>
          {/* single-service-end */}
        </div>
      </div>
    </div>
    {/* banner shape service */}
    <div className="service-banner-area">
      <img
        src="assets/images/service/shape/01.png"
        alt="service"
        className="one"
      />
      <img
        src="assets/images/service/shape/02.png"
        alt="service"
        className="two"
      />
      <img
        src="assets/images/service/shape/03.png"
        alt="service"
        className="three"
      />
      <img
        src="assets/images/service/shape/04.png"
        alt="service"
        className="four"
      />
    </div>
    {/* banner shape service end */}
  </div>
  {/* rts service banner area end */}
  {/* rts service area start */}
  <div className="rts-product-area">
    <div className="container">
      <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list  pt--125 pb--125">
        <div className="col-lg-6 col-md-6">
          <a href="#" className="thumbnail">
            <img
              src="assets/images/product/43.jpg"
              width={505}
              height={616}
              alt="product"
            />
          </a>
        </div>
        <div className="col-lg-5 col-md-6 offset-lg-1">
          <div className="portfolio-content-wrapper-list">
            <h3 className="pre-title">01.</h3>
            <h2 className="title">
              Corporate and <br />
              strategy branding
            </h2>
            <p className="disc">
              For over four decades, Tenet Partners has applied our proven
              methodology to deliver compelling corporate brands for hundreds of
              organizations.
            </p>
            <div className="product-service-wrapper">
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Market research</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Brand strategy</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Name, tagline and messaging</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Logo and identity design</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Graphic and Illustration</p>
              </div>
              {/* single service end */}
            </div>
          </div>
        </div>
        <div className="service--shape">
          <img
            src="assets/images/service/shape/04.png"
            alt="service"
            className="one"
          />
          <img
            src="assets/images/service/shape/06.png"
            alt="service"
            className="two"
          />
        </div>
      </div>
      <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list  pt--125 pb--125">
        <div className="col-lg-5 col-md-6">
          <div className="portfolio-content-wrapper-list">
            <h3 className="pre-title">02.</h3>
            <h2 className="title">
              Digital interactions <br />
              and experiences
            </h2>
            <p className="disc">
              For over four decades, Tenet Partners has applied our proven
              methodology to deliver compelling corporate brands for hundreds of
              organizations.
            </p>
            <div className="product-service-wrapper">
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Market research</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Brand strategy</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Name, tagline and messaging</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Logo and identity design</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Graphic and Illustration</p>
              </div>
              {/* single service end */}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 offset-lg-1">
          <a href="#" className="thumbnail">
            <img
              src="assets/images/product/44.jpg"
              width={505}
              height={616}
              alt="product"
            />
          </a>
        </div>
        <div className="service--shape">
          <img
            src="assets/images/service/shape/04.png"
            alt="service"
            className="three"
          />
          <img
            src="assets/images/service/shape/06.png"
            alt="service"
            className="four"
          />
        </div>
      </div>
      <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list  pt--125 pb--125">
        <div className="col-lg-6 col-md-6">
          <a href="#" className="thumbnail">
            <img
              src="assets/images/product/45.jpg"
              width={505}
              height={616}
              alt="product"
            />
          </a>
        </div>
        <div className="col-lg-5 col-md-6 offset-lg-1">
          <div className="portfolio-content-wrapper-list">
            <h3 className="pre-title">03.</h3>
            <h2 className="title">
              Data science and <br />
              service Innovation
            </h2>
            <p className="disc">
              For over four decades, Tenet Partners has applied our proven
              methodology to deliver compelling corporate brands for hundreds of
              organizations.
            </p>
            <div className="product-service-wrapper">
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Market research</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Brand strategy</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Name, tagline and messaging</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Logo and identity design</p>
              </div>
              {/* single service end */}
              {/* single service */}
              <div className="single-service">
                <i className="fa-light fa-check" />
                <p>Graphic and Illustration</p>
              </div>
              {/* single service end */}
            </div>
          </div>
        </div>
        <div className="service--shape">
          <img
            src="assets/images/service/shape/04.png"
            alt="service"
            className="five"
          />
          <img
            src="assets/images/service/shape/06.png"
            alt="service"
            className="six"
          />
        </div>
      </div>
    </div>
  </div>
  {/* rts service area end */}
  {/* rts-case studies-area start */}
  <div className="rts-case-studies-4 rts-section-gap2 bg-dark-border-radious radious-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-wrapper-between">
            <div className="title-style-one-left">
              <span className="pre skew-up">Our featured and recent works</span>
              <h2 className="title skew-up">Case Studies</h2>
            </div>
            {/* button-area next prev area */}
            <div className="next-prev-btn-area"></div>
            {/* button-area next prev end */}
          </div>
        </div>
      </div>
      <div className="row mt--60">
        <div className="col-lg-12">
          <div className="float-right-div-case-studies">
            <div className="swiper mySwiper-case-4">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="siongle-portfolio-box-style style-four">
                    <a href="single-case-studies.html" className="thumbnail">
                      <img src="assets/images/product/08.png" alt="product" />
                    </a>
                    <div className="inner-content">
                      <div className="left-content">
                        <span className="pre">Website, B2B, SaaS, 3D</span>
                        <a href="single-case-studies.html">
                          <h3 className="title animated fadeIn">Cornerstone</h3>
                        </a>
                      </div>
                      <div className="right">
                        <a href="single-case-studies.html">
                          <i className="fa-regular fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="siongle-portfolio-box-style style-four">
                    <a href="single-case-studies.html" className="thumbnail">
                      <img src="assets/images/product/09.png" alt="product" />
                    </a>
                    <div className="inner-content">
                      <div className="left-content">
                        <span className="pre">Branding, Website</span>
                        <a href="single-case-studies.html">
                          <h3 className="title animated fadeIn">Simplifi</h3>
                        </a>
                      </div>
                      <div className="right">
                        <a href="single-case-studies.html">
                          <i className="fa-regular fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="siongle-portfolio-box-style style-four">
                    <a href="single-case-studies.html" className="thumbnail">
                      <img src="assets/images/product/10.png" alt="product" />
                    </a>
                    <div className="inner-content">
                      <div className="left-content">
                        <span className="pre">Website, B2B, Illustrations</span>
                        <a href="single-case-studies.html">
                          <h3 className="title animated fadeIn">Discover</h3>
                        </a>
                      </div>
                      <div className="right">
                        <a href="single-case-studies.html">
                          <i className="fa-regular fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* swiper slider main wrapper area start */}
          <div className="swiper-slider-main-wrapper"></div>
          {/* swiper slider main wrapper area ends */}
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img src="assets/images/product/shape/01.png" alt="" className="one" />
      <img src="assets/images/product/shape/02.png" alt="" className="two" />
      <img src="assets/images/product/shape/03.png" alt="" className="three" />
      <img src="assets/images/product/shape/04.png" alt="" className="four" />
    </div>
  </div>
  {/* rts-case studies-area end */}
  {/* rts pricing area srart */}
  <div className="rtws-pricing-area-start-two rts-section-gap bg-light-border-radious">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-style-one-center">
            <span className="pre skew-up">A little about us</span>
            <h2 className="title skew-up">
              Unleashing the power of <br /> SEO tactics
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-48 mt--0 justify-content-sm-center justify-content-md-start">
        <div className="col-lg-4 col-md-6 col-sm-10">
          {/* single pricing area start */}
          <div className="single-pricing-area-two free-place">
            <div className="head-pricing">
              <span className="plane_name">Free plan</span>
              <div className="doller-area">
                <h2 className="title">$0</h2>
                <span className="time">/ per month</span>
              </div>
              <p>Grow your business with ease.</p>
            </div>
            <div className="body">
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Social media advertising</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Report analytics</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Keyword research</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Content strategy</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Premium consulting</p>
              </div>
            </div>
            <div className="footer">
              <a href="#" className="rts-btn btn-primary-2">
                Sign up now
              </a>
              <p>No credit card required.</p>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          {/* single pricing area start */}
          <div className="single-pricing-area-two professional-place">
            <div className="head-pricing">
              <span className="plane_name">Professional</span>
              <div className="doller-area">
                <h2 className="title">$99</h2>
                <span className="time">/ per month</span>
              </div>
              <p>Grow your business with ease.</p>
            </div>
            <div className="body">
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Social media advertising</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Report analytics</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Keyword research</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Content strategy</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Premium consulting</p>
              </div>
            </div>
            <div className="footer">
              <a href="#" className="rts-btn btn-primary-2">
                Try for Free
              </a>
              <p>$999 billed annually. Save $189.</p>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          {/* single pricing area start */}
          <div className="single-pricing-area-two enterprise-place">
            <div className="head-pricing">
              <span className="plane_name">Enterprise</span>
              <div className="doller-area">
                <h2 className="title">$149</h2>
                <span className="time">/ per month</span>
              </div>
              <p>Grow your business with ease.</p>
            </div>
            <div className="body">
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Social media advertising</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Report analytics</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Keyword research</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Content strategy</p>
              </div>
              <div className="single-check">
                <i className="fa-regular fa-check" />
                <p>Premium consulting</p>
              </div>
            </div>
            <div className="footer">
              <a href="#" className="rts-btn btn-primary-2">
                Let’s talk
              </a>
              <p>$999 billed annually. Save $189.</p>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="button-text-bottom-area-pricing text-center">
            <p>Prices exclude any applicable taxes.</p>
            <a
              href="pricing.html"
              className="rts-btn btn-primary-4-border arrow-rotate"
            >
              Compare all features <i className="fa-light fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img
        src="assets/images/testimonials/shape/12.png"
        alt="shape"
        className="one"
      />
      <img
        src="assets/images/testimonials/shape/13.png"
        alt="shape"
        className="two"
      />
      <img
        src="assets/images/testimonials/shape/14.png"
        alt="shape"
        className="three"
      />
    </div>
  </div>
  {/* rts pricing area end */}
  {/* rts faq section area start */}
  <div className="rts-faq-area-full-container style-three pt--160 pb--80">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="faq-area-start">
            <div className="title-style-one-center">
              <span className="pre skew-up">Our FAQ</span>
              <h2 className="title skew-up">Frequently asked questions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt--20">
        <div className="col-lg-12">
          <div className="accordion-faq-area-border-bottom-style">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What are your core services as a UX design and branding
                    firm?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="disc">
                      However, our passion for branding and the demand from our
                      clients led us to expand our offering to provide
                      full-service brand design practice and web design and
                      development of marketing websites.
                    </p>
                    <p className="disc">
                      Today, our projects encompass a wide range, from building
                      new products and defining brands to revitalizing existing
                      mobile apps, websites, and enterprise software. We
                      specialize in crafting digital products that
                      wholeheartedly embody the brand's personality and deliver
                      delightful experiences to your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do you work with clients in different timezones?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="disc">
                      However, our passion for branding and the demand from our
                      clients led us to expand our offering to provide
                      full-service brand design practice and web design and
                      development of marketing websites.
                    </p>
                    <p className="disc">
                      Today, our projects encompass a wide range, from building
                      new products and defining brands to revitalizing existing
                      mobile apps, websites, and enterprise software. We
                      specialize in crafting digital products that
                      wholeheartedly embody the brand's personality and deliver
                      delightful experiences to your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What separates you from other branding and web design
                    agencies?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="disc">
                      However, our passion for branding and the demand from our
                      clients led us to expand our offering to provide
                      full-service brand design practice and web design and
                      development of marketing websites.
                    </p>
                    <p className="disc">
                      Today, our projects encompass a wide range, from building
                      new products and defining brands to revitalizing existing
                      mobile apps, websites, and enterprise software. We
                      specialize in crafting digital products that
                      wholeheartedly embody the brand's personality and deliver
                      delightful experiences to your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How much does hiring you for a design project cost?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="disc">
                      However, our passion for branding and the demand from our
                      clients led us to expand our offering to provide
                      full-service brand design practice and web design and
                      development of marketing websites.
                    </p>
                    <p className="disc">
                      Today, our projects encompass a wide range, from building
                      new products and defining brands to revitalizing existing
                      mobile apps, websites, and enterprise software. We
                      specialize in crafting digital products that
                      wholeheartedly embody the brand's personality and deliver
                      delightful experiences to your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do you work with startups?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="disc">
                      However, our passion for branding and the demand from our
                      clients led us to expand our offering to provide
                      full-service brand design practice and web design and
                      development of marketing websites.
                    </p>
                    <p className="disc">
                      Today, our projects encompass a wide range, from building
                      new products and defining brands to revitalizing existing
                      mobile apps, websites, and enterprise software. We
                      specialize in crafting digital products that
                      wholeheartedly embody the brand's personality and deliver
                      delightful experiences to your customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Can you help us redesign our B2B/enterprise software?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="disc">
                      However, our passion for branding and the demand from our
                      clients led us to expand our offering to provide
                      full-service brand design practice and web design and
                      development of marketing websites.
                    </p>
                    <p className="disc">
                      Today, our projects encompass a wide range, from building
                      new products and defining brands to revitalizing existing
                      mobile apps, websites, and enterprise software. We
                      specialize in crafting digital products that
                      wholeheartedly embody the brand's personality and deliver
                      delightful experiences to your customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img src="assets/images/faq/shape/01.png" alt="sahpe" className="one" />
      <img src="assets/images/faq/shape/02.png" alt="sahpe" className="two" />
      <img src="assets/images/faq/shape/03.png" alt="sahpe" className="three" />
      <img src="assets/images/faq/shape/04.png" alt="sahpe" className="four" />
    </div>
  </div>
  {/* rts faq section area end */}
  <div className="rts-section-gap rts-blog-area-one style-seven about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-style-one-center">
            <h2 className="title skew-up">Recent articles from blog</h2>
          </div>
        </div>
      </div>
      <div className="row g-48 justify-content-md-start justify-content-sm-center mt--0">
        <div className="col-lg-4 col-md-6 col-sm-10">
          {/* single blog area start */}
          <div className="single-blog-area-style-one eight-area text-center">
            <a href="blog-details.html" className="thumbnail">
              <img src="assets/images/blog/01.png" alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <div className="bottom-area mb--25">
                <span className="admin">Amir Nisi</span>
                <span className="date">• 25 October, 2023</span>
              </div>
              <a href="blog-details.html">
                <h6 className="title mb--20">
                  Which tool seems the best for content writing strategy?
                </h6>
              </a>
              <a href="blog-details.html" className="btn-readmore-inner">
                Read more
              </a>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          {/* single blog area start */}
          <div className="single-blog-area-style-one eight-area">
            <a href="blog-details.html" className="thumbnail">
              <img src="assets/images/blog/02.png" alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <div className="bottom-area mb--25">
                <span className="admin">Amir Nisi</span>
                <span className="date">• 25 October, 2023</span>
              </div>
              <a href="blog-details.html">
                <h6 className="title mb--20">
                  Getting eyeballs on what you write for a business is tricky
                </h6>
              </a>
              <a href="blog-details.html" className="btn-readmore-inner">
                Read more
              </a>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          {/* single blog area start */}
          <div className="single-blog-area-style-one eight-area">
            <a href="blog-details.html" className="thumbnail">
              <img src="assets/images/blog/03.png" alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <div className="bottom-area mb--25">
                <span className="admin">Amir Nisi</span>
                <span className="date">• 25 October, 2023</span>
              </div>
              <a href="blog-details.html">
                <h6 className="title mb--20">
                  More than just buzzwords for marketing concepts of SEO
                </h6>
              </a>
              <a href="blog-details.html" className="btn-readmore-inner">
                Read more
              </a>
            </div>
          </div>
          {/* single blog area end */}
        </div>
      </div>
      <div className="row">
        <div className="blog-btn-area mt--50">
          <a
            href="blog.html"
            className="rts-btn btn-primary-4-border arrow-rotate inner m-auto"
          >
            See More Posts <i className="fa-light fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img
        src="assets/images/blog/shape/01.png"
        alt="marketing"
        className="one"
      />
      <img
        src="assets/images/blog/shape/02.png"
        alt="marketing"
        className="two"
      />
      <img
        src="assets/images/blog/shape/03.png"
        alt="marketing"
        className="three"
      />
    </div>
  </div>
  {/* subscription area start */}
  <div className="rts-subscribe-area-one about rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="subscribe-main-wrapper-one">
            <div className="title-style-one-center">
              <h2 className="title skew-up">
                Let's maximize your <br />
                online impact!
              </h2>
              <p className="disc">
                More than just buzzwords for marketing concepts of SEO.
              </p>
              <div className="btn-area d-flex align-items-center justify-content-center">
                <a href="#" className="rts-btn btn-primary">
                  Get in touch
                </a>
                <a href="#" className="under-line-btn">
                  Request a demo
                </a>
              </div>
            </div>
            <div className="shape-area">
              <img
                className="one"
                src="assets/images/subscribtion/shape/01.png"
                alt="subscribtion"
              />
              <img
                className="two"
                src="assets/images/subscribtion/shape/02.png"
                alt="subscribtion"
              />
              <img
                className="three"
                src="assets/images/subscribtion/shape/03.png"
                alt="subscribtion"
              />
              <img
                className="four"
                src="assets/images/subscribtion/shape/04.png"
                alt="subscribtion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* subscription area end */}
  <div className="rts-footer-area footer-four rts-section-gap">
    <div className="container mb--65">
      <div className="row g-48">
        <div className="row g-48">
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
                  <input
                    type="email"
                    placeholder="Email address.."
                    required=""
                  />
                  <i className="fa-regular fa-envelope" />
                  <button className="rts-btn btn-primary">Subscribe now</button>
                </form>
              </div>
            </div>
            {/* footer input wrapper inbner-main area end */}
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="copyright-area-four pt--65 mt-65 border-top">
            <a href="#" className="logo">
              <img
                className="light"
                src="assets/images/logo/logo-1.svg"
                alt="logo"
              />
              <img
                className="dark"
                src="assets/images/logo/logo-one-dark.svg"
                alt="logo"
              />
            </a>
            <p>© 2023 Fluxi, All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  <div className="loader-wrapper">
    <div className="loader"></div>
    <div className="loader-section section-left" />
    <div className="loader-section section-right" />
  </div>
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
  {/* progress area end */}
  {/* jquery js */}
  {/* contact form js */}



    </div>
  )
}

export default Services