import React, { useEffect } from 'react';

const StatsSection = ({percent1,title1,percent2,title2,percent3,title3,percent4,title4}) => {
  useEffect(() => {
    // This function will initialize the counters (assuming jQuery is used)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.min(count + increment, target).toFixed(0);
          requestAnimationFrame(updateCount);
        }
      };

      updateCount();
    });
  }, []);

  return (
    <section style={{ paddingTop: 0, backgroundColor: '#7ac902' }} className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p className="h1 text-white font-weight-medium">
              <span className="counter" data-count="98">{percent1}</span>
            </p>
            <h6 className="h4 text-dark font-weight-medium">{title1}</h6>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p className="h1 text-white font-weight-medium">
              <span className="counter" data-count="16">{percent2}</span>
            </p>
            <h6 className="h4 text-dark font-weight-medium">{title2}</h6>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p className="h1 text-white font-weight-medium">
              <span className="counter" data-count="60">{percent3}</span>
            </p>
            <h6 className=" h4 text-dark font-weight-medium">{title3}</h6>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
            <p className="h1 text-white font-weight-medium">
              <span className="counter" data-count="1280">{percent4}</span>
            </p>
            <h6 className="h4 text-dark font-weight-medium">{title4}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
