import React, { useEffect } from 'react';
import CountUp from 'react-countup';  // Using react-countup for counter animations
//import './Stats2.css';  // CSS file for styling

const Stats2 = ({percent1, title1, percent2, title2, percent3,title3,percent4,title4}) => {
  useEffect(() => {
    // You can add custom animations or initialize third-party animation libraries here if needed
  }, []);

  return (
    <div className="rts-counterup-area mb--40">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-upmain-wrapper-style-one service-single">
              {/* single counter up area start */}
              <div className="single-counter-up">
                <h4 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">
                    <CountUp start={0} end={percent1} duration={2} separator="," />
                  </span>
                  
                </h4>
                <p>{title1}</p>
              </div>
              {/* single counter up area end */}
              {/* single counter up area start */}
              <div className="single-counter-up">
                <h4 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">
                    <CountUp start={0} end={percent2} duration={2} />
                  </span>
                  %
                </h4>
                <p>{title2}</p>
              </div>
              {/* single counter up area end */}
              {/* single counter up area start */}
              <div className="single-counter-up">
                <h4 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">
                    <CountUp start={0} end={percent3} duration={2} separator="," />
                  </span>
                  %
                </h4>
                <p>{title3}</p>
              </div>
              {/* single counter up area end */}
              {/* single counter up area start */}
              <div className="single-counter-up">
                <h4 className="title animated fadeIn">
                  <span className="counter animated fadeInDownBig">
                    <CountUp start={0} end={percent4} duration={2} />
                  </span>
                  %
                </h4>
                <p>{title4}</p>
              </div>
              {/* single counter up area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats2;
