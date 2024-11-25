import React from 'react';
import {Row} from 'reactstrap';
import search from '../assets/images/search.webp';
import contactimage from '../assets/images/contact.webp';
import optimize from '../assets/images/optimize.webp';
import result from '../assets/images/result.webp';

const SuperchargeSEO = () => {
  return (
    <section style={{ paddingTop: 80 }} className="section5 bg-light">
      <Row>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-5">
              <header className="crumina-module crumina-heading">
                <div className="title-text-wrap">
                  <h3 className="heading-title element-anime-fadeInUp-js">
                    Supercharge SEO Ranks in 4 Steps
                  </h3>
                </div>
              </header>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <ul className="list-unstyled">
            <li
              className="d-flex mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pl-3" style={{ textAlign: 'center' }}>
                <img src={search} alt="Search" width="50%" height="50%" />
                <h6 className="text-dark mb-4" style={{ marginTop: '10px' }}>
                  Search
                </h6>
                <ul className="list-unstyled">
                  <li>
                    {'Search "Google Ranking Expert" on Google and click the top result, www.it2.tv. Check out our first ranks, client keyword successes & proven track record in various industries.'}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-lg-3">
          <ul className="list-unstyled">
            <li
              className="d-flex mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pl-3" style={{ textAlign: 'center' }}>
                <img
                  src={contactimage}
                  alt="Contact"
                  width="50%"
                  height="50%"
                />
                <h6 className="text-dark mb-4" style={{ marginTop: '10px' }}>
                  Contact
                </h6>
                <ul className="list-unstyled">
                  <li>
                    {
                      'If you are impressed, contact us to discuss your SEO needs. Select from our customized ranking plans designed specifically for your business. We strategize to achieve top rank.'
                    }
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-lg-3">
          <ul className="list-unstyled">
            <li
              className="d-flex mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pl-3" style={{ textAlign: 'center' }}>
                <img
                  src={optimize}
                  alt="Optimize"
                  width="50%"
                  height="50%"
                />
                <h6 className="text-dark mb-4" style={{ marginTop: '10px' }}>
                  Optimize
                </h6>
                <ul className="list-unstyled">
                  <li>
                    {
                      'By analyzing your competitors, we\'ll optimize your business profile and website to achieve top rankings. Our techniques boost your online visibility and ensure #1 spot on Google.'
                    }
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-lg-3">
          <ul className="list-unstyled">
            <li
              className="d-flex mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pl-3" style={{ textAlign: 'center' }}>
                <img
                  src={result}
                  alt="Result"
                  width="50%"
                  height="50%"
                />
                <h6 className="text-dark mb-4" style={{ marginTop: '10px' }}>
                  Result
                </h6>
                <ul className="list-unstyled">
                  <li>
                    {
                      'Watch your business rise in rankings and revenue with our expert SEO consultant\'s proven strategies. Experience organic growth and increased sales, assuring long-term success.'
                    }
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Row>
    </section>
  );
};

export default SuperchargeSEO;
