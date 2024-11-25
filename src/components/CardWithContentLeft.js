import React from 'react';
import service01jpg from '../../src/assets/images/service/google-ranking-services.webp';
import serviceShape04png from '../../src/assets/images/service/shape/04.png';
import serviceShape06png from '../../src/assets/images/service/shape/06.png';

function CardWithContentinLeft({ heading }) {
  return (
    <div className="rts-product-area">
      <div className="container">
        <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
          
          {/* Left Side: Content (Text) */}
          <div className="col-lg-6 col-md-6">
            <div className="portfolio-content-wrapper-list">
              <h2 className="title split-collab">
                {heading}
              </h2>
              <p className="disc">
                He started using a computer at the age of nine and it was then that he aspired to become a computer engineer. Young Zammy reasoned that because a computer is an electronic machine, obtaining a Diploma in Electronics and Communication Engineering would help him reach his goal and he enrolled in a college for the same.
              </p>
              <p className="disc">
                Later on, he discovered that he needed to major in Information Technology or Computer Science Engineering in order to get the position he had always aspired to. But it was too late for him to change his major and he had to drop out in the third year influenced by financial difficulties.
              </p>
              <p className="disc">
                Following that, he enrolled in a three-month hardware and networking certification course. Over time, he developed into an expert in his area and he attracted consumers from all over the world. He used his hard-earned money to re-enrol in the same engineering course, which he finished successfully the following year with a different batch.
              </p>
            </div>
          </div>
          
          {/* Right Side: Image */}
          <div className="col-lg-6 col-md-6">
            <div className="large-thumbnail">
              <a href="#" className="thumbnail">
                <img
                  src={service01jpg}
                  alt="Service"
                  className="img-fluid"
                  style={{ width: '100%', height: 'auto' }}
                />
              </a>
            </div>
          </div>

          {/* Additional Decorative Shapes */}
          <div className="service--shape">
            <img
              src={serviceShape04png}
              alt="Service Shape"
              className="one"
            />
            <img
              src={serviceShape06png}
              alt="Service Shape"
              className="two"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CardWithContentinLeft;
