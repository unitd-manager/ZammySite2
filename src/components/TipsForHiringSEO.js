import React from 'react';

const TipsForHiringSEO = () => {
  const tips = [
    {
      title: "Define Your Goals",
      text: "Clearly outline your SEO objectives. Are you aiming to increase organic traffic, improve local search rankings, or boost conversions?",
    },
    {
      title: "Research Potential Candidates",
      text: "Thoroughly investigate potential consultants. Check their portfolios, case studies, and client testimonials.",
    },
    {
      title: "Assess Expertise",
      text: "Ensure the consultant has a deep understanding of current SEO best practices. They should be well-versed in technical SEO.",
    },
    {
      title: "Evaluate Communication Skills",
      text: "Effective communication is crucial for a successful SEO partnership. The consultant should be able to explain complex SEO concepts clearly.",
    },
    {
      title: "Discuss Transparency and Reporting",
      text: "Inquire about the consultant's reporting methods. They should provide regular updates on progress, including key metrics.",
    },
    {
      title: "Set Clear Expectations",
      text: "Establish clear expectations regarding timelines, deliverables, and budget. Discuss your desired ROI and how the consultant plans to achieve it.",
    },
    {
      title: "Consider Long-Term Partnership",
      text: "SEO is an ongoing process. Look for a consultant who views your business as a long-term partner rather than a one-time client.",
    },
    {
      title: "Check for Ethical Practices",
      text: "Ensure the consultant adheres to white-hat SEO techniques. Avoid those who promise quick results through black-hat tactics.",
    },
    {
      title: "Get Recommendations",
      text: "Seek recommendations from trusted business contacts or online communities. Personal referrals can provide valuable insights.",
    },
  ];

  return (
    <section style={{ paddingTop: 30 }} className="section5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-1">
            <header className="crumina-module crumina-heading">
              <div className="title-text-wrap">
                <h3 className="heading-title element-anime-fadeInUp-js">
                  Tips for Hiring a Google SEO Consultant
                </h3>
              </div>
            </header>
          </div>
        </div>

        <div className="row">
          {tips.map((tip, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="info-box card7 border-0 shadow1-sm h-100">
                <div className="card-body">
                  <h5 className="info-box-title text-primary">{tip.title}</h5>
                  <p className="info-box-text text-muted">{tip.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsForHiringSEO;
