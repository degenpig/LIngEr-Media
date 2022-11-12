import React, { useState, useEffect } from "react";

import Header from "../components/Header.js";
import HomeSlider from "../components/home/HomeSlider.js";
import HomeFashion from "../components/home/HomeFashion.js";
import HomeStatus from "../components/home/HomeStatus.js";
import CompanyIntro from "../components/home/CompanyIntro.js";
import Footer from "../components/Footer";
import MoveToTop from "../components/MoveToTop";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    // setScrollY(window.pageYOffset);
    // console.log(new Date().getTime());
    console.log("Thanks much")
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-unset font-graphikregular">
        {/* Site Header */}
        <Header />
        {/* Main Content*/}
        <div className="flex-grow align-center">
          <HomeSlider></HomeSlider>
          <HomeStatus></HomeStatus>
          {/* <HomeFashion></HomeFashion> */}
          <CompanyIntro></CompanyIntro>
        </div>
        {/* Site Footer */}
        <Footer />
        <MoveToTop></MoveToTop>
      </div>
    </>
  );
}

export default Home;
