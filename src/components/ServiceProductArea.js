import React from 'react'
import '../assets/main.css'
 import logo1 from '../assets/images/logo/it2-logo.svg';
 import logo2 from '../assets/images/logo/logo-2.svg';
 import logo3 from '../assets/images/logo/logo-one-dark.svg';
 import bannerImage1 from '../assets/images/banner/01.png';
 import bannerShortImage03 from '../assets/images/banner/short/03.png';
 import bannerShortImage05 from '../assets/images/banner/short/05.png';
 import bannerShortImage04 from '../assets/images/banner/short/04.png';
 import bannerShortImage06 from '../assets/images/banner/short/06.png';
 import bannershortshortimage01 from '../assets/images/banner/short/01.png';
 import bannershortshortimage02 from '../assets/images/banner/short/02.png';
import avatars1 from '../assets/images/testimonials/avatars/01.png'
import avatars2 from '../assets/images/testimonials/avatars/02.png'
import avatars3 from '../assets/images/testimonials/avatars/03.png'
import avatars4 from '../assets/images/testimonials/avatars/04.png'
import brand1 from '../assets/images/brand/01.svg'
import brand2 from '../assets/images/brand/02.svg'
import brand3 from '../assets/images/brand/03.svg'
import brand4 from '../assets/images/brand/04.svg'
import brand5 from '../assets/images/brand/05.svg'
import brand21 from '../assets/images/brand/21.svg'
import brand22 from '../assets/images/brand/22.svg'
import brand23 from '../assets/images/brand/23.svg'
import brand24 from '../assets/images/brand/24.svg'
import pricingImage1 from '../assets/images/pricing/01.png'
import pricingImage2 from '../assets/images/pricing/02.png'
import service03png from '../assets/images/video/video-control.svg'
import service01jpg from '../assets/images/service/google-ranking-services.webp'
import serviceimageo2jpg from   "../assets/images/service/02.jpg"
import serviceimageo7png  from  "../assets/images/service/07.png"
import serviceShape01png   from '../assets/images/service/shape/01.png'
import serviceShape02png   from '../assets/images/service/shape/02.png'
import serviceShape03png   from '../assets/images/service/shape/03.png'
import serviceShape04png   from '../assets/images/service/shape/04.png'
import serviceShape05png   from '../assets/images/service/shape/05.png'
import serviceShape06png   from '../assets/images/service/shape/06.png'
import aboutShape01png from "../assets/images/about/shape/01.png"
import aboutShape02png from "../assets/images/about/shape/02.png"
import aboutShape03png from "../assets/images/about/shape/03.png"
import aboutShape04png from "../assets/images/about/shape/04.png"
import aboutChildZammypng from "../assets/images/about/childhood-zammy.png"
import testimonialsshape01png from "../assets/images/testimonials/shape/01.png"
import testimonialsshape02png from "../assets/images/testimonials/shape/02.png"
import blogshape01png from "../assets/images/blog/shape/01.png"
import blogshape02png from "../assets/images/blog/shape/02.png"
import blogshape03png from "../assets/images/blog/shape/03.png"
import subscribtionshape01png from  "../assets/images/subscribtion/shape/01.png"
import subscribtionshape02png from  "../assets/images/subscribtion/shape/02.png"
import subscribtionshape03png from  "../assets/images/subscribtion/shape/03.png"
import subscribtionshape04png from  "../assets/images/subscribtion/shape/04.png"
import blogimage1 from  "../assets/images/service/nabtaker.webp"
import blogimage2 from  "../assets/images/service/hydralic-oman.webp"
import blogimage3 from  "../assets/images/service/venture-partner.webp"
import logotestimonialquotepng from "../assets/images/testimonials/logo/quote.png"
import logotestimonials01svg from "../assets/images/testimonials/logo/01.svg"
import logotestimonials21svg from "../assets/images/testimonials/logo/21.svg"
import logotestimonial02svg from "../assets/images/testimonials/logo/02.svg"
import logotestimonial22svg from "../assets/images/testimonials/logo/22.svg"
import testimonialsavatars01png from "../assets/images/testimonials/avatars/01.png"
import testimonialsavatars02png from "../assets/images/testimonials/avatars/02.png"
import testimonialsavatars03png from "../assets/images/testimonials/avatars/03.png"
import logotestimonials03svg from "../assets/images/testimonials/logo/03.svg"
import logotestimonials23svg from "../assets/images/testimonials/logo/23.svg"
import bestSeoExpert from "../assets/images/service/best-seo-expert.webp";
import contentWritter from "../assets/images/service/content-writter.webp";
import digitalMarketing from "../assets/images/service/digital-marketing.webp";
import seoAudit from "../assets/images/service/seo-audit.webp";
import whoIsZammyZaif from "../assets/images/service/who-is-zammy-zaif.webp";
import socialMediaMarketing from "../assets/images/service/social-media-marketing.webp";
import ball1 from "../assets/images/service/shape/01.png"
import ball2 from "../assets/images/service/shape/02.png"
import ball3 from "../assets/images/service/shape/03.png"
import ball4 from "../assets/images/service/shape/04.png"
import ball6 from "../assets/images/service/shape/06.png"
import workingProcess from "../assets/images/service/digital-influencer-faq.webp"
import SerProduct45  from "../assets/images/product/45.jpg"
import SerProduct43 from "../assets/images/product/43.jpg";
import SerProduct44 from "../assets/images/product/44.jpg";
import webseoimg from '../assets/images/website-seo-services.webp';
import googleseoimg from '../assets/images/expert-google-search.webp';
//import gmpseoimg from "../assets/images/17-local-details.svg";
//import grsimg from "../assets/images/icon7.svg"

function ServiceProductArea() {
  return (
    <div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list  pt--125 pb--125">
      <div className="col-lg-6 col-md-6">
        <a href="#" className="thumbnail">
          <img
            src={webseoimg}
            width={505}
            height={616}
            alt="product"
          />
        </a>
      </div>
      <div className="col-lg-5 col-md-6 offset-lg-1">
        <div className="portfolio-content-wrapper-list">
          {/* <h3 className="pre-title">01.</h3> */}
          <h2 className="title">
          Website Seo Rank Services
          </h2>
          <p className="disc">
          Since 2014, we have been delivering 1st Rank SEO Services for websites, consistently moving clients from as far back as the 5th or even the 10th page to the No. 1 position within a 6-month timeframe for city-level rankings. For state, county, or global rankings, the timeframe may vary depending on the products or services, targeted audience, and level of competition. Led by Zammy Zaif, a recognized Global Google Ranking Expert, our team leverages years of expertise to ensure your website achieves and maintains top rankings in your desired market.

          </p>
          {/* <div className="product-service-wrapper"> */}
            {/* single service */}
            {/* <div className="single-service">
            

            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Brand strategy</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Name, tagline and messaging</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Logo and identity design</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Graphic and Illustration</p>
            </div> */}
            {/* single service end */}
          {/* </div> */}
        </div>
      </div>
      <div className="service--shape">
        <img
          src={ball4}
          alt="service"
          className="one"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="two"
        />
      </div>
    </div>
    <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list  pt--125 pb--125">
      <div className="col-lg-5 col-md-6">
        <div className="portfolio-content-wrapper-list">
          {/* <h3 className="pre-title">02.</h3> */}
          <h2 className="title">
          #1 Google SEO Consultant
          </h2>
          <p className="disc">
          Zammy Zaif has been a leading Google SEO consultant with a wealth of experience in the field, having been active in SEO since 2008. From 2014, he has consistently achieved first-rank results for clients, demonstrating his expertise and commitment to delivering top-tier SEO performance. Recognized as a Global Google SEO Expert from 2018, Zammy Zaif offers unparalleled insights and strategies to elevate your brand’s presence on Google. Consult with him to leverage his extensive knowledge and drive significant growth for your business.
          </p>
          {/* <div className="product-service-wrapper"> */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Market research</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Brand strategy</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Name, tagline and messaging</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Logo and identity design</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Graphic and Illustration</p>
            </div> */}
            {/* single service end */}
          {/* </div> */}
        </div>
      </div>
      <div className="col-lg-6 col-md-6 offset-lg-1">
        <a href="#" className="thumbnail">
          <img
            src={googleseoimg}
            width={505}
            height={616}
            alt="product"
          />
        </a>
      </div>
      <div className="service--shape">
        <img
          src={ball4}
          alt="service"
          className="three"
        />
        <img
          src={ball6}
          alt="service"
          className="four"
        />
      </div>
    </div>
    <div className="row service-relative align-items-center section-separator-top-bg-white single-product-list  pt--125 pb--125">
      <div className="col-lg-6 col-md-6">
        <a href="#" className="thumbnail">
          <img
            src={SerProduct45}
            width={505}
            height={616}
            alt="product"
          />
        </a>
      </div>
      <div className="col-lg-5 col-md-6 offset-lg-1">
        <div className="portfolio-content-wrapper-list">
          {/* <h3 className="pre-title">03.</h3> */}
          <h2 className="title">
          Google Maps Rank Services
          </h2>
          <p className="disc">
          Google Business Profile (GBP) Pack 3 services offer a comprehensive approach to boosting a business's local online visibility. This package specializes in first-rank local SEO services, focusing on optimizing GBP profiles to achieve top positions in Google's local search results, commonly referred to as the "Local Pack." Services include complete GBP profile optimization, tailored local SEO strategies for specific locations, ongoing GBP management to maintain freshness and relevance, and prompt customer feedback responses. By leveraging these services, businesses can significantly enhance their local presence, attract more customers, improve their overall online reputation, and ultimately generate more calls and directions.
          </p>
          {/* <div className="product-service-wrapper"> */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Market research</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Brand strategy</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Name, tagline and messaging</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Logo and identity design</p>
            </div> */}
            {/* single service end */}
            {/* single service */}
            {/* <div className="single-service">
              <i className="fa-light fa-check" />
              <p>Graphic and Illustration</p>
            </div> */}
            {/* single service end */}
          {/* </div> */}
        </div>
      </div>
      <div className="service--shape">
        {/* <img
          src={ball4}
          alt="service"
          className="five"
        /> */}
        <img
          src={serviceShape04png} 
          alt="service"
          className="six"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default ServiceProductArea