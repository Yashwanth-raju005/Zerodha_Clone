import React from "react";
import homeHero from "../../../public/asserts/homeHero.png";
import "../../App.css";

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src={homeHero} alt="hero image" className="mb-5" />
        <h1 className="mt-2 ">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-6 home-sign-btn mb-5"
          style={{
            width: "18%",
            margin: "0 auto",
          }}
        >
          Sign Up for Free
        </button>
      </div>
    </div>
  );
};

export default Hero;
