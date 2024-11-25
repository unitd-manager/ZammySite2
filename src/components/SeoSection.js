import React from 'react';
import Chart from 'react-apexcharts'; // Make sure you have installed the necessary chart package

const optionsdoughnut = {
  options: {
    // Your chart options here
  },
  series: [25, 75], // Example data, adjust based on your needs
};

const SeoSection = () => {
  return (
    <section style={{ paddingTop: 200 }} className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mb-7 mb-md-0">
            <div className="seo-results-thumb">
              {/* Render the doughnut chart */}
              <Chart
                options={optionsdoughnut.options}
                series={optionsdoughnut.series}
                type="donut"
                height={350}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 mb-md-0">
            <header className="crumina-module crumina-heading mb-1">
              {/* Heading section */}
              <div className="title-text-wrap">
                <h3 className="heading-title element-anime-fadeInUp-js">Google Rank Services</h3>
              </div>
            </header>
            <p>
              SEO services often focus on achieving first-page results, but if you’re already on the first page and still not receiving leads and inquiries due to not being at the top, you’ve come to the right place.
            </p>

            <p className="mb-0 text-l-justify">
              After a thorough consultation regarding your SEO requirements, we offer specialized SEO Ranking Services designed to help your website secure the top position, particularly the first rank, in Google Search Results, ensuring maximum visibility and lead generation.
            </p>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="seo-results mb-3">
              <div className="seo-results-item d-flex align-items-center mb-2">
                <img
                  loading="lazy"
                  className="crumina-icon mr-3"
                  src="assets/images/banner/icon7.svg"
                  alt="CTR"
                  style={{ width: '40px', height: '40px' }} // Adjust the size as needed
                />
                <div className="h5 seo-results-item-info">0.09% CTR</div>
              </div>

              <div className="seo-results-item d-flex align-items-center mb-2">
                <img
                  loading="lazy"
                  className="crumina-icon mr-3"
                  src="assets/images/banner/icon8.svg"
                  alt="CPA"
                  style={{ width: '40px', height: '40px' }} // Adjust the size as needed
                />
                <div className="h5 seo-results-item-info">20% less CPA</div>
              </div>

              <div className="seo-results-item d-flex align-items-center">
                <img
                  loading="lazy"
                  className="crumina-icon mr-3"
                  src="assets/images/banner/icon9.svg"
                  alt="ROI"
                  style={{ width: '40px', height: '40px' }} // Adjust the size as needed
                />
                <div className="h5 seo-results-item-info">272% ROI</div>
              </div>
            </div>
            <div className="universal-btn-wrapper element-anime-opacity-js">
              <ul className="list-inline">
                <li className="list-inline-item mx-1 my-2">
                  <a href="#" className="btn btn-primary">
                    {"Book an SEO Consultation"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
