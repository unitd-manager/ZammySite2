import React from 'react';

const SeoTabs = () => {
  return (
    <section style={{ paddingTop: 100 }} className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="starter-template">
              {/* Navigation Tabs */}
              <ul className="nav nav-tabs" id="seoTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link custom-nav-link active"
                    id="google-map-seo-tab"
                    data-toggle="tab"
                    href="#google-map-seo"
                    role="tab"
                    aria-controls="google-map-seo"
                    aria-selected="true"
                  >
                    <i className="fa fa-map"></i> Google Map SEO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link custom-nav-link"
                    id="city-based-seo-tab"
                    data-toggle="tab"
                    href="#city-based-seo"
                    role="tab"
                    aria-controls="city-based-seo"
                    aria-selected="false"
                  >
                    <i className="fa fa-city"></i> City Based SEO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link custom-nav-link"
                    id="state-level-seo-tab"
                    data-toggle="tab"
                    href="#state-level-seo"
                    role="tab"
                    aria-controls="state-level-seo"
                    aria-selected="false"
                  >
                    <i className="fa fa-map-signs"></i> State Level SEO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link custom-nav-link"
                    id="country-level-seo-tab"
                    data-toggle="tab"
                    href="#country-level-seo"
                    role="tab"
                    aria-controls="country-level-seo"
                    aria-selected="false"
                  >
                    <i className="fa fa-globe"></i> Country Level SEO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link custom-nav-link"
                    id="global-seo-tab"
                    data-toggle="tab"
                    href="#global-seo"
                    role="tab"
                    aria-controls="global-seo"
                    aria-selected="false"
                  >
                    <i className="fa fa-universal-access"></i> Global SEO
                  </a>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content pt-4" id="seoTabContent">
                {/* Google Map SEO Tab */}
                <div
                  className="tab-pane fade show active"
                  id="google-map-seo"
                  role="tabpanel"
                  aria-labelledby="google-map-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mb-3">
                      <h3>Local SEO Ranking</h3>
                      <p>
                        Maximize your reach with our GBP Local SEO services. According to recent reports, GBP is the most popular platform, responsible for driving 80% of local targeted traffic to neighborhood businesses. Specializing in optimizing your Google Business Profile with GPS settings, we assure your business ranks high in local searches. Our targeted GBP Local SEO strategies focus on building your local brand by driving traffic and attracting new customers to your physical location or service area. With proven expertise, we help you stand out in local search results, generating more convertible leads for increasing revenue.
                      </p>
                      <a href="#" className="btn btn-blueaqua custom-button">Book an SEO Consultation</a>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-center border-0 shadow">
                        <div className="card-body">
                          <div className="p-3 custom-bg text-white">
                            <h5 className="card-title text-white mb-0">GBP Local SEO</h5>
                          </div>
                          <ul className="list-unstyled mt-3 text-start">
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 45 Days Timeframe
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 5-15 Miles of Area Radius
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 5 Major Category Keywords
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 5 Business Related Keywords
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 1 Google Business Profile
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> Website Ranking
                            </li>
                          </ul>
                          <div className="price mt-3 p-3 border rounded shadow-sm bg-light">
                            <span className="text-muted">Starts from: </span>
                            <strong>$750</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* City Based SEO Tab */}
                <div
                  className="tab-pane fade"
                  id="city-based-seo"
                  role="tabpanel"
                  aria-labelledby="city-based-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mb-3">
                      <h3>City Based SEO Rankings</h3>
                      <p>
                        Our City Based SEO Ranking service is designed to deliver results within a 3-6 month timeframe, focusing on a specific city or district. We restructure your website according to Google's latest guidelines and create original, plagiarism-free content customized for your business. By the end of the third month, you will start seeing results on the first page of search engines. We aim to achieve 1st Rank for 25 keywords and 1st page Rank for 75 keywords. During this 6 month period, we will also manage and optimize one Google Business Profile and build 300 high-quality, white-hat backlinks.
                      </p>
                      <a href="#" className="btn btn-blueaqua custom-button">Book an SEO Consultation</a>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-center border-0 shadow">
                        <div className="card-body">
                          <div className="p-3 custom-bg">
                            <h5 className="card-title text-white mb-0">City Based SEO</h5>
                          </div>
                          <ul className="list-unstyled mt-3 text-start">
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i>3-6 Months Timeframe
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i>A Particular City or District
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i>1st Rank for 25 Keywords
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i>1st page Rank for 75 Keywords
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i>1 Google Business Profile
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i>300 HQ White Hat Backlinks
                            </li>
                          </ul>
                          <div className="price mt-3 p-3 border rounded shadow-sm bg-light">
                            <span className="text-muted">Starts from: </span>
                            <strong>$999</strong> <span className="text-muted">/month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* State Level SEO Tab */}
                <div
                  className="tab-pane fade"
                  id="state-level-seo"
                  role="tabpanel"
                  aria-labelledby="state-level-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mb-3">
                      <h3>State Ranking SEO</h3>
                      <p>
                        Our State Level SEO Ranking service is designed to deliver results within a 6-9 month timeframe. Understanding the project requirements, we initially focus on optimizing your website for your specific city by redesigning it according to the Google's guidelines. By updating original content which includes service-oriented keywords to promote your local business, we will help your website rank for 25 keywords. As part of the SEO strategy, we will also manage one Google Business Profile and build 300 quality backlinks.
                      </p>
                      <a href="#" className="btn btn-blueaqua custom-button">Book an SEO Consultation</a>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-center border-0 shadow">
                        <div className="card-body">
                          <div className="p-3 custom-bg">
                            <h5 className="card-title text-white mb-0">State Level SEO</h5>
                          </div>
                          <ul className="list-unstyled mt-3 text-start">
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 6-9 Months Timeframe
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> Rank for 25 Keywords
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> State Level SEO Implementation
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 300 Quality White Hat Backlinks
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 1 Google Business Profile
                            </li>
                          </ul>
                          <div className="price mt-3 p-3 border rounded shadow-sm bg-light">
                            <span className="text-muted">Starts from: </span>
                            <strong>$1499</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Country Level SEO Tab */}
                <div
                  className="tab-pane fade"
                  id="country-level-seo"
                  role="tabpanel"
                  aria-labelledby="country-level-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mb-3">
                      <h3>Country Level SEO</h3>
                      <p>
                        Focused on national coverage, the Country Level SEO plan is designed to get your business noticed across an entire country. By optimizing for national keywords and local listings, we work on getting you top rankings across different states and territories. We aim to provide full national optimization within 12-18 months. Our service includes 1 Google Business Profile, 600 high-quality backlinks, and thorough on-page and off-page optimizations.
                      </p>
                      <a href="#" className="btn btn-blueaqua custom-button">Book an SEO Consultation</a>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-center border-0 shadow">
                        <div className="card-body">
                          <div className="p-3 custom-bg">
                            <h5 className="card-title text-white mb-0">Country Level SEO</h5>
                          </div>
                          <ul className="list-unstyled mt-3 text-start">
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 12-18 Months Timeframe
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> National Level Optimization
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 600 White Hat Backlinks
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 1 Google Business Profile
                            </li>
                          </ul>
                          <div className="price mt-3 p-3 border rounded shadow-sm bg-light">
                            <span className="text-muted">Starts from: </span>
                            <strong>$2499</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global SEO Tab */}
                <div
                  className="tab-pane fade"
                  id="global-seo"
                  role="tabpanel"
                  aria-labelledby="global-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-8 mb-3">
                      <h3>Global SEO</h3>
                      <p>
                        The Global SEO package targets international audiences, aiming to position your business at the top of global search rankings. We focus on multiple international markets by localizing content for various regions and optimizing for international search engines. This service includes global keywords, backlinks, and optimization strategies across multiple countries.
                      </p>
                      <a href="#" className="btn btn-blueaqua custom-button">Book an SEO Consultation</a>
                    </div>
                    <div className="col-lg-4">
                      <div className="card text-center border-0 shadow">
                        <div className="card-body">
                          <div className="p-3 custom-bg">
                            <h5 className="card-title text-white mb-0">Global SEO</h5>
                          </div>
                          <ul className="list-unstyled mt-3 text-start">
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> 12-24 Months Timeframe
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> Global Optimization
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> Multiple Global Backlinks
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <i className="fa fa-star custom-star star-spacing"></i> International Keywords Strategy
                            </li>
                          </ul>
                          <div className="price mt-3 p-3 border rounded shadow-sm bg-light">
                            <span className="text-muted">Starts from: </span>
                            <strong>$4999</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoTabs;
