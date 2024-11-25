import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Service from "./pages/Services.js";
import Services from "./pages/Service.js";
import Header from "./Header/Header.js";
import Footer from  "./Header/Footer.js"
import Contact from "./Contact";
import WebsiteSeoRankingServices from "../src/screens/website-seo-ranking-services.js"
import GmbRankingServices from "../src/screens/gmb-ranking-services.js"
import GoogleRankingServices from "../src/screens/google-ranking-services.js"

import './App.css';
import '../src/assets/css/plugins/fontawesome.min.css';
import '../src/assets/css/plugins/magnific-popup.css';
import '../src/assets/css/plugins/metismenu.css';
import '../src/assets/css/plugins/swiper.min.css';
import '../src/assets/css/vendor/bootstrap.min.css';
import '../src/assets/style.css';
import '../src/assets/fonts/fa-brands-400.ttf';
import '../src/assets/fonts/fa-brands-400.woff2';
// import '../src/assets/fonts/fa-duotone-900.html';
// import '../src/assets/fonts/fa-duotone-901.html';
import '../src/assets/fonts/fa-light-300.ttf';
import '../src/assets/fonts/fa-light-300.woff2';
import '../src/assets/fonts/fa-regular-400.ttf';
import '../src/assets/fonts/fa-regular-400.woff2';
// import '../src/assets/fonts/fa-fa-solid-900.ttf';
import '../src/assets/fonts/fa-solid-900.woff2';
import '../src/assets/fonts/fa-thin-100.ttf';
import '../src/assets/fonts/fa-thin-100.woff2';
import '../src/assets/fonts/fa-v4compatibility.ttf';
import '../src/assets/fonts/fa-v4compatibility.woff2';
// import '../src/assets/js/main';
// import '../src/assets/js/plugins/contact-form';
// import '../src/assets/js/plugins/counter-up';
// import '../src/assets/js/plugins/swiper';
// import '../src/assets/js/plugins/magnific-popup';
// import '../src/assets/js/plugins/metismenu';
// import '../src/assets/js/plugins/scrolltigger';

function App() {
  
  return (
    <>
        
        
      <HashRouter>
        <Header />
        
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/website-seo-ranking-services" element={<WebsiteSeoRankingServices/>} />
          <Route path="/gmb-ranking-services" element={<GmbRankingServices/>} />
          <Route path="/google-ranking-services" element={<GoogleRankingServices/>} />

          <Route path="/Services" element={<Service />} />
          <Route path="/Service" element={<Services />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
