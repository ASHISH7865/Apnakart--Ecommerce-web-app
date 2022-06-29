import React from "react";
import Slider from "./Slider";
import Features from "./Features";
import HomePageProducts from "./ProductsContainer";
import Footer from "./Footer";

function HomePageComponents(props) {
  return (
    <div>
      <Slider />
      <Features />
      <HomePageProducts limit={4} />
      <Footer />
    </div>
  );
}

export default HomePageComponents;
