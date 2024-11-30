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

function ContentLeftCard({ heading, desc, cimg }) {
  return (
    <div className="rts-product-area section-bg">
      <div className="container">
        <div className="row align-items-center single-product-list pt--80 pb--80">
          {/* Content Section */}
          <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center text-center text-md-start">
            <div className="portfolio-content-wrapper-list">
              <h2 className="title">{heading}</h2>
              <p className="disc">{desc}</p>
            </div>
          </div>
          {/* Image Section */}
          <div className="col-lg-6 col-md-6 d-flex justify-content-right">
            <a href="#" className="thumbnail">
              <img src={cimg} width={505} height={616} alt="product" />
            </a>
          </div>
          {/* Decorative Shapes */}
          <div className="service--shape">
            <img src={ball4} alt="service" className="three" />
            <img src={ball6} alt="service" className="four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLeftCard;