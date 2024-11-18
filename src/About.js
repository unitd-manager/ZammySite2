import React from "react";
// import { Link } from "react-router-dom";
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
          <h1 className="title skew-up-2" style={{ opacity: 1 }}>
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
                About
              </div>
            </div>
            <br />
            <span>
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
                  Zammy Zaif
                </div>
              </div>
            </span>
          </h1>
        </div>
        {/* banner main inner contact areas end */}
      </div>
    </div>
  </div>
</div>

<div className="rts-working-process-area rts-section-gap about">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="title-style-one-center">
          <span className="pre skew-up" style={{ opacity: 1 }}>
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
                About Zammy Zaif
              </div>
            </div>
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
      </div>
    </div>
    <div className="row mt--50">
      <div className="col-lg-6 pr--100 pr_md--0 pr_sm--0">
        <div className="accordion-area-4">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
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
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
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
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
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
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
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
              </h2>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
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
              </h2>
            </div>          
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
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
              </h2>
            </div>          

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
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
              </h2>
            </div>          
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
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
              </h2>
            </div>          
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="">
          <p className="">Zammy Zaif is an best google SEO Expert from India residing in <a className="zama" href="https://g.page/r/CXeRrxmikuPtEBM/review" target="_blank">Tirunelveli</a>, Tamilnadu who has had phenomenal success with SEO, especially placing first on Google for a competitive term like <b>"Google Ranking Expert."</b></p>
          <p className="">He achieved this world-class position in a short period of time since he is a dedicated SEO specialist and also because of his amazing hard work and smart work. When Google PageRank first appeared on the scene, Zammy Zaif began his profession in SEO around the same time. He rapidly understood that Search Engine Optimization will play a significant role in his professional future.</p>
          <p className="">His huge achievement came only after experiencing a lot of suffering and hardship. People used to call Zammy a "<b>Computer Genius</b>" when he was a kid. He had about 15 cousins in his house because he belonged to a joint family. When all of his cousins just learned how to play games on the computer, little Zammy performed more than that. He used to modify the computer password that his uncle had set in order to prevent the youngsters from using it. He was the naughty one in his family, changing the password every time his uncle uncovered it.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  <div className="rts-section-gap rts-pricing-area-one bg_white">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-style-one-center">
            <span className="pre">Our main services</span>
            <h4 className="title skew-up">
              Our solutions that help <br />
              you grow up
            </h4>
          </div>
        </div>
      </div>
      <div className="row g-48 mt--10">
        <div className="col-lg-3 col-md-6 col-sm-12">
          {/* single pricing area start */}
          <div className="single-pricing-area-start">
            {/* pricing -top artea start */}
            <div className="pricing-top-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={31}
                  height={30}
                  viewBox="0 0 31 30"
                  fill="none"
                >
                  <path
                    d="M15.5 0C12.5333 0 9.63319 0.879735 7.16645 2.52796C4.69972 4.17618 2.77713 6.51886 1.64181 9.25975C0.506499 12.0006 0.209449 15.0166 0.788228 17.9264C1.36701 20.8361 2.79562 23.5088 4.8934 25.6066C6.99119 27.7044 9.66394 29.133 12.5737 29.7118C15.4834 30.2906 18.4994 29.9935 21.2403 28.8582C23.9811 27.7229 26.3238 25.8003 27.972 23.3336C29.6203 20.8668 30.5 17.9667 30.5 15C30.5 11.0218 28.9197 7.20644 26.1066 4.3934C23.2936 1.58035 19.4783 0 15.5 0ZM28 13.75H16.75V2.5625C19.6302 2.83718 22.3259 4.10248 24.3775 6.14262C26.429 8.18275 27.7093 10.8714 28 13.75ZM14.775 27.5C11.6092 27.3528 8.61755 26.0085 6.40526 23.7393C4.19296 21.47 2.92522 18.4451 2.85852 15.2766C2.79181 12.1081 3.93112 9.03254 6.04595 6.67217C8.16078 4.3118 11.0932 2.84285 14.25 2.5625V13.8125C14.25 14.4755 14.5134 15.1114 14.9822 15.5803C15.4511 16.0491 16.087 16.3125 16.75 16.3125H28C27.6674 19.5244 26.1048 22.483 23.6395 24.5684C21.1743 26.6539 17.9976 27.7045 14.775 27.5Z"
                    fill="#614CE1"
                  />
                </svg>
              </div>
              <h6 className="title">SEO Audits</h6>
            </div>
            {/* pricing -top artea end */}
            <div className="pricing-body">
              <p className="disc">
              We provide an analyzed SEO audit of website's overall performance,
             adhering to Google protocols for technical on-page and off-page SEO.
              </p>
         
              <a href="service-single.html" className="rts-btn btn-primary">
                Get started
              </a>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {/* single pricing area start */}
          <div className="single-pricing-area-start active">
            {/* pricing -top artea start */}
            <div className="pricing-top-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={37}
                  height={32}
                  viewBox="0 0 37 32"
                  fill="none"
                >
                  <path
                    d="M27.875 0H9.12503L0.644775 11.3068L18.5 31.9086L36.3553 11.3068L27.875 0ZM32.25 10H25.4429L20.7554 2.5H26.625L32.25 10ZM11.3777 12.5L16.0697 25.2875L4.98753 12.5H11.3777ZM14.0402 12.5H22.96L18.4988 24.6515L14.0402 12.5ZM14.5058 10L18.5 3.60838L22.4947 10H14.5058ZM25.6227 12.5H32.0125L20.9284 25.2893L25.6227 12.5ZM10.375 2.5H16.2447L11.5572 10H4.75003L10.375 2.5Z"
                    fill="#614CE1"
                  />
                </svg>
              </div>
              <h6 className="title">Local SEO</h6>
            </div>
            {/* pricing -top artea end */}
            <div className="pricing-body">
            <p className="disc">
           We offer local SEO services,&nbsp;optimize your website for relevant audiences,
            &nbsp;increase your visibility, and&nbsp;sales in local search results.
           </p>

             
              <a href="service-single.html" className="rts-btn btn-primary">
                Get started
              </a>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {/* single pricing area start */}
          <div className="single-pricing-area-start active">
            {/* pricing -top artea start */}
            <div className="pricing-top-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={41}
                  height={30}
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M29.25 5L23 9.6875V17.8125L19.25 15L13 19.6875V27.8125L9.25 25L3 29.6875V37.5H5.5V30.9375L9.25 28.125L13 30.9375V37.5H15.5V20.9375L19.25 18.125L23 20.9375V37.5H25.5V10.9375L29.25 8.125L33 10.9375V37.5H35.5V9.6875L29.25 5Z"
                    fill="#614CE1"
                  />
                </svg>
              </div>
              <h6 className="title">Increasing Keywords Rank</h6>
            </div>
            {/* pricing -top artea end */}
            <div className="pricing-body">
              <p className="disc">
              By our analyzed keyword ranking services, increase website's traffic,
              generate more leads, sales, and enhance potential credibility.
              </p>
             
              <a href="service-single.html" className="rts-btn btn-primary">
                Get started
              </a>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          {/* single pricing area start */}
          <div className="single-pricing-area-start">
            {/* pricing -top artea start */}
            <div className="pricing-top-area">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
                  <path d="M2 22.5V30H9.5L27.1 12.4L19.6 4.9L2 22.5Z" fill="#614CE1"/>
                  <path d="M30.7 8.8C31.1 8.4 31.1 7.8 30.7 7.4L26.6 3.3C26.2 2.9 25.6 2.9 25.2 3.3L22.6 5.9L30.1 13.4L30.7 8.8Z" fill="#614CE1"/>
                </svg>
              </div>
              <h6 className="title">Content Writer</h6>
            </div>
            {/* pricing -top artea end */}
            <div className="pricing-body">
              <p className="disc">
              We write an informative SEO-friendly content,
              targeting your audience and optimized for search engines,
              improving website's ranking.
              </p>
             
              <a href="service-single.html" className="rts-btn btn-primary">
                Get started
              </a>
            </div>
          </div>
          {/* single pricing area end */}
        </div>
      </div>
    </div>

    {/* <div className="rts-subscribe-area-one rts-section-gapBottom" style={{ marginTop: 150 }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="subscribe-main-wrapper-one">
          <div className="title-style-one-center">
            <h4 className="title split-collab">
              Looking for More 
              Traffic & Leads?
            </h4>
            <p className="disc">
              We have helped 38 top brands in the world and 250+ local brands for the last 14 years.
            </p>
            <form action="#" >
              <div className="input-group form-group">
                <input
                  type="text"
                  placeholder="yourwebsite.com"
                  required
                  className="input-box"
                />
                <i className="fa-light fa-globe" />
              </div>

            </form>
            <form action="#">

              <div className="input-group form-group">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                  className="input-box"
                />
                <i className="fa-light fa-phone" />
              </div>
            </form>
            <form action="#">
               <div className="input-group ">
                <input
              type="email"
                placeholder="Your Email Address"
                required
               className="input-box"
               />
              <i className="fa-light fa-envelope" />
               </div>

             <button className="rts-btn btn-primary">
              Start a SEO Audit
            </button>
             </form>

          </div>
          <div className="shape-area">
            <img className="one" src={subscribtionshape01png} alt="subscribtion" />
            <img className="two" src={subscribtionshape02png} alt="subscribtion" />
            <img className="three" src={subscribtionshape03png} alt="subscribtion" />
            <img className="four" src={subscribtionshape04png} alt="subscribtion" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
<div class="rts-appoinment-area rts-section-gap bg-dark-border-radious-2" style={{ marginTop: 150 }}>
        <div class="container">
            <div class="row align-items-center justify-content-md-center">
                <div class="col-lg-6 col-md-10">
                
                    <div class="appoinment-wrapper-one-left">
                        <h2 class="title split-collab"> Looking for More  <br/>
                        Traffic & Leads?</h2>
                        <p class="disc"> We have helped 38 top brands in the world and 250+ local brands for the last 14 years.</p>
                        <div class="feature-area-wrapper">
                            <div class="single-feature">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewbox="0 0 32 32" fill="none">
                                        <g clip-path="url(#clip0_724_8705)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 5H25C25.53 5.00153 26.0378 5.21274 26.4125 5.58748C26.7873 5.96222 26.9985 6.47004 27 7V12H25V7H22V10H10V7H7V28H16V30H7C6.47004 29.9985 5.96222 29.7873 5.58748 29.4125C5.21274 29.0378 5.00153 28.53 5 28V7C5.00153 6.47004 5.21274 5.96222 5.58748 5.58748C5.96222 5.21274 6.47004 5.00153 7 5H10V4C10.0015 3.47004 10.2127 2.96222 10.5875 2.58748C10.9622 2.21274 11.47 2.00153 12 2H20C20.53 2.00153 21.0378 2.21274 21.4125 2.58748C21.7873 2.96222 21.9985 3.47004 22 4V5ZM12 8H20V4H12V8ZM29.2768 17.1325C29.7534 18.0131 30.002 18.9991 30 20.0004C29.9996 20.8427 29.8212 21.6755 29.4765 22.4441C29.1318 23.2127 28.6287 23.8998 28 24.4604V32.0004L24 30.1068L20 32.0004V24.4604C19.2536 23.7928 18.6862 22.9491 18.3495 22.0061C18.0127 21.063 17.9174 20.0507 18.072 19.0614C18.2267 18.0721 18.6266 17.1372 19.2351 16.342C19.8437 15.5467 20.6416 14.9165 21.5561 14.5086C22.4706 14.1007 23.4727 13.9282 24.4709 14.0068C25.4692 14.0854 26.4319 14.4126 27.2713 14.9585C28.1108 15.5045 28.8002 16.2518 29.2768 17.1325ZM24 27.8937L26 28.8404V25.6504C24.7075 26.1172 23.2925 26.1172 22 25.6504V28.8404L24 27.8937ZM21.7777 23.3263C22.4355 23.7658 23.2089 24.0004 24 24.0004C25.0605 23.9992 26.0772 23.5774 26.8271 22.8275C27.577 22.0776 27.9988 21.0609 28 20.0004C28 19.2093 27.7654 18.4359 27.3259 17.7781C26.8864 17.1203 26.2617 16.6076 25.5307 16.3049C24.7998 16.0021 23.9956 15.9229 23.2197 16.0773C22.4437 16.2316 21.731 16.6126 21.1716 17.172C20.6122 17.7314 20.2312 18.4441 20.0769 19.22C19.9225 19.996 20.0017 20.8002 20.3045 21.5311C20.6072 22.262 21.1199 22.8868 21.7777 23.3263Z" fill="#36D659"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 5H25C25.53 5.00153 26.0378 5.21274 26.4125 5.58748C26.7873 5.96222 26.9985 6.47004 27 7V12H25V7H22V10H10V7H7V28H16V30H7C6.47004 29.9985 5.96222 29.7873 5.58748 29.4125C5.21274 29.0378 5.00153 28.53 5 28V7C5.00153 6.47004 5.21274 5.96222 5.58748 5.58748C5.96222 5.21274 6.47004 5.00153 7 5H10V4C10.0015 3.47004 10.2127 2.96222 10.5875 2.58748C10.9622 2.21274 11.47 2.00153 12 2H20C20.53 2.00153 21.0378 2.21274 21.4125 2.58748C21.7873 2.96222 21.9985 3.47004 22 4V5ZM12 8H20V4H12V8ZM29.2768 17.1325C29.7534 18.0131 30.002 18.9991 30 20.0004C29.9996 20.8427 29.8212 21.6755 29.4765 22.4441C29.1318 23.2127 28.6287 23.8998 28 24.4604V32.0004L24 30.1068L20 32.0004V24.4604C19.2536 23.7928 18.6862 22.9491 18.3495 22.0061C18.0127 21.063 17.9174 20.0507 18.072 19.0614C18.2267 18.0721 18.6266 17.1372 19.2351 16.342C19.8437 15.5467 20.6416 14.9165 21.5561 14.5086C22.4706 14.1007 23.4727 13.9282 24.4709 14.0068C25.4692 14.0854 26.4319 14.4126 27.2713 14.9585C28.1108 15.5045 28.8002 16.2518 29.2768 17.1325ZM24 27.8937L26 28.8404V25.6504C24.7075 26.1172 23.2925 26.1172 22 25.6504V28.8404L24 27.8937ZM21.7777 23.3263C22.4355 23.7658 23.2089 24.0004 24 24.0004C25.0605 23.9992 26.0772 23.5774 26.8271 22.8275C27.577 22.0776 27.9988 21.0609 28 20.0004C28 19.2093 27.7654 18.4359 27.3259 17.7781C26.8864 17.1203 26.2617 16.6076 25.5307 16.3049C24.7998 16.0021 23.9956 15.9229 23.2197 16.0773C22.4437 16.2316 21.731 16.6126 21.1716 17.172C20.6122 17.7314 20.2312 18.4441 20.0769 19.22C19.9225 19.996 20.0017 20.8002 20.3045 21.5311C20.6072 22.262 21.1199 22.8868 21.7777 23.3263Z" fill="white" fill-opacity="0.2"></path>
                                        </g>
                                        <defs>
                                            <clippath id="clip0_724_8705">
                                                <rect width="32" height="32" fill="white"></rect>
                                            </clippath>
                                        </defs>
                                    </svg>
                                </div>
                                <p>Strategy Call</p>
                            </div>
                            <div class="single-feature">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewbox="0 0 33 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7501 9.67433C20.9097 8.57942 18.8082 8.00102 16.6668 8.00003C13.4853 8.00365 10.4351 9.2691 8.18549 11.5187C5.93584 13.7684 4.67039 16.8185 4.66677 20H2.66677C2.66268 17.4879 3.33574 15.021 4.61513 12.859C5.89451 10.697 7.73294 8.91981 9.93699 7.71434C12.1411 6.50886 14.6293 5.91969 17.1399 6.0088C19.6504 6.09791 22.0906 6.86202 24.2037 8.22073L22.7501 9.67433ZM28.6668 9.414L27.2527 8L18.6858 16.5669C18.0761 16.1996 17.3785 16.0037 16.6668 16C15.8756 16 15.1023 16.2346 14.4445 16.6741C13.7867 17.1136 13.274 17.7384 12.9712 18.4693C12.6685 19.2002 12.5893 20.0044 12.7436 20.7804C12.898 21.5563 13.2789 22.269 13.8383 22.8284C14.3977 23.3878 15.1105 23.7688 15.8864 23.9231C16.6623 24.0775 17.4666 23.9983 18.1975 23.6955C18.9284 23.3928 19.5531 22.8801 19.9926 22.2223C20.4322 21.5645 20.6668 20.7911 20.6668 20C20.663 19.2882 20.4672 18.5906 20.0999 17.9809L28.6668 9.414ZM16.6668 22C16.2712 22 15.8845 21.8827 15.5556 21.6629C15.2267 21.4432 14.9704 21.1308 14.819 20.7654C14.6676 20.3999 14.628 19.9978 14.7052 19.6098C14.7824 19.2219 14.9728 18.8655 15.2526 18.5858C15.5323 18.3061 15.8886 18.1156 16.2766 18.0384C16.6645 17.9613 17.0667 18.0009 17.4321 18.1522C17.7976 18.3036 18.1099 18.56 18.3297 18.8889C18.5495 19.2178 18.6668 19.6044 18.6668 20C18.6662 20.5302 18.4552 21.0386 18.0803 21.4135C17.7054 21.7885 17.197 21.9994 16.6668 22ZM30.6668 20C30.6654 17.3279 29.8912 14.7133 28.4377 12.4712L26.9925 13.9165C28.0882 15.7566 28.6666 17.8584 28.6668 20H30.6668Z" fill="#36D659"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7501 9.67433C20.9097 8.57942 18.8082 8.00102 16.6668 8.00003C13.4853 8.00365 10.4351 9.2691 8.18549 11.5187C5.93584 13.7684 4.67039 16.8185 4.66677 20H2.66677C2.66268 17.4879 3.33574 15.021 4.61513 12.859C5.89451 10.697 7.73294 8.91981 9.93699 7.71434C12.1411 6.50886 14.6293 5.91969 17.1399 6.0088C19.6504 6.09791 22.0906 6.86202 24.2037 8.22073L22.7501 9.67433ZM28.6668 9.414L27.2527 8L18.6858 16.5669C18.0761 16.1996 17.3785 16.0037 16.6668 16C15.8756 16 15.1023 16.2346 14.4445 16.6741C13.7867 17.1136 13.274 17.7384 12.9712 18.4693C12.6685 19.2002 12.5893 20.0044 12.7436 20.7804C12.898 21.5563 13.2789 22.269 13.8383 22.8284C14.3977 23.3878 15.1105 23.7688 15.8864 23.9231C16.6623 24.0775 17.4666 23.9983 18.1975 23.6955C18.9284 23.3928 19.5531 22.8801 19.9926 22.2223C20.4322 21.5645 20.6668 20.7911 20.6668 20C20.663 19.2882 20.4672 18.5906 20.0999 17.9809L28.6668 9.414ZM16.6668 22C16.2712 22 15.8845 21.8827 15.5556 21.6629C15.2267 21.4432 14.9704 21.1308 14.819 20.7654C14.6676 20.3999 14.628 19.9978 14.7052 19.6098C14.7824 19.2219 14.9728 18.8655 15.2526 18.5858C15.5323 18.3061 15.8886 18.1156 16.2766 18.0384C16.6645 17.9613 17.0667 18.0009 17.4321 18.1522C17.7976 18.3036 18.1099 18.56 18.3297 18.8889C18.5495 19.2178 18.6668 19.6044 18.6668 20C18.6662 20.5302 18.4552 21.0386 18.0803 21.4135C17.7054 21.7885 17.197 21.9994 16.6668 22ZM30.6668 20C30.6654 17.3279 29.8912 14.7133 28.4377 12.4712L26.9925 13.9165C28.0882 15.7566 28.6666 17.8584 28.6668 20H30.6668Z" fill="white" fill-opacity="0.2"></path>
                                    </svg>
                                </div>
                                <p>In-depth Audit</p>
                            </div>
                            <div class="single-feature">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewbox="0 0 33 32" fill="none">
                                        <path d="M23.3333 4L18.3333 7.75V14.25L15.3333 12L10.3333 15.75V22.25L7.33325 20L2.33325 23.75V30H4.33325V24.75L7.33325 22.5L10.3333 24.75V30H12.3333V16.75L15.3333 14.5L18.3333 16.75V30H20.3333V8.75L23.3333 6.5L26.3333 8.75V30H28.3333V7.75L23.3333 4Z" fill="#36D659"></path>
                                        <path d="M23.3333 4L18.3333 7.75V14.25L15.3333 12L10.3333 15.75V22.25L7.33325 20L2.33325 23.75V30H4.33325V24.75L7.33325 22.5L10.3333 24.75V30H12.3333V16.75L15.3333 14.5L18.3333 16.75V30H20.3333V8.75L23.3333 6.5L26.3333 8.75V30H28.3333V7.75L23.3333 4Z" fill="white" fill-opacity="0.2"></path>
                                    </svg>
                                </div>
                                <p>Growth Roadmap</p>
                            </div>
                        </div>
                    </div>
               
                </div>
                <div class="col-lg-6 col-md-10">
                    <form action="#" class="appoinment_form-1">
                        {/* <div class="signle-input">
                            <label for="name">Full name</label>
                            <input type="text" id="name" placeholder="Your Name"/>
                            <i class="fa-regular fa-user"></i>
                        </div> */}
                         <div class="signle-input">
                            <label for="website">Website</label>
                            <input type="url" id="website" placeholder="yourwebsite.com"/>
                            <i class="fa-light fa-globe"></i>
                        </div>
                        <div class="signle-input">
                            <label for="phone">Phone</label>
                            <input type="phone" id="phone" placeholder="Your phone"/>
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div class="signle-input">
                            <label for="email">Email address</label>
                            <input type="email" id="email" placeholder="Your email"/>
                            <i class="fa-light fa-envelope"></i>
                        </div>
                        <div class="signle-input">
                            <label for="name">Subject</label>
                            <input type="textarea" id="name" placeholder=" Type in your subject"/>
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <button class="rts-btn btn-primary-2">Enquiry Now</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="sape-area">
            <img class="one" src={ball1} alt="shape"/>
            <img class="two" src={ball2} alt="shape"/>
            <img class="three" src={ball3} alt="shape"/>
            <img class="four" src={ball4} alt="shape"/>
        </div>
    </div>

   
    <div className="shape-radious-image">
      <img
        src={pricingImage1}
        alt="marketing"
        className="img-1"
      />
      <img
        src={pricingImage2}
        alt="marketing"
        className="img-2"
      />
    </div>
  </div>
  {/* pricing area end */}
  {/* providing service area start */}
  
  <div className="providing-service-area-start-one rts-section-gap">
    <div className="container-2">
      <div className="row g-5 align-items-center single-service-row-1">
        <div className="col-lg-6">
          {/* service contant wrapper main one */}
          <div className="service-content-style-one">
            <h4 className="title split-collab">
            Google Ranking Services
            </h4>
            <p className="">
            For over a decade, Zammy Zaif has been consistently providing first-ranking SEO services. 
            Zammy's content is valuable and informative, directly related to Google's search engine ranking algorithms. 
            The content is structured and optimized to be easily indexed and crawled by search engines. 
            Through his expertise in Google ranking services, 
            Zammy has helped numerous websites to exhibits a high level of user engagement while enhancing 
            the website’s reputation and authority in their respective fields with social media shares,
             backlinks and reviews. As a result of his track record, Google has recognized Zammy Zaif as the World's Finest Google Ranking Expert in the featured snippet.
            </p>
            <button className="rts-btn btn-primary">
                  Get Start
                </button>
          </div>
          {/* service contant wrapper main one end */}
        </div>
        <div className="col-lg-6">
          <div className="image-area-service-1">
            <div className="thumbnail-service-1">
              <img src={service01jpg} alt="service-area" />
            </div>
            {/* <img
              src={service03png}
              alt="service"
              className="images-2 small"
              width={286}
            /> */}
          </div>
        </div>
      </div>
      <div className="row g-5 align-items-center mt--100 mt_sm--20">
        <div className="col-lg-6">
          <div className="image-area-service-1 bottom-1 d-flex justify-content-center align-items-center">
            <div className="our-video position-relative">
              <a href="https://www.youtube.com/watch?v=F1dRUHlZoLg" target="_blank" className="video-control js-popup-iframe">
                <img
                  src={service03png}
                  alt="service"
                  className="service-image img-fluid"
                  width={150} // Adjust width as needed
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pl--30 pl_md--15 pl_sm--15" >
          {/* service contant wrapper main one */}
          <div className="service-content-style-one">
            <h4 className="title split-collab">
            Bams Technologies inc
            </h4>
            <p className="disc">
            Since 2008, Bams Technologies has been providing exceptional 
            SEO services to companies worldwide. As a premier Google SEO service
             provider, we offer comprehensive SEO solutions to 
             all types of businesses locally, regionally and globally. 
             We specialize in Google SEO and customize
             SEO packages according to specific needs of our clients worldwide.
            </p>
            <button className="rts-btn btn-primary">
                  About Us
                </button>
          </div>
          {/* service contant wrapper main one end */}
        </div>
       
      </div>
    </div>
    <div className="shape-area">
      <img
        className="one"
        src={serviceShape01png}
        alt="Service_Shave"
      />
      <img
        className="two"
        src={serviceShape02png}
        alt="Service_Shave"
      />
      <img
        className="three"
        src={serviceShape03png}
        alt="Service_Shave"
      />
      <img
        className="four"
        src={serviceShape04png}
        alt="Service_Shave"
      />
      <img
        className="five"
        src={serviceShape05png}
        alt="Service_Shave"
      />
      <img
        className="six"
        src={serviceShape06png}
        alt="Service_Shave"
      />
    </div>
  </div>


  

  {/* providing service area end */}
  {/* rts about area  */}
  <div className="rts-about-area rts-section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-style-one-center">
            <span className="pre">A little about us</span>
            <h4 className="title skew-up">
              Unleashing the power of <br /> SEO tactics
            </h4>
          </div>
        </div>
      </div>
      <div className="row mt--70">
        <div className="col-lg-12">
          <div className="about-large-image-bg"></div>
        </div>
      </div>
      <div className="row g-5 plr--60 mt-dec-working-step plr_sm--0">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single working -process area start */}
          <div className="single-working-process">
            <h5 className="number">01</h5>
            <h3 className="title">Creating a strategy</h3>
            <p className="disc">
              Optimizing your website for each of the main components to put a
              good and fit in house strategy in place.
            </p>
          </div>
          {/* single working -process area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single working -process area start */}
          <div className="single-working-process">
            <h5 className="number">02</h5>
            <h3 className="title">Building your site</h3>
            <p className="disc">
              Optimizing your website for each of the main components to put a
              good and fit in house strategy in place.
            </p>
          </div>
          {/* single working -process area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single working -process area start */}
          <div className="single-working-process">
            <h5 className="number">03</h5>
            <h3 className="title">Promoting your site</h3>
            <p className="disc">
              Optimizing your website for each of the main components to put a
              good and fit in house strategy in place.
            </p>
          </div>
          {/* single working -process area end */}
        </div>
      </div>
      <div className="row plr--60 mt--80  plr_sm--15">
        <div className="col-lg-12 plr--50 plr_sm--15">
          <div className="step-down-text-process">
            <p className="disc">
              Our Company on helping you to make useful content more accessible
              with an utlimate goal for a good sharing profit as a content
              creator. We see more and more ads in search results and not enough
              care for the people who are actually creating content.
            </p>
            <div className="shape-area-img">
              <img
                className="one"
                src={aboutShape01png}
                alt="shape"
              />
              <img
                className="two"
                src={aboutShape02png}
                alt="shape"
              />
              <img
                className="three"
                src={aboutShape03png}
                alt="shape"
              />
              <img
                className="four"
                src={aboutShape04png}
                alt="shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style={{ paddingTop: 50, marginBottom :100 }} className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="starter-template">
                  {/* Navigation Tabs */}
                  <ul className="nav nav-tabs" id="seoTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link custom-nav-link active"
                        id="google-map-seo-tab"
                        data-toggle="tab"
                        href="#google-map-seo"
                        role="tab"
                        aria-controls="google-map-seo"
                        aria-selected="true"
                        
                      >
                        {/* <i className="fa fa-map"></i>  */}
                        SEO Ranking Expert
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        id="city-based-seo-tab"
                        data-toggle="tab"
                        href="#city-based-seo"
                        role="tab"
                        aria-controls="city-based-seo"
                        aria-selected="false"
                      >
                        {/* <i className="fa fa-city"></i> */}
                        SEO Writing Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        id="state-level-seo-tab"
                        data-toggle="tab"
                        href="#state-level-seo"
                        role="tab"
                        aria-controls="state-level-seo"
                        aria-selected="false"
                      >
                        {/* <i className="fa fa-map-signs"></i> */}
                         Website Ranking Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        id="country-level-seo-tab"
                        data-toggle="tab"
                        href="#country-level-seo"
                        role="tab"
                        aria-controls="country-level-seo"
                        aria-selected="false"
                      >
                        {/* <i className="fa fa-globe"></i> */}
                        Website Auditing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        id="global-seo-tab"
                        data-toggle="tab"
                        href="#global-seo"
                        role="tab"
                        aria-controls="global-seo"
                        aria-selected="false"
                      >
                        {/* <i className="fa fa-universal-access"></i> */}
                        SEO Ranking Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link custom-nav-link"
                        id="rank-in-gsm-tab"
                        data-toggle="tab"
                        href="#rank-in-gsm"
                        role="tab"
                        aria-controls="rank-in-gsm"
                        aria-selected="false"
                      >
                        {/* <i className="fa fa-universal-access"></i> */}
                         GMB Ranking Service
                      </a>
                    </li>
                  </ul>

                  {/* Tab Content */}
                  <div className="tab-content pt-4" id="seoTabContent">
                    {/* Google Map SEO Tab */}
                    <div
                      className="tab-pane fade show active"
                      id="google-map-seo"
                      role="tabpanel"
                      aria-labelledby="google-map-seo-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 mb-3">
                          <h3>Seo Ranking Expert</h3>
                          <p>
                            Zammy Zaif is an certified Google ranking SEO expert
                            with over a decade of experience in the digital
                            marketing industry. He specializes in Google search
                            engine optimization and has worked with various
                            industries globally, giving him unparalleled
                            insights into the nebulous and profound aspects of
                            SEO. Zammy's focus on providing measurable results
                            has helped him gain a reputation as a leader in the
                            Google SEO industry. He aims for perfection in every
                            task to meet his clients expectations, setting new
                            benchmarks with every completed project.
                          </p>
                          <button className="rts-btn btn-primary">
                            Get started
                           </button>
                        </div>

                        <div className="col-lg-6">
                          <div className="image-area-service-1  bottom-1">
                            <div className="thumbnail-service-1">
                              <img src={bestSeoExpert} alt="service-area" />
                            </div>
                            <div className="shape-area">
            {/* <img className="one" src={subscribtionshape01png} alt="subscribtion" /> */}
            {/* <img className="two" src={subscribtionshape02png} alt="subscribtion" /> */}
          {/* <img className="three" src={subscribtionshape03png} alt="subscribtion" /> */}
             <img className="four" src={subscribtionshape04png} alt="subscribtion" /> 
          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* City Based SEO Tab */}
                    <div
                      className="tab-pane fade"
                      id="city-based-seo"
                      role="tabpanel"
                      aria-labelledby="city-based-seo-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 mb-3">
                          <h3>Optimized Content Writing</h3>
                          <p>
                            With over a decade of experience, Zammy has mastered
                            the art of words by working with a wide range of
                            clients worldwide and specializing in offering
                            SEO-friendly content writing services. Using his
                            advanced professional writing skills he offers
                            custom writing solutions for SOPs, articles, blogs
                            and website content.
                          </p>
                          <p>
                            With thorough research and strategic use of
                            appropriate keywords targeting the relevant
                            audience, he creates unique and informative
                            optimized content for the Google search engine to
                            enhance your website’s visibility and rankings.
                          </p>
                          <button className="rts-btn btn-primary">
                            Get started
                           </button>
                        </div>
                        <div className="col-lg-6">
                          <div className="image-area-service-1  bottom-1">
                            <div className="thumbnail-service-1">
                              <img src={contentWritter} alt="service-area" />
                            </div>
                            <div className="shape-area">
            {/* <img className="one" src={subscribtionshape01png} alt="subscribtion" /> */}
            {/* <img className="two" src={subscribtionshape02png} alt="subscribtion" /> */}
          <img className="three" src={subscribtionshape03png} alt="subscribtion" />
            {/* // <img className="four" src={subscribtionshape04png} alt="subscribtion" />  */}
          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* State Level SEO Tab */}
                    <div
                      className="tab-pane fade"
                      id="state-level-seo"
                      role="tabpanel"
                      aria-labelledby="state-level-seo-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 mb-3">
                          <h3>Rank Your Website #1</h3>
                          <p>
                          Bams Technologies specializes in providing Google 1st rank SEO services for websites within 90-180 days, increasing organic traffic by 50% and CTR by 20%. With a skilled team that strictly adheres to all Google protocols to ensure website security, the best user experience, and unique content to enhance brand awareness, while achieving rankings on top pages. By effectively targeting the right audience using the AIDA strategy, conducting comprehensive keyword research and implementing strategic link building.
                          </p>
                          <button className="rts-btn btn-primary">
                            Get started
                           </button>
                        </div>
                        <div className="col-lg-6">
                          <div className="image-area-service-1  bottom-1">
                            <div className="thumbnail-service-1">
                              <img src={digitalMarketing} alt="service-area" />
                            </div>
                            <div className="shape-area">
            {/* <img className="one" src={subscribtionshape01png} alt="subscribtion" /> */}
            {/* <img className="two" src={subscribtionshape02png} alt="subscribtion" /> */}
          {/* <img className="three" src={subscribtionshape03png} alt="subscribtion" /> */}
            // <img className="four" src={subscribtionshape04png} alt="subscribtion" /> 
          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Country Level SEO Tab */}
                    <div
                      className="tab-pane fade"
                      id="country-level-seo"
                      role="tabpanel"
                      aria-labelledby="country-level-seo-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 mb-3">
                          <h3>Website Auditing</h3>
                          <p>
                          We are the followers of Google UI UX Standards with a creative team of website designers and developers. Our Team provide professional website audit services that ensure 100% client satisfaction, with clear understanding of customer requirements and business owner's mindset.
                          </p>
                          <p>
                          With our experience, we have conducted audits worldwide for various types of websites from e-commerce platforms to service-oriented websites. A website audit involves analyzing page performance before making any significant search engine optimization (SEO) changes or website redesigns to achieve more traffic and sales.
                          </p>
                          <button className="rts-btn btn-primary">
                            Get started
                           </button>
                        </div>
                        <div className="col-lg-6">
                          <div className="image-area-service-1  bottom-1">
                            <div className="thumbnail-service-1">
                              <img src={seoAudit} alt="service-area" />
                            </div>
                            <div className="shape-area">
            {/* <img className="one" src={subscribtionshape01png} alt="subscribtion" /> */}
            {/* <img className="two" src={subscribtionshape02png} alt="subscribtion" /> */}
          {/* <img className="three" src={subscribtionshape03png} alt="subscribtion" /> */}
             <img className="four" src={subscribtionshape04png} alt="subscribtion" /> 
          </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Global SEO Tab */}
                    <div
                      className="tab-pane fade"
                      id="global-seo"
                      role="tabpanel"
                      aria-labelledby="global-seo-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 mb-3">
                          <h3>SEO Ranking Services</h3>
                          <p>
                          As an authorized Google SEO partner, we utilize effective SEO strategies that strictly adhere to all Google algorithms and Google Webmaster standards. Bams Technologies offers the best SEO expert services for the Google search engine.
                          </p>
                          <p>
                          With our expertise, we have positively contributed website rankings on the Google search engine for the clients from all over the globe. Working with a skilled Google SEO expert, you can elevate your website’s rankings to higher levels, resulting in increased visitors and potential sales. Through our Google SEO services, grow your organization digitally above all the other competitors in the field of SEO.
                          </p>
                          <button className="rts-btn btn-primary">
                            Get started
                           </button>
                        </div>
                        <div className="col-lg-6">
                          <div className="image-area-service-1  bottom-1">
                            <div className="thumbnail-service-1">
                              <img src={whoIsZammyZaif} alt="service-area" />
                            </div>
                            <div className="shape-area">
            {/* <img className="one" src={subscribtionshape01png} alt="subscribtion" /> */}
            {/* <img className="two" src={subscribtionshape02png} alt="subscribtion" /> */}
          <img className="three" src={subscribtionshape03png} alt="subscribtion" />
            {/* // <img className="four" src={subscribtionshape04png} alt="subscribtion" />  */}
          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="rank-in-gsm"
                      role="tabpanel"
                      aria-labelledby="rank-in-gsm-tab"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 mb-3">
                          <h3>Get No.1 Rank in GMB</h3>
                          <p>
                          To achieve a first rank position on Google Maps, expert knowledge of GMB SEO strategies is required. Our team strictly follows Google guidelines, optimizes for the right audience, increases organic traffic, generates high-quality backlinks, and monitors spam networks to avoid penalties. Regular updates to your Google Business profile also engage customers and drive revenue. Our clients usually rank first on Google Maps within 45 days. Trust our team of GMB experts to help you achieve your goals for Google Business Profile Optimization.
                          </p>
                        
                          <button className="rts-btn btn-primary">
                            Get started
                           </button>
                        </div>
                        <div className="col-lg-6">
                          <div className="image-area-service-1  bottom-1">
                            <div className="thumbnail-service-1">
                              <img src={socialMediaMarketing} alt="service-area" />
                            </div>
                            <div className="shape-area">
            {/* <img className="one" src={subscribtionshape01png} alt="subscribtion" />
            <img className="two" src={subscribtionshape02png} alt="subscribtion" />
            <img className="three" src={subscribtionshape03png} alt="subscribtion" /> */}
            <img className="four" src={subscribtionshape04png} alt="subscribtion" />
          </div>
                          </div>
                    
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  {/* rts about area end */}
  {/* rts counter up area start */}
  <div className="rts-counterup-area">
    <div className="container">
      <div className="row pb--80">
        <div className="col-lg-12">
          <div className="counter-upmain-wrapper-style-one">
            {/* single counter up area start */}
            <div className="single-counter-up">
              <h3 className="title">
                <span className="counter">2.5</span>B
              </h3>
              <p>Related keywords</p>
            </div>
            {/* single counter up area end */}
            {/* single counter up area start */}
            <div className="single-counter-up">
              <h3 className="title">
                <span className="counter">100</span>M
              </h3>
              <p>Competitors keywords</p>
            </div>
            {/* single counter up area end */}
            {/* single counter up area start */}
            <div className="single-counter-up">
              <h3 className="title">
                <span className="counter">48</span>k
              </h3>
              <p>Supported locations</p>
            </div>
            {/* single counter up area end */}
            {/* single counter up area start */}
            <div className="single-counter-up">
              <h3 className="title">
                <span className="counter">2004</span>
              </h3>
              <p>Year founded</p>
            </div>
            {/* single counter up area end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts counter up area end */}
  {/* rts testimonials area start */}

  {/* rts testimonials area end */}
  {/* blog area start */}
  <div className="rts-section-gap rts-blog-area-one">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="title-style-one-center">
            <span className="pre">Zammy's Achievements</span>
            <h3 className="title skew-up">
            Our Ranking Achievements
            </h3>
          </div>
        </div>
      </div>
      <div className="row g-48 mt--0">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single blog area start */}
          <div className="single-blog-area-style-one">
            <a href="blog-details.html" className="thumbnail">
              <img src={blogimage1} alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <a href="blog-details.html">
                <h6 className="title">
                Nabtaker Sign
                </h6>
              </a>
              <div className="bottom-area">
                {/* <span className="admin">Amir Nisi</span> */}
                <span className="date">  Which tool seems the best for content writing strategy?</span>
              </div>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single blog area start */}
          <div className="single-blog-area-style-one">
            <a href="blog-details.html" className="thumbnail">
              <img src={blogimage2} alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <a href="blog-details.html">
                <h6 className="title">
                Hydraulic Oman
                </h6>
              </a>
              <div className="bottom-area">
                {/* <span className="admin">Amir Nisi</span> */}
                <span className="date">   Keywords: Hydraulic oman, Hydraulic spares in oman, Hydraulic systems in oman</span>
              </div>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          {/* single blog area start */}
          <div className="single-blog-area-style-one">
            <a href="blog-details.html" className="thumbnail">
              <img src={blogimage3} alt="blog-image" />
            </a>
            <div className="inner-content-wrapper">
              <a href="blog-details.html">
                <h6 className="title">
                Venture Partner - Qatar
                </h6>
              </a>
              <div className="bottom-area">
                {/* <span className="admin">Amir Nisi</span> */}
                <span className="date">• Keywords: Venture Partner Qatar, corporate sponsorship in qatar, Local Sponsorship Qatar, Pro Service Qatar.</span>
              </div>
            </div>
          </div>
          {/* single blog area end */}
        </div>
        <div className="col-lg-12  text-center">
          <a href="blog.html" className="rts-btn btn-primary text-center">
            View Insights
          </a>
        </div>
      </div>
    </div>
    <div className="shape-area">
      <img className="one" src={blogshape01png} alt="shape" />
      <img className="two" src={blogshape02png} alt="shape" />
      <img
        className="three"
        src={blogshape03png}
        alt="shape"
      />
    </div>
  </div>
  {/* blog area end */}
  {/* rts subs cribe section start */}
  <div className="rts-subscribe-area-one rts-section-gapBottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="subscribe-main-wrapper-one">
            <div className="title-style-one-center">
              <h2 className="title split-collab">
                It's time to tell the <br />
                world about it
              </h2>
              <p className="disc">
                We will shows you exactly what content you should write to make
                it <br /> to the top of search engine results and drive the
                traffic you want.
              </p>
              <form action="#">
                <input type="text" placeholder="yourwebsite.com" required="" />
                <i className="fa-light fa-globe" />
                <button className="rts-btn btn-primary">
                  Start a SEO Audit
                </button>
              </form>
            </div>
            <div className="shape-area">
              <img
                className="one"
                src={subscribtionshape01png}
                alt="subscribtion"
              />
              <img
                className="two"
                src={subscribtionshape02png}
                alt="subscribtion"
              />
              <img
                className="three"
                src={subscribtionshape03png}
                alt="subscribtion"
              />
              <img
                className="four"
                src={subscribtionshape04png}
                alt="subscribtion"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rts-working-porcess-area-two ptb--160 bg-dark-border-radious-sd">
        <div class="container-1058">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-style-one-center">
                        <span class="pre skew-up">FAQ</span>
                        <h2 class="title skew-up">Frequently Asked Question</h2>
                    </div>
                </div>
            </div>
            <div class="row g-48 mt--0">
                <div class="col-lg-6 col-md-6">
                    <div class="working-process-right-area-one">
                        <div class="thumbnail">
                            <img class="large" src={workingProcess} alt="working-process"/>
                            <img src="assets/images/working-process/01.png" alt="" class="small"/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="working-process-accordion-one">
                        <div class="accordion" id="accordionExamples">
                            <div class="accordion-item show">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        01. What is SEO?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    The process of getting the stuff we can look for to the top of the search engine results page is known as search engine optimization.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        02. Why does every business require SEO?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    Today we are all seeking a product or service from Google that we need. As our customers also seek their products or services from Google. Having our website appear as the top result in a search engine will improve our income.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        03. Why are website need audits?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    Website audits are an important step in improving a website's efficiency and exposure. Audits increase site traffic and performance while improving Google search ranking. A website audit provides a company with an outstanding potential for online growth.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        04. Why your website structure is important?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExamples">
                                    <div class="accordion-body">
                                    An uniform website structure that makes it easy for all audiences to access the website by delivering a memorable experience to the users. We examine the structure of the website in relation to the services it provides. A well-planned website structure ensures that your page receives the greatest possible rating from SEO services.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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