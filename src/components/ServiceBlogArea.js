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
import workingProcess from "../assets/images/service/digital-influencer-faq.webp"

function ServiceBlogArea({heading,card1Title,card1Img,card2Title,card2Img,card3Title,card3Img}) {
  return (
    <div className="rts-section-gap rts-blog-area-one style-seven about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-style-one-center">
            <h2 className="title skew-up">{heading}</h2>
          </div>
        </div>
      </div>
      <div className="row g-48 justify-content-md-start justify-content-sm-center mt--0">
        <div className="col-lg-4 col-md-6 col-sm-10 mt--10">
          {/* single blog area start */}
          <div className="single-blog-area-style-one eight-area text-center">
            <a href="blog-details.html" className="thumbnail">
              <img src={card1Img} alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <div className="bottom-area mb--25">
                <span className="admin">Amir Nisi</span>
                <span className="date">• 25 October, 2023</span>
              </div>
              <a href="blog-details.html">
                <h6 className="title mb--20">
                  {card1Title}
                </h6>
              </a>
              <a href="blog-details.html" className="btn-readmore-inner">
                Read more
              </a>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 mt--10">
          {/* single blog area start */}
          <div className="single-blog-area-style-one eight-area">
            <a href="blog-details.html" className="thumbnail">
              <img src={card2Img} alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <div className="bottom-area mb--25">
                <span className="admin">Amir Nisi</span>
                <span className="date">• 25 October, 2023</span>
              </div>
              <a href="blog-details.html">
                <h6 className="title mb--20">
                  {card2Title}
                </h6>
              </a>
              <a href="blog-details.html" className="btn-readmore-inner">
                Read more
              </a>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 mt--10">
          {/* single blog area start */}
          <div className="single-blog-area-style-one eight-area">
            <a href="blog-details.html" className="thumbnail">
              <img src={card3Img} alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <div className="bottom-area mb--25">
                <span className="admin">Amir Nisi</span>
                <span className="date">• 25 October, 2023</span>
              </div>
              <a href="blog-details.html">
                <h6 className="title mb--20">
                {card3Title}
                </h6>
              </a>
              <a href="blog-details.html" className="btn-readmore-inner">
                Read more
              </a>
            </div>
          </div>
          {/* single blog area end */}
        </div>
      </div>
      <div className="row">
        <div className="blog-btn-area mt--50">
          <a
            href="blog.html"
            className="rts-btn btn-primary-4-border arrow-rotate inner m-auto"
          >
            See More Posts <i className="fa-light fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img
        src={serviceShape01png}
        alt="marketing"
        className="one"
      />
      <img
        src={serviceShape02png}
        alt="marketing"
        className="two"
      />
      <img
        src={serviceShape03png}
        alt="marketing"
        className="three"
      />
    </div>
  </div>
  
  )
}

export default ServiceBlogArea