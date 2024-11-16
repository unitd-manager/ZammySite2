import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
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
        {/* <Header /> */}
        
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
         
          
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </>
  );
}

export default App;
