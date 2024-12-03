import React,{ useState } from 'react';

const SeoTabs = () => {

  const [activeTab, setActiveTab] = useState("1");

  const tabs = [
    { id: "1", label: "Google Map SEO", icon: "fa fa-map" },
    { id: "2", label: "City Based SEO", icon: "fa fa-city" },
    { id: "3", label: "State Level SEO", icon: "fa fa-map-signs" },
    { id: "4", label: "Country Level SEO", icon: "fa fa-globe" },
    { id: "5", label: "Global SEO", icon: "fa fa-universal-access" },
  ];


  return (
<>

<section style={{ paddingTop: 80 }} className="section section-bg pb--80">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a
                  className={`nav-link custom-nav-link ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  // href={`#${tab.label.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <i className={tab.icon}></i> {tab.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content pt-4">
            {activeTab === "1" && (
              <div className="tab-pane active">
                <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>Local SEO Ranking</h3>
                      <p className="disc">
                        Maximize your reach with our GBP Local SEO services. According to recent reports, GBP is the most popular platform, responsible for driving 80% of local targeted traffic to neighborhood businesses. Specializing in optimizing your Google Business Profile with GPS settings, we assure your business ranks high in local searches. Our targeted GBP Local SEO strategies focus on building your local brand by driving traffic and attracting new customers to your physical location or service area. With proven expertise, we help you stand out in local search results, generating more convertible leads for increasing revenue.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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
            )}
            {activeTab === "2" && (
              <div className="tab-pane active">
                  <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>City Based SEO Rankings</h3>
                      <p className="disc">
                        Our City Based SEO Ranking service is designed to deliver results within a 3-6 month timeframe, focusing on a specific city or district. We restructure your website according to Google's latest guidelines and create original, plagiarism-free content customized for your business. By the end of the third month, you will start seeing results on the first page of search engines. We aim to achieve 1st Rank for 25 keywords and 1st page Rank for 75 keywords. During this 6 month period, we will also manage and optimize one Google Business Profile and build 300 high-quality, white-hat backlinks.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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
            )}
            {activeTab === "3" && (
              <div className="tab-pane active">
                 <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>State Ranking SEO</h3>
                      <p className="disc">
                      Our State Level SEO Ranking service is designed to deliver results within a 6-9 month timeframe. Understanding the project requirements, we initially focus on optimizing your website for your specific city by redesigning it according to the Google's guidelines. By updating original content which includes service-oriented keywords to promote your business organically. By the end of the 3rd month, you will begin to see your website appearing on the first page of search results. Within 6 months, we assure achieving the 1st rank for 25 keywords and 1st-page rankings for 75 keywords at the city level. In the following 3 months, we target an additional 25 major keywords for 1st Rank and 25 keywords for 1st-page rankings at the state level. Our services also include managing and optimizing up to 5 Google Business Profiles and creating 500 high-quality white-hat backlinks within this 9-month period.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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
            )}
            {activeTab === "4" && (
              <div className="tab-pane active">
                 <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>National Seo Ranking</h3>
                      <p className="disc">
                      We offer a 9-12 month national SEO ranking service. Starting the process by concentrating on your local area to establish a solid foundation. Your website will be redesigned to meet Google's standards and filled with original, informative content. Demonstrating our expertise, you will see initial improvements in local search rankings within first 3 months. In six months, we will aim to rank your business first for 25 local keywords and on the first page for 75 keywords. Over the next six months, we will expand our efforts to achieve top rankings for 25 keywords at the state level and another 25 nationally. Throughout the process, we will also manage up to 10 Google Business Profiles while building 750 high-quality backlinks.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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
            )}
            {activeTab === "5" && (
              <div className="tab-pane active">
                 <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>Global SEO Ranking</h3>
                      <p className="disc">
                      Our Global Level 1st Rank SEO Services for general keywords is a comprehensive program with a timeframe of 12-24 months. This service targets getting the 1st rank for 75 keywords and secure a spot on the 1st page for 125 keywords, effectively increasing your global online reach. We also focus on obtaining Snippet Featured Results to highlight your content prominently in search results. We will also build 1500 high-quality white hat backlinks to strengthen your website’s authority and ranking. This strategic approach ensures a strong and sustainable improvement in your global search engine performance.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
   
{/* 
    <section style={{ paddingTop: 80 }} className="section section-bg pb--80">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="starter-template">
             
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

            
              <div className="tab-content pt-4" id="seoTabContent">
              
                <div
                  className="tab-pane fade show active"
                  id="google-map-seo"
                  role="tabpanel"
                  aria-labelledby="google-map-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>Local SEO Ranking</h3>
                      <p className="disc">
                        Maximize your reach with our GBP Local SEO services. According to recent reports, GBP is the most popular platform, responsible for driving 80% of local targeted traffic to neighborhood businesses. Specializing in optimizing your Google Business Profile with GPS settings, we assure your business ranks high in local searches. Our targeted GBP Local SEO strategies focus on building your local brand by driving traffic and attracting new customers to your physical location or service area. With proven expertise, we help you stand out in local search results, generating more convertible leads for increasing revenue.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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

               
                <div
                  className="tab-pane fade"
                  id="city-based-seo"
                  role="tabpanel"
                  aria-labelledby="city-based-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>City Based SEO Rankings</h3>
                      <p className="disc">
                        Our City Based SEO Ranking service is designed to deliver results within a 3-6 month timeframe, focusing on a specific city or district. We restructure your website according to Google's latest guidelines and create original, plagiarism-free content customized for your business. By the end of the third month, you will start seeing results on the first page of search engines. We aim to achieve 1st Rank for 25 keywords and 1st page Rank for 75 keywords. During this 6 month period, we will also manage and optimize one Google Business Profile and build 300 high-quality, white-hat backlinks.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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

         
                <div
                  className="tab-pane fade"
                  id="state-level-seo"
                  role="tabpanel"
                  aria-labelledby="state-level-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>State Ranking SEO</h3>
                      <p className="disc">
                      Our State Level SEO Ranking service is designed to deliver results within a 6-9 month timeframe. Understanding the project requirements, we initially focus on optimizing your website for your specific city by redesigning it according to the Google's guidelines. By updating original content which includes service-oriented keywords to promote your business organically. By the end of the 3rd month, you will begin to see your website appearing on the first page of search results. Within 6 months, we assure achieving the 1st rank for 25 keywords and 1st-page rankings for 75 keywords at the city level. In the following 3 months, we target an additional 25 major keywords for 1st Rank and 25 keywords for 1st-page rankings at the state level. Our services also include managing and optimizing up to 5 Google Business Profiles and creating 500 high-quality white-hat backlinks within this 9-month period.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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

               
                <div
                  className="tab-pane fade"
                  id="country-level-seo"
                  role="tabpanel"
                  aria-labelledby="country-level-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>National Seo Ranking</h3>
                      <p className="disc">
                      We offer a 9-12 month national SEO ranking service. Starting the process by concentrating on your local area to establish a solid foundation. Your website will be redesigned to meet Google's standards and filled with original, informative content. Demonstrating our expertise, you will see initial improvements in local search rankings within first 3 months. In six months, we will aim to rank your business first for 25 local keywords and on the first page for 75 keywords. Over the next six months, we will expand our efforts to achieve top rankings for 25 keywords at the state level and another 25 nationally. Throughout the process, we will also manage up to 10 Google Business Profiles while building 750 high-quality backlinks.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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

               
                <div
                  className="tab-pane fade"
                  id="global-seo"
                  role="tabpanel"
                  aria-labelledby="global-seo-tab"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-9 mb-3 pr--20">
                      <h3>Global SEO Ranking</h3>
                      <p className="disc">
                      Our Global Level 1st Rank SEO Services for general keywords is a comprehensive program with a timeframe of 12-24 months. This service targets getting the 1st rank for 75 keywords and secure a spot on the 1st page for 125 keywords, effectively increasing your global online reach. We also focus on obtaining Snippet Featured Results to highlight your content prominently in search results. We will also build 1500 high-quality white hat backlinks to strengthen your website’s authority and ranking. This strategic approach ensures a strong and sustainable improvement in your global search engine performance.
                      </p>
                      <button className="rts-btn btn-primary">Book an SEO Consultation</button>
                    </div>
                    <div className="col-lg-3">
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
    </section> */}
    </>
  );
};

export default SeoTabs;
