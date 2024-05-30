import React from "react";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";
import Blog from "./container/blog/Blog";
import Features from "./container/features/Features";
import Footer from "./container/footer/Footer";
import Header from "./container/header/Header";
import Possibility from "./container/possibility/Possibility";
import WhatGPT3 from "./container/whatGPT3/WhatGPT3";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
