import React from 'react';
import Chart from 'react-apexcharts'; // Ensure you have installed react-apexcharts
import icon7 from '../../src/assets/images/banner/icon7.svg'
import icon8 from '../../src/assets/images/banner/icon8.svg'
import icon9 from '../../src/assets/images/banner/icon9.svg'

const optionsdoughnut = {
  chart: {
    type: 'donut',
  },
  labels: ['SEO', 'GMB', 'Website Clicks', 'ROI'], // Labels for each segment
  series: [40, 30, 20, 10], // Example data for each segment (adjust these values as needed)
  colors: ['#FF4560', '#00E396', '#008FFB', '#775DD0'], // Customize colors for each segment
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
    },
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '14px',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%', // Adjust donut size
      },
    },
  },
};

const SeoSection = () => {
  return (
    <section style={{paddingTop: 50, paddingBottom: 75 }} className="section section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 mb-7 mb-md-0">
            <div className="seo-results-thumb">
              {/* Render the doughnut chart */}
              <Chart
                options={optionsdoughnut}
                series={optionsdoughnut.series}
                type="donut"
                height={400}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 mb-md-0 pr--30 pr_md--0 pr_sm--0">
            <header className="crumina-module crumina-heading mb-1">
              <div className="title-text-wrap">
                <h3 className="heading-title element-anime-fadeInUp-js">Google Rank Services</h3>
              </div>
            </header>
            <p className="disc">
              SEO services often focus on achieving first-page results, but if you’re already on the first page and still not receiving leads and inquiries due to not being at the top, you’ve come to the right place.
            </p>

            <p className="disc">
              After a thorough consultation regarding your SEO requirements, we offer specialized SEO Ranking Services designed to help your website secure the top position, particularly the first rank, in Google Search Results, ensuring maximum visibility and lead generation.
            </p>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="seo-results mb-3">
              <div className="seo-results-item d-flex align-items-center mb--20">
                <img
                  loading="lazy"
                  className="crumina-icon mr-3"
                  src={ icon7 }
                  alt="CTR"
                  style={{ width: '60px', height: '60px' }}
                />
                <div className="h6 seo-results-item-info mt--15 ml--20">0.09% CTR</div>
              </div>

              <div className="seo-results-item d-flex align-items-center mb--20">
                <img
                  loading="lazy"
                  className="crumina-icon mr-3"
                  src={ icon8 }
                  alt="CPA"
                  style={{ width: '60px', height: '60px' }}
                />
                <div className="h6 seo-results-item-info mt--15 ml--20">20% less CPA</div>
              </div>

              <div className="seo-results-item d-flex align-items-center">
                <img
                  loading="lazy"
                  className="crumina-icon mr-3"
                  src={ icon9 }
                  alt="ROI"
                  style={{ width: '60px', height: '60px' }}
                />
                <div className="h6 seo-results-item-info mt--15 ml--20">272% ROI</div>
              </div>
            </div>
            <div className="universal-btn-wrapper element-anime-opacity-js">
              <ul className="list-inline">
                <li className="list-inline-item mx-1 my-2">
                  <button className="rts-btn btn-primary">Book an SEO Consultation</button>
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
