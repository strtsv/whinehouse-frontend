import React from "react";

import Header from "../components/Header";

import Generations from "../components/Home/Generations";
import Section from "../components/Home/Section";
import About from "../components/Home/About";
import Wines from "../components/Home/Wines";
import Tasting from "../components/Home/Tasting";
import Team from "../components/Home/Team";
import Counter from "../components/Home/Counter";
import WhatPeopleSay from "../components/Home/WhatPeopleSay";
import Events from "../components/Home/Events";
import Newsletter from "../components/Home/Newsletter";
import Gallery from "../components/Home/Gallery";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated" style={{animationDuration: "500ms;"}}>
      <Header />
      <Generations />
      <Section />
      <About />
      <Wines />
      <Tasting />
      <Team />
      <Counter />
      <WhatPeopleSay />
      <Events />
      <Newsletter />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
