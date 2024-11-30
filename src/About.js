import React from "react";
 import { Link } from "react-router-dom";
// import '../assets/css/style.css'
// import '../assets/css/fontawesome.min.css'
// import '../assets/css/slick.min.css'
// import '../assets/css/magnific-popup.min.css'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/main.css'
 import logo1 from '../src/assets/images/logo/it2-logo.svg';
 import logo2 from '../src/assets/images/logo/logo-2.svg';
 import logo3 from '../src/assets/images/logo/logo-one-dark.svg';
 import bannerImage1 from '../src/assets/images/banner/01.png';
 import bannerShortImage03 from '../src/assets/images/banner/short/03.png';
 import bannerShortImage05 from '../src/assets/images/banner/short/05.png';
 import bannerShortImage04 from '../src/assets/images/banner/short/04.png';
 import bannerShortImage06 from '../src/assets/images/banner/short/06.png';
 import bannershortshortimage01 from '../src/assets/images/banner/short/01.png';
 import bannershortshortimage02 from '../src/assets/images/banner/short/02.png';
import avatars1 from '../src/assets/images/testimonials/avatars/01.png'
import avatars2 from '../src/assets/images/testimonials/avatars/02.png'
import avatars3 from '../src/assets/images/testimonials/avatars/03.png'
import avatars4 from '../src/assets/images/testimonials/avatars/04.png'
import brand1 from '../src/assets/images/brand/01.svg'
import brand2 from '../src/assets/images/brand/02.svg'
import brand3 from '../src/assets/images/brand/03.svg'
import brand4 from '../src/assets/images/brand/04.svg'
import brand5 from '../src/assets/images/brand/05.svg'
import brand21 from '../src/assets/images/brand/21.svg'
import brand22 from '../src/assets/images/brand/22.svg'
import brand23 from '../src/assets/images/brand/23.svg'
import brand24 from '../src/assets/images/brand/24.svg'
import pricingImage1 from '../src/assets/images/pricing/01.png'
import pricingImage2 from '../src/assets/images/pricing/02.png'
import service03png from '../src/assets/images/video/video-control.svg'
import service01jpg from '../src/assets/images/service/google-ranking-services.webp'
import serviceimageo2jpg from   "../src/assets/images/service/02.jpg"
import serviceimageo7png  from  "../src/assets/images/service/07.png"
import serviceShape01png   from '../src/assets/images/service/shape/01.png'
import serviceShape02png   from '../src/assets/images/service/shape/02.png'
import serviceShape03png   from '../src/assets/images/service/shape/03.png'
import serviceShape04png   from '../src/assets/images/service/shape/04.png'
import serviceShape05png   from '../src/assets/images/service/shape/05.png'
import serviceShape06png   from '../src/assets/images/service/shape/06.png'
import aboutShape01png from "../src/assets/images/about/shape/01.png"
import aboutShape02png from "../src/assets/images/about/shape/02.png"
import aboutShape03png from "../src/assets/images/about/shape/03.png"
import aboutShape04png from "../src/assets/images/about/shape/04.png"
import aboutChildZammypng from "../src/assets/images/about/childhood-zammy.png"
import aboutDubaiZammypng from "../src/assets/images/about/zammy-in-dubai.png"
import aboutZammy1png from "../src/assets/images/about/zammy-1.png"
import aboutGoggleRankExpertpng from "../src/assets/images/about/google-ranking-expert.png"
import aboutArtOfmoneypng from "../src/assets/images/about/art-of-attracting-money.png"
import aboutGoggleRecognitionpng from "../src/assets/images/about/zammy-zaif-google-ranking-expert.png"
import aboutBusinessMentorpng from "../src/assets/images/about/zammy-business-mentor.jpg"
import aboutGreatPublicSpeakerpng from "../src/assets/images/about/zammy-zaif-public-speaker.jpg"
import aboutOnlinePresencepng from "../src/assets/images/about/zammy-online-presence.png"
import aboutSeoStrategypng from "../src/assets/images/about/seo-strategy.png"
import testimonialsshape01png from "../src/assets/images/testimonials/shape/01.png"
import testimonialsshape02png from "../src/assets/images/testimonials/shape/02.png"
import blogshape01png from "../src/assets/images/blog/shape/01.png"
import blogshape02png from "../src/assets/images/blog/shape/02.png"
import blogshape03png from "../src/assets/images/blog/shape/03.png"
import subscribtionshape01png from  "../src/assets/images/subscribtion/shape/01.png"
import subscribtionshape02png from  "../src/assets/images/subscribtion/shape/02.png"
import subscribtionshape03png from  "../src/assets/images/subscribtion/shape/03.png"
import subscribtionshape04png from  "../src/assets/images/subscribtion/shape/04.png"
import blogimage1 from  "../src/assets/images/service/nabtaker.webp"
import blogimage2 from  "../src/assets/images/service/hydralic-oman.webp"
import blogimage3 from  "../src/assets/images/service/venture-partner.webp"
import logotestimonialquotepng from "../src/assets/images/testimonials/logo/quote.png"
import logotestimonials01svg from "../src/assets/images/testimonials/logo/01.svg"
import logotestimonials21svg from "../src/assets/images/testimonials/logo/21.svg"
import logotestimonial02svg from "../src/assets/images/testimonials/logo/02.svg"
import logotestimonial22svg from "../src/assets/images/testimonials/logo/22.svg"
import testimonialsavatars01png from "../src/assets/images/testimonials/avatars/01.png"
import testimonialsavatars02png from "../src/assets/images/testimonials/avatars/02.png"
import testimonialsavatars03png from "../src/assets/images/testimonials/avatars/03.png"
import logotestimonials03svg from "../src/assets/images/testimonials/logo/03.svg"
import logotestimonials23svg from "../src/assets/images/testimonials/logo/23.svg"
import bestSeoExpert from "../src/assets/images/service/best-seo-expert.webp";
import contentWritter from "../src/assets/images/service/content-writter.webp";
import digitalMarketing from "../src/assets/images/service/digital-marketing.webp";
import seoAudit from "../src/assets/images/service/seo-audit.webp";
import whoIsZammyZaif from "../src/assets/images/service/who-is-zammy-zaif.webp";
import socialMediaMarketing from "../src/assets/images/service/social-media-marketing.webp";
import ball1 from "../src/assets/images/service/shape/01.png"
import ball2 from "../src/assets/images/service/shape/02.png"
import ball3 from "../src/assets/images/service/shape/03.png"
import ball4 from "../src/assets/images/service/shape/04.png"
import workingProcess from "../src/assets/images/service/digital-influencer-faq.webp"


const Home = () => {
    return (
        <>
        <>

  {/* rts banner area start */}
  <div className="contact-banner-area-start faq rts-section-gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        {/* banner main inner contact areas start */}
        <div className="banner-inner-area-contact-inner">
          <h1 className="title skew-up-2 mb--40" style={{ opacity: 1 }}>
                About
            <br />
            <span>
                  Zammy Zaif
            </span>
          </h1>
          <Link to ="/Home" style={{color:'blue'}}>Home</Link> &nbsp;&nbsp;&nbsp;->&nbsp;&nbsp;&nbsp; <span>About Zammy Zaif</span>
        </div>
        {/* banner main inner contact areas end */}
        <div className="service--shape">
        <img
          src={serviceShape01png}
          alt="service"
          className="five"
        />
        <img
          src={serviceShape03png}
          alt="service"
          className="two"
        />
      </div>
      </div>
    </div>
  </div>
</div>

<div className="rts-working-process-area rts-section-gap ">
  <div className="container">
    <div className="row service-relative">
      <div className="col-lg-12">
        <div className="title-style-one-center">
          <span className="pre skew-up" style={{ opacity: 1 }}>
                About Zammy Zaif
          </span>
          <h2 className="title skew-up" style={{ opacity: 1 }}>
            <div
              className="word-line"
              style={{ display: "block", textAlign: "center", width: "100%" }}
            >
              <div
                className="word"
                style={{
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0%)"
                }}
              >
                Google Expert from India - Asia
              </div>{" "}
            </div>
          </h2>
        </div>
        <div className="service--shape">
        <img
          src={serviceShape02png}
          alt="service"
          className="one"
        />
      </div>
      </div>
    </div>
    <div className="row mt--50">
      <div className="col-lg-5 pr--50 pr_md--0 pr_sm--0">
        <div className="sidebar">
          <div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1609 6.16117C13.5051 3.81696 16.6845 2.5 19.9997 2.5C21.6412 2.5 23.2667 2.82332 24.7833 3.45151C26.2998 4.07969 27.6778 5.00043 28.8386 6.16117C29.9993 7.3219 30.92 8.69989 31.5482 10.2165C32.1764 11.733 32.4997 13.3585 32.4997 15C32.5833 16.8147 32.2347 18.6234 31.4828 20.2771C30.7309 21.9309 29.5971 23.3825 28.1747 24.5125C26.9122 25.6875 26.2497 26.35 26.2497 27.5H23.7497C23.7497 25.2199 25.0841 23.9737 26.3972 22.7474C26.423 22.7233 26.4489 22.6991 26.4747 22.675C27.6453 21.7817 28.5788 20.6148 29.1934 19.2767C29.808 17.9385 30.0849 16.47 29.9997 15C29.9997 12.3478 28.9462 9.8043 27.0708 7.92893C25.1954 6.05357 22.6519 5 19.9997 5C17.3476 5 14.804 6.05357 12.9287 7.92893C11.0533 9.8043 9.99972 12.3478 9.99972 15C9.91315 16.469 10.1881 17.9368 10.8004 19.2748C11.4128 20.6128 12.3439 21.7803 13.5122 22.675C14.8622 23.9125 16.2497 25.2 16.2497 27.5H13.7497C13.7497 26.35 13.0747 25.6875 11.8247 24.525C10.4013 23.393 9.26699 21.9393 8.51509 20.2834C7.76319 18.6275 7.41519 16.8167 7.49972 15C7.49972 11.6848 8.81668 8.50537 11.1609 6.16117ZM26.2497 32.5V30H13.7497V32.5H26.2497ZM23.7497 37.5V35H16.2497V37.5H23.7497Z"
                      fill="#614CE1"
                    />
                  </svg>
                  Best SEO Expert in India
                </button>
              </h4>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_889_9723)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.5 10H30V5H25V2.5H30C30.6628 2.50069 31.2983 2.76431 31.767 3.233C32.2357 3.70169 32.4993 4.33717 32.5 5V10ZM2.5 15H5V20H2.5V15ZM5 32.5H10V30H5V25H2.5V30C2.50069 30.6628 2.76431 31.2983 3.233 31.767C3.70169 32.2357 4.33717 32.4993 5 32.5ZM15 2.5H20V5H15V2.5ZM5 10H2.5V5C2.50069 4.33717 2.76431 3.70169 3.233 3.233C3.70169 2.76431 4.33717 2.50069 5 2.5H10V5H5V10ZM33.2716 39.9053C33.4232 39.9681 33.5858 40.0004 33.75 40.0002C33.9142 40.0004 34.0768 39.9681 34.2284 39.9053C34.3801 39.8424 34.5178 39.7502 34.6338 39.6339L39.6338 34.6339C39.7499 34.5179 39.842 34.3801 39.9049 34.2285C39.9677 34.0769 40 33.9143 40 33.7502C40 33.586 39.9677 33.4235 39.9049 33.2718C39.842 33.1202 39.7499 32.9824 39.6338 32.8664L31.9616 25.1943L38.1934 21.0402C38.3908 20.9086 38.5467 20.7235 38.6428 20.5066C38.739 20.2897 38.7714 20.0499 38.7363 19.8153C38.7013 19.5806 38.6001 19.3608 38.4447 19.1815C38.2894 19.0022 38.0862 18.8708 37.8589 18.8027L12.8589 11.3027C12.6427 11.2379 12.413 11.2328 12.1942 11.2879C11.9753 11.3431 11.7755 11.4565 11.6159 11.6161C11.4564 11.7757 11.343 11.9755 11.2878 12.1943C11.2326 12.4132 11.2377 12.6429 11.3025 12.8591L18.8025 37.8591C18.8706 38.0863 19.002 38.2895 19.1813 38.4449C19.3606 38.6003 19.5804 38.7014 19.8151 38.7365C20.0497 38.7716 20.2895 38.7392 20.5064 38.643C20.7233 38.5469 20.9084 38.391 21.04 38.1936L25.1941 31.9618L32.8663 39.6339C32.9822 39.7502 33.1199 39.8424 33.2716 39.9053ZM36.9824 33.7502L33.75 36.9826L24.8063 28.0389L20.434 34.5962L14.3646 14.3648L34.596 20.4342L28.0388 24.8064L36.9824 33.7502Z"
                        fill="#614CE1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_889_9723">
                        <rect width={30} height={30} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Google Ranking Expert
                </button>
              </h4>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.97215 9.90735C3.7944 10.4568 4.7611 10.75 5.75 10.75C7.07609 10.75 8.34785 10.2232 9.28554 9.28554C10.2232 8.34785 10.75 7.07609 10.75 5.75C10.75 4.7611 10.4568 3.7944 9.90735 2.97215C9.35794 2.14991 8.57705 1.50904 7.66342 1.1306C6.74979 0.752166 5.74446 0.65315 4.77455 0.846076C3.80465 1.039 2.91373 1.51521 2.21447 2.21447C1.51521 2.91373 1.039 3.80465 0.846076 4.77455C0.65315 5.74446 0.752166 6.74979 1.1306 7.66342C1.50904 8.57705 2.14991 9.35794 2.97215 9.90735ZM4.36108 3.67133C4.7722 3.39662 5.25555 3.25 5.75 3.25C6.41304 3.25 7.04893 3.51339 7.51777 3.98223C7.98661 4.45108 8.25 5.08696 8.25 5.75C8.25 6.24446 8.10338 6.7278 7.82868 7.13893C7.55397 7.55005 7.16353 7.87048 6.70671 8.0597C6.2499 8.24892 5.74723 8.29843 5.26228 8.20197C4.77732 8.1055 4.33187 7.8674 3.98223 7.51777C3.6326 7.16814 3.3945 6.72268 3.29804 6.23773C3.20158 5.75278 3.25108 5.25011 3.4403 4.79329C3.62952 4.33648 3.94995 3.94603 4.36108 3.67133ZM15.75 4.5H32V7H15.75V4.5ZM15.75 27H32V29.5H15.75V27ZM18.25 15.75H2V18.25H18.25V15.75ZM5.75 33.25C4.7611 33.25 3.7944 32.9568 2.97215 32.4074C2.14991 31.8579 1.50904 31.0771 1.1306 30.1634C0.752166 29.2498 0.65315 28.2445 0.846076 27.2746C1.039 26.3046 1.51521 25.4137 2.21447 24.7145C2.91373 24.0152 3.80465 23.539 4.77455 23.3461C5.74446 23.1532 6.74979 23.2522 7.66342 23.6306C8.57705 24.009 9.35794 24.6499 9.90735 25.4722C10.4568 26.2944 10.75 27.2611 10.75 28.25C10.75 29.5761 10.2232 30.8479 9.28554 31.7855C8.34785 32.7232 7.07609 33.25 5.75 33.25ZM5.75 25.75C5.25555 25.75 4.7722 25.8966 4.36108 26.1713C3.94995 26.446 3.62952 26.8365 3.4403 27.2933C3.25108 27.7501 3.20158 28.2528 3.29804 28.7377C3.3945 29.2227 3.6326 29.6681 3.98223 30.0178C4.33187 30.3674 4.77732 30.6055 5.26228 30.702C5.74723 30.7984 6.2499 30.7489 6.70671 30.5597C7.16353 30.3705 7.55397 30.0501 7.82868 29.6389C8.10338 29.2278 8.25 28.7445 8.25 28.25C8.25 27.587 7.98661 26.9511 7.51777 26.4822C7.04893 26.0134 6.41304 25.75 5.75 25.75ZM25.4722 21.1574C26.2944 21.7068 27.2611 22 28.25 22C29.5761 22 30.8479 21.4732 31.7855 20.5355C32.7232 19.5979 33.25 18.3261 33.25 17C33.25 16.0111 32.9568 15.0444 32.4074 14.2222C31.8579 13.3999 31.0771 12.759 30.1634 12.3806C29.2498 12.0022 28.2445 11.9031 27.2746 12.0961C26.3046 12.289 25.4137 12.7652 24.7145 13.4645C24.0152 14.1637 23.539 15.0546 23.3461 16.0246C23.1532 16.9945 23.2522 17.9998 23.6306 18.9134C24.009 19.8271 24.6499 20.6079 25.4722 21.1574ZM26.8611 14.9213C27.2722 14.6466 27.7556 14.5 28.25 14.5C28.913 14.5 29.5489 14.7634 30.0178 15.2322C30.4866 15.7011 30.75 16.337 30.75 17C30.75 17.4945 30.6034 17.9778 30.3287 18.3889C30.054 18.8001 29.6635 19.1205 29.2067 19.3097C28.7499 19.4989 28.2472 19.5484 27.7623 19.452C27.2773 19.3555 26.8319 19.1174 26.4822 18.7678C26.1326 18.4181 25.8945 17.9727 25.798 17.4877C25.7016 17.0028 25.7511 16.5001 25.9403 16.0433C26.1295 15.5865 26.45 15.196 26.8611 14.9213Z"
                      fill="#614CE1"
                    />
                  </svg>
                  GMB Ranking Specialist
                </button>
              </h4>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.7878 37.4126C20.935 37.4708 21.0919 37.5005 21.2503 37.5001C21.5322 37.4984 21.8053 37.4015 22.0253 37.2251L28.2753 32.2251C28.4226 32.1087 28.5418 31.9606 28.624 31.7918C28.7062 31.623 28.7494 31.4378 28.7503 31.2501V21.7626L33.4753 17.0501C34.7564 15.7761 35.7718 14.2605 36.4628 12.5911C37.1537 10.9217 37.5064 9.13179 37.5003 7.32508V5.00008C37.5003 4.33704 37.2369 3.70115 36.768 3.23231C36.2992 2.76347 35.6633 2.50008 35.0003 2.50008H32.6753C30.8686 2.49399 29.0786 2.84664 27.4092 3.53757C25.7398 4.22849 24.2242 5.24396 22.9503 6.52508L18.2378 11.2501H8.75026C8.56148 11.2524 8.37569 11.2975 8.20682 11.3819C8.03796 11.4664 7.89041 11.588 7.77526 11.7376L2.77526 17.9876C2.63575 18.1605 2.54483 18.3674 2.51188 18.5871C2.47892 18.8068 2.50512 19.0314 2.58776 19.2376C2.6694 19.4424 2.80375 19.6219 2.97718 19.758C3.1506 19.8941 3.35694 19.982 3.57526 20.0126L12.3253 21.2626L12.6753 18.7626L6.08776 17.8251L9.35026 13.7501H18.7503C18.9148 13.751 19.0779 13.7195 19.2301 13.6573C19.3824 13.5951 19.521 13.5034 19.6378 13.3876L24.7253 8.30008C25.7665 7.25178 27.0052 6.42036 28.3698 5.85392C29.7344 5.28748 31.1978 4.99727 32.6753 5.00008H35.0003V7.32508C35.0031 8.80257 34.7129 10.266 34.1464 11.6306C33.58 12.9952 32.7486 14.2339 31.7003 15.2751L26.6128 20.3626C26.4969 20.4794 26.4053 20.6179 26.343 20.7702C26.2808 20.9225 26.2493 21.0856 26.2503 21.2501V30.6501L22.2003 33.9126L21.2628 27.3251L18.7628 27.6751L20.0128 36.4251C20.0434 36.6434 20.1312 36.8497 20.2673 37.0232C20.4034 37.1966 20.583 37.3309 20.7878 37.4126ZM9.11037 29.115L19.1071 19.1183L20.8749 20.886L10.8781 30.8828L9.11037 29.115Z"
                      fill="#614CE1"
                    />
                  </svg>
                  Internet Influencer
                </button>
              </h4>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.1609 6.16117C13.5051 3.81696 16.6845 2.5 19.9997 2.5C21.6412 2.5 23.2667 2.82332 24.7833 3.45151C26.2998 4.07969 27.6778 5.00043 28.8386 6.16117C29.9993 7.3219 30.92 8.69989 31.5482 10.2165C32.1764 11.733 32.4997 13.3585 32.4997 15C32.5833 16.8147 32.2347 18.6234 31.4828 20.2771C30.7309 21.9309 29.5971 23.3825 28.1747 24.5125C26.9122 25.6875 26.2497 26.35 26.2497 27.5H23.7497C23.7497 25.2199 25.0841 23.9737 26.3972 22.7474C26.423 22.7233 26.4489 22.6991 26.4747 22.675C27.6453 21.7817 28.5788 20.6148 29.1934 19.2767C29.808 17.9385 30.0849 16.47 29.9997 15C29.9997 12.3478 28.9462 9.8043 27.0708 7.92893C25.1954 6.05357 22.6519 5 19.9997 5C17.3476 5 14.804 6.05357 12.9287 7.92893C11.0533 9.8043 9.99972 12.3478 9.99972 15C9.91315 16.469 10.1881 17.9368 10.8004 19.2748C11.4128 20.6128 12.3439 21.7803 13.5122 22.675C14.8622 23.9125 16.2497 25.2 16.2497 27.5H13.7497C13.7497 26.35 13.0747 25.6875 11.8247 24.525C10.4013 23.393 9.26699 21.9393 8.51509 20.2834C7.76319 18.6275 7.41519 16.8167 7.49972 15C7.49972 11.6848 8.81668 8.50537 11.1609 6.16117ZM26.2497 32.5V30H13.7497V32.5H26.2497ZM23.7497 37.5V35H16.2497V37.5H23.7497Z"
                      fill="#614CE1"
                    />
                  </svg>
                  Google Influencer
                </button>
              </h4>
            </div>          
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_889_9723)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.5 10H30V5H25V2.5H30C30.6628 2.50069 31.2983 2.76431 31.767 3.233C32.2357 3.70169 32.4993 4.33717 32.5 5V10ZM2.5 15H5V20H2.5V15ZM5 32.5H10V30H5V25H2.5V30C2.50069 30.6628 2.76431 31.2983 3.233 31.767C3.70169 32.2357 4.33717 32.4993 5 32.5ZM15 2.5H20V5H15V2.5ZM5 10H2.5V5C2.50069 4.33717 2.76431 3.70169 3.233 3.233C3.70169 2.76431 4.33717 2.50069 5 2.5H10V5H5V10ZM33.2716 39.9053C33.4232 39.9681 33.5858 40.0004 33.75 40.0002C33.9142 40.0004 34.0768 39.9681 34.2284 39.9053C34.3801 39.8424 34.5178 39.7502 34.6338 39.6339L39.6338 34.6339C39.7499 34.5179 39.842 34.3801 39.9049 34.2285C39.9677 34.0769 40 33.9143 40 33.7502C40 33.586 39.9677 33.4235 39.9049 33.2718C39.842 33.1202 39.7499 32.9824 39.6338 32.8664L31.9616 25.1943L38.1934 21.0402C38.3908 20.9086 38.5467 20.7235 38.6428 20.5066C38.739 20.2897 38.7714 20.0499 38.7363 19.8153C38.7013 19.5806 38.6001 19.3608 38.4447 19.1815C38.2894 19.0022 38.0862 18.8708 37.8589 18.8027L12.8589 11.3027C12.6427 11.2379 12.413 11.2328 12.1942 11.2879C11.9753 11.3431 11.7755 11.4565 11.6159 11.6161C11.4564 11.7757 11.343 11.9755 11.2878 12.1943C11.2326 12.4132 11.2377 12.6429 11.3025 12.8591L18.8025 37.8591C18.8706 38.0863 19.002 38.2895 19.1813 38.4449C19.3606 38.6003 19.5804 38.7014 19.8151 38.7365C20.0497 38.7716 20.2895 38.7392 20.5064 38.643C20.7233 38.5469 20.9084 38.391 21.04 38.1936L25.1941 31.9618L32.8663 39.6339C32.9822 39.7502 33.1199 39.8424 33.2716 39.9053ZM36.9824 33.7502L33.75 36.9826L24.8063 28.0389L20.434 34.5962L14.3646 14.3648L34.596 20.4342L28.0388 24.8064L36.9824 33.7502Z"
                        fill="#614CE1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_889_9723">
                        <rect width={30} height={30} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Best Local SEO Expert
                </button>
              </h4>
            </div>          

            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.97215 9.90735C3.7944 10.4568 4.7611 10.75 5.75 10.75C7.07609 10.75 8.34785 10.2232 9.28554 9.28554C10.2232 8.34785 10.75 7.07609 10.75 5.75C10.75 4.7611 10.4568 3.7944 9.90735 2.97215C9.35794 2.14991 8.57705 1.50904 7.66342 1.1306C6.74979 0.752166 5.74446 0.65315 4.77455 0.846076C3.80465 1.039 2.91373 1.51521 2.21447 2.21447C1.51521 2.91373 1.039 3.80465 0.846076 4.77455C0.65315 5.74446 0.752166 6.74979 1.1306 7.66342C1.50904 8.57705 2.14991 9.35794 2.97215 9.90735ZM4.36108 3.67133C4.7722 3.39662 5.25555 3.25 5.75 3.25C6.41304 3.25 7.04893 3.51339 7.51777 3.98223C7.98661 4.45108 8.25 5.08696 8.25 5.75C8.25 6.24446 8.10338 6.7278 7.82868 7.13893C7.55397 7.55005 7.16353 7.87048 6.70671 8.0597C6.2499 8.24892 5.74723 8.29843 5.26228 8.20197C4.77732 8.1055 4.33187 7.8674 3.98223 7.51777C3.6326 7.16814 3.3945 6.72268 3.29804 6.23773C3.20158 5.75278 3.25108 5.25011 3.4403 4.79329C3.62952 4.33648 3.94995 3.94603 4.36108 3.67133ZM15.75 4.5H32V7H15.75V4.5ZM15.75 27H32V29.5H15.75V27ZM18.25 15.75H2V18.25H18.25V15.75ZM5.75 33.25C4.7611 33.25 3.7944 32.9568 2.97215 32.4074C2.14991 31.8579 1.50904 31.0771 1.1306 30.1634C0.752166 29.2498 0.65315 28.2445 0.846076 27.2746C1.039 26.3046 1.51521 25.4137 2.21447 24.7145C2.91373 24.0152 3.80465 23.539 4.77455 23.3461C5.74446 23.1532 6.74979 23.2522 7.66342 23.6306C8.57705 24.009 9.35794 24.6499 9.90735 25.4722C10.4568 26.2944 10.75 27.2611 10.75 28.25C10.75 29.5761 10.2232 30.8479 9.28554 31.7855C8.34785 32.7232 7.07609 33.25 5.75 33.25ZM5.75 25.75C5.25555 25.75 4.7722 25.8966 4.36108 26.1713C3.94995 26.446 3.62952 26.8365 3.4403 27.2933C3.25108 27.7501 3.20158 28.2528 3.29804 28.7377C3.3945 29.2227 3.6326 29.6681 3.98223 30.0178C4.33187 30.3674 4.77732 30.6055 5.26228 30.702C5.74723 30.7984 6.2499 30.7489 6.70671 30.5597C7.16353 30.3705 7.55397 30.0501 7.82868 29.6389C8.10338 29.2278 8.25 28.7445 8.25 28.25C8.25 27.587 7.98661 26.9511 7.51777 26.4822C7.04893 26.0134 6.41304 25.75 5.75 25.75ZM25.4722 21.1574C26.2944 21.7068 27.2611 22 28.25 22C29.5761 22 30.8479 21.4732 31.7855 20.5355C32.7232 19.5979 33.25 18.3261 33.25 17C33.25 16.0111 32.9568 15.0444 32.4074 14.2222C31.8579 13.3999 31.0771 12.759 30.1634 12.3806C29.2498 12.0022 28.2445 11.9031 27.2746 12.0961C26.3046 12.289 25.4137 12.7652 24.7145 13.4645C24.0152 14.1637 23.539 15.0546 23.3461 16.0246C23.1532 16.9945 23.2522 17.9998 23.6306 18.9134C24.009 19.8271 24.6499 20.6079 25.4722 21.1574ZM26.8611 14.9213C27.2722 14.6466 27.7556 14.5 28.25 14.5C28.913 14.5 29.5489 14.7634 30.0178 15.2322C30.4866 15.7011 30.75 16.337 30.75 17C30.75 17.4945 30.6034 17.9778 30.3287 18.3889C30.054 18.8001 29.6635 19.1205 29.2067 19.3097C28.7499 19.4989 28.2472 19.5484 27.7623 19.452C27.2773 19.3555 26.8319 19.1174 26.4822 18.7678C26.1326 18.4181 25.8945 17.9727 25.798 17.4877C25.7016 17.0028 25.7511 16.5001 25.9403 16.0433C26.1295 15.5865 26.45 15.196 26.8611 14.9213Z"
                      fill="#614CE1"
                    />
                  </svg>
                  Google Ranking Specialist
                </button>
              </h4>
            </div>          
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.7878 37.4126C20.935 37.4708 21.0919 37.5005 21.2503 37.5001C21.5322 37.4984 21.8053 37.4015 22.0253 37.2251L28.2753 32.2251C28.4226 32.1087 28.5418 31.9606 28.624 31.7918C28.7062 31.623 28.7494 31.4378 28.7503 31.2501V21.7626L33.4753 17.0501C34.7564 15.7761 35.7718 14.2605 36.4628 12.5911C37.1537 10.9217 37.5064 9.13179 37.5003 7.32508V5.00008C37.5003 4.33704 37.2369 3.70115 36.768 3.23231C36.2992 2.76347 35.6633 2.50008 35.0003 2.50008H32.6753C30.8686 2.49399 29.0786 2.84664 27.4092 3.53757C25.7398 4.22849 24.2242 5.24396 22.9503 6.52508L18.2378 11.2501H8.75026C8.56148 11.2524 8.37569 11.2975 8.20682 11.3819C8.03796 11.4664 7.89041 11.588 7.77526 11.7376L2.77526 17.9876C2.63575 18.1605 2.54483 18.3674 2.51188 18.5871C2.47892 18.8068 2.50512 19.0314 2.58776 19.2376C2.6694 19.4424 2.80375 19.6219 2.97718 19.758C3.1506 19.8941 3.35694 19.982 3.57526 20.0126L12.3253 21.2626L12.6753 18.7626L6.08776 17.8251L9.35026 13.7501H18.7503C18.9148 13.751 19.0779 13.7195 19.2301 13.6573C19.3824 13.5951 19.521 13.5034 19.6378 13.3876L24.7253 8.30008C25.7665 7.25178 27.0052 6.42036 28.3698 5.85392C29.7344 5.28748 31.1978 4.99727 32.6753 5.00008H35.0003V7.32508C35.0031 8.80257 34.7129 10.266 34.1464 11.6306C33.58 12.9952 32.7486 14.2339 31.7003 15.2751L26.6128 20.3626C26.4969 20.4794 26.4053 20.6179 26.343 20.7702C26.2808 20.9225 26.2493 21.0856 26.2503 21.2501V30.6501L22.2003 33.9126L21.2628 27.3251L18.7628 27.6751L20.0128 36.4251C20.0434 36.6434 20.1312 36.8497 20.2673 37.0232C20.4034 37.1966 20.583 37.3309 20.7878 37.4126ZM9.11037 29.115L19.1071 19.1183L20.8749 20.886L10.8781 30.8828L9.11037 29.115Z"
                      fill="#614CE1"
                    />
                  </svg>
                  Google SEO Expert
                </button>
              </h4>
            </div>          
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="">
          <p className="disc">Zammy Zaif is an best google SEO Expert from India residing in <a className="zama" href="https://g.page/r/CXeRrxmikuPtEBM/review" target="_blank">Tirunelveli</a>, Tamilnadu who has had phenomenal success with SEO, especially placing first on Google for a competitive term like <b>"Google Ranking Expert."</b></p>
          <p className="disc">He achieved this world-class position in a short period of time since he is a dedicated SEO specialist and also because of his amazing hard work and smart work. When Google PageRank first appeared on the scene, Zammy Zaif began his profession in SEO around the same time. He rapidly understood that Search Engine Optimization will play a significant role in his professional future.</p>
          <p className="disc">His huge achievement came only after experiencing a lot of suffering and hardship. People used to call Zammy a "<b>Computer Genius</b>" when he was a kid. He had about 15 cousins in his house because he belonged to a joint family. When all of his cousins just learned how to play games on the computer, little Zammy performed more than that. He used to modify the computer password that his uncle had set in order to prevent the youngsters from using it. He was the naughty one in his family, changing the password every time his uncle uncovered it.</p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape03png}
          alt="service"
          className="two"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area section-bg">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-5 col-md-5 pr--50 pr_md--0 pr_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutChildZammypng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            {" "}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px)",
                opacity: 1,
                visibility: "inherit"
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                  opacity: 1,
                  visibility: "inherit"
                }}
              >
                Zammy Zaif in his Early Childhood
              </div>
            </div>
          </h3>
          <p className="disc">
          He started using a computer at the age of nine and it was then that he aspired to become a computer engineer. Young Zammy reasoned that because a computer is an electronic machine, obtaining a Diploma in Electronics and Communication Engineering would help him reach his goal and he enrolled in a college for the same.
          </p>
          <p className="disc">
          Later on, he discovered that he needed to major in Information Technology or Computer Science Engineering in order to get the position he had always aspired to. But it was too late for him to change his major and he had to drop out in the third year influenced by financial difficulties.</p>
          <p className="disc">
          Following that, he enrolled in a three-month hardware and networking certification course. Over time, he developed into an expert in his area and he attracted consumers from all over the world. He used his hard-earned money to re-enrol in the same engineering course, which he finished successfully the following year with a different batch.</p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
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
  </div>
</div>

<div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            {" "}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px)",
                opacity: 1,
                visibility: "inherit"
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                  opacity: 1,
                  visibility: "inherit"
                }}
              >
                Overseas Life of Zammy
              </div>
            </div>
          </h3>
          <p className="disc">
          In the year 2008, Zammy, a fresher, launched Hopes Infosys to provide hardware and networking services. Later, he started blogging and learned the concepts of web design and SEO. Due to his financial difficulties and family condition, he began to work for other companies in foreign countries. At first, he relocated to Dubai for a company and began his overseas life there. Meanwhile, he learned more about search engine optimization, blogging, content writing, email marketing and internet marketing over time.
          </p>
          <p className="disc">
          Following the contract from Dubai, he returned to India and formally established his own company, Bams Technologies. With a handful of employees in Tirunelveli in January 2015, began to work for many companies and did several independent projects in different countries, including web designing, web development and SEO. In Oman, he assisted a prominent firm in ranking #1 for the term "Hydraulic Spare - OMAN," which is still the case. He completed multiple projects in Myanmar and several other projects in the United States, including Customer Relationship Management (CRM) and Content Management System (CMS) software services.</p>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 pl--50 pl_md--0 pl_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutDubaiZammypng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service"
          className="five"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="three"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area section-bg">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-5 col-md-5 pr--50 pr_md--0 pr_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutZammy1png}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <span className="pre skew-up" style={{ opacity: 1 }}>
            Google Ranking Expert
          </span>
          <h2 className="title split-collab" style={{ opacity: 1 }}>
              Corporate Entity
          </h2>
          <p className="disc">
          In 2016, as he was struggling due to some family issues, he once again had to set about his overseas voyage and this time he flew to Bahrain. In Bahrain, he designed a website for an advertising firm that ranked first on Google in the nation. In Qatar, he has also worked for firms such as Milano Trading and Venture Partner. While overseas, he never abandoned his own firm, Bams Technologies and worked on various projects in Germany and the United Kingdom under the name of his own organisation.
          </p>
          <p className="disc">
          Regardless of the fact that his clients and other employers thought of him as a successful and effective SEO expert, he had always desired to establish his own corporate firm.</p>
          <p className="disc">
          Zammy Zaif's company eventually struck gold in 2019. On May 1, Labour Day, he started Bams Technologies Private Limited in Erode and Trivandrum alongside Suresh Kumar as a co-founder.</p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
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
  </div>
</div>

<div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            {" "}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px)",
                opacity: 1,
                visibility: "inherit"
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px)",
                  opacity: 1,
                  visibility: "inherit"
                }}
              >
                Dream, Struggle, Perseverance
              </div>
            </div>
          </h3>
          <p className="disc">
          BAMS stands for "Business Administration and Management Services," respectively.
          </p>
          <p className="disc">
          He founded this company to pursue his dream project, a "Next Generation Social Media App," while also doing tasks such as web designing, web development, app development, digital marketing and other IT services. He spent almost 2 million Indian rupees on his dream project and ultimately, the great Bio War arrived in his life with the name Covid-19 as Corona; the pandemic convulsed the globe and the firm was forced to cease down. Zammy is a committed person who never quits. He will stop at nothing to achieve a goal or a purpose. His long-term goal of creating a next-generation social media app is served by his short-term goal of acquiring the sufficient amount of funds required for the same. And for which, he is utilizing the SEO platform as an economic resource.</p>
          <p className="disc">
          No one has ever achieved success in a single go, they must have had many failed attempts before actually reaching their goals. Zammy’s case is just the same. He is a true inspiration for people who have failed in their lives.</p>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 pl--50 pl_md--0 pl_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutGoggleRankExpertpng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service"
          className="five"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="three"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area section-bg">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-5 col-md-5">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutArtOfmoneypng}
              width={350}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            Mind Map – A Success Prototype
          </h3>
          <p className="disc">
          Even though he is a person who has achieved many things in his life at a very young age, he considers himself as just an entrepreneur who is in the initial stage of building teams. His dream is to build a territory of his own where he has complete authority, also he has to bring his business to a supreme level in which it remains unaffected and continues to run successfully even if he makes himself unavailable for some duration of time.
          </p>
          <p className="disc">
          He believes that a successful businessman is someone who has achieved immense success also at the same time enormous wealth through many years of expertise and extreme passionate effort. He wants to become wealthy as well as a powerful person in his particular business or industry. He aims to attain more leads, revenue and reputation in the long run and he knows exactly what goes into it. In order to achieve this ultimate goal and be more successful in his terms, Zammy has created a Mind Map that helps in analysing himself to see where he stands in the journey of being a successful businessman.</p>
          <p className="disc">
          He has modelled this mind map as a "success prototype" and observes the analysis process as an Art of Attracting Money towards us.</p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape03png}
          alt="service"
          className="one"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="three"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area bg-dark-border-radious-2">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list white-text">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
              Zammy's Global Recognition
          </h3>
          <p className="disc">
          Since implementing this in his own life, he achieved the world level Google ranking for the keyword "Google Ranking Expert" and has rapidly made a brand name for himself. He has come a long way and gained many recognitions from all over the world. He is a key person in the Malaysia South India Chamber of Commerce and they designated him as the co-ordinator. He achieved a lifelong membership in a Canadian Community called "Landed for Success". Zammy Zaif is the first and the only member from India who has attained this privilege.
          </p>
          <p className="disc">
          Zammy finds this mind map very beneficial and has not only applied this strategy personally but has also helped many other people from small, mid-sized to large businessmen. He pitched his unique success mantra to all the ones who were failing in their businesses and has helped many businessmen who were on the verge of closing down.</p>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 pl--50 pl_md--0 pl_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutGoggleRecognitionpng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={aboutShape01png}
          alt="service"
          className="seven"
        />
        <img
          src={aboutShape02png}
          alt="service"
          className="one"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area section-bg">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-5 col-md-5 pr--50 pr_md--0 pr_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutBusinessMentorpng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            Zammy - Business Mentor
          </h3>
          <p className="disc">
          He has also been a mentor to entrepreneurs who had just started a company and later found that things weren't working out the way they thought it would be. He has been a great help in empowering several businesspersons who were in business for more than 20 years and still seemed struggling. Many business tycoons who were already in a good position in their industry, hoping to take it to the next level had approached Zammy to gain valuable advice from him.
          </p>
          <p className="disc">
          When he first started hosting webinars, a minimum of 70 people would show up for each session. Following that, when he began professionally delivering sessions twice a month, exclusively for businesspeople, a minimum of 15 individuals showed up for each session.</p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service"
          className="one"
        />
        <img
          src={serviceShape01png}
          alt="service"
          className="three"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            A Great Public Speaker
          </h3>
          <p className="disc">
          His workshops are mainly based on topics “Money Making, Business Growth, Secret of Success and The Art of Attracting Money.” Whether if you are a person who is taking baby steps in your business or a person who is planning to take a big leap in your business, Zammy can guide you through, to reach great success. You can have a look at the testimonial videos from the benefitted businesspersons on his Instagram, go search him: googlerankingexpert.
          </p>
          <p className="disc">
          He has also been taking SEO lessons that he learned along the way. Many enthusiasts who seek opportunities and aspirants who wish to start a career in SEO have joined the course to learn from Zammyand they all call him “Master in SEO.”</p>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 pl--50 pl_md--0 pl_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutGreatPublicSpeakerpng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service"
          className="five"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="seven"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area section-bg">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-5 col-md-5 pr--50 pr_md--0 pr_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutOnlinePresencepng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h3 className="title split-collab" style={{ opacity: 1 }}>
            Zammy's Online Presence
          </h3>
          <p className="disc">
          Zammy has always tried to impart his knowledge to people in different ways and he has always been such a great public speaker. For this, he makes use of many digital platforms to reach a large audience. He has made his online presence felt in MSN Messenger, Yahoo Messenger, Tamil Flash Chatrooms, Nimbus Chat, Mig33 Chat, Qeep Chat (he has been a qeeper for nearly 8 years), Bigo Live (he has nearly 10k followers), MICO and Hago, from its very beginning itself.
          </p>
          <p className="disc">
          He is also a Telegram Dominator with 40+ job groups each with 40,000 members, where he spends his own money to disseminate information about job openings. He has also made it into the clubhouse, where he's the administrator of two clubs: "Tamil Global Business," which has 5,000 members and "Tamil Business Coaching," which has 1000 members. He is also the leader of "Vere Level Business" (VLB) group, which has 12,500 members. He has a tremendous fan base in clubhouse, with 1.5k followers and anytime he gives a talk there, at least 500 people show up to listen to him.</p>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service"
          className="one"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="three"
        />
      </div>
    </div>
  </div>
</div>

<div className="rts-product-area">
  <div className="container">
    <div className="row service-relative align-items-center single-product-list pt--125 pb--125 pb_md--80 pb_sm--30 pt_md--80 pt_sm--50">
      <div className="col-lg-7 col-md-6">
        <div className="portfolio-content-wrapper-list">
          <h2 className="title split-collab" style={{ opacity: 1 }}>
            SEO Strategy of Zammy Zaif
          </h2>
          <p className="disc">
          Without having very deep pockets and spending a lot of money, every firm can increase its sales and profits. Zammy demonstrates how to leverage SEO to enhance organic traffic, lead generation and conversion. He is the most trusted Google Ranking SEO Expert as recognised by Google itself who is capable of ranking your business on the first page first rank of Google search results. He is a devoted SEO professional with more than a decade of vast knowledge in this sector.
          </p>
          <p className="disc">
          He begins by learning about his clients’ targeted audience, potential customers, competitors and most importantly, their business culture. He then creates a customised SEO strategy that focuses on meeting his clients' needs in order to generate income for them. His unique approach puts them miles ahead of the competition, allowing them to establish trust and credibility among the public while also establishing their company as a leader in that particular field.</p>
          <p className="disc">
          Zammy Zaif keeps a keen eye on every little detail and tiny aspect of search engine optimization with his extensive learning expertise. He is always up to date with the latest Google ranking factors and algorithms. He will go to any extent to achieve the desired organic result. Zammy Zaif is unquestionably a man of action, as evidenced by the end outcome. So Everyone expects that in this 2022 Zammy will be the world's leading seo Expert.</p>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 pl--50 pl_md--0 pl_sm--0">
        <div className="large-thumbnail">
          <div className="thumbnail">
            <img
              src={aboutSeoStrategypng}
              width={450}
              alt="product"
            />
          </div>
        </div>
      </div>
      <div className="service--shape">
        <img
          src={serviceShape04png}
          alt="service"
          className="five"
        />
        <img
          src={serviceShape06png}
          alt="service"
          className="two"
        />
      </div>
    </div>
  </div>
</div>

  {/* progress area start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  {/* progress area end */}
  {/* jquery js */}
  {/* contact form js */}
</>

        </>

  );
};

export default Home;