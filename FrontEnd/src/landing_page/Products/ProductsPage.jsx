import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="public/asserts/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageUrl="public/asserts/console.png"
        proName="Console"
        proDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        moretext="Learn More"
      />

      <LeftSection
        imageUrl="public/asserts/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageUrl="public/asserts/landing.svg"
        proName="Kite Connect API"
        proDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        moretext="Kite Connect"
      />

      <LeftSection
        imageUrl="public/asserts/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <h1 className="fs-4 text-center mt-5">
        Want to know more about our technology stack? Check out the{" "}
         <span style={{ color: "#387ed1", cursor: "pointer" }}>
           Zerodha.tech
        </span>{" "}
        blog.
      </h1>

      <Universe />
    </>
  );
};

export default ProductsPage;
