import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="text-center mt-5 p-5">
        <h1>Zerodha Products</h1>
        <h4 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h4>

        <h6 className="text-muted mt-3">
          Check out our{" "}
          <span style={{ color: "#387ed1", cursor: "pointer" }}>
            investment offerings →
          </span>
        </h6>
      </div>
    </div>
  );
};

export default Hero;
