import React from "react";

import education from "../../../public/asserts/education.svg";


const Education = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src={education} alt="" style={{ width: "75 %" }} />
        </div>

        <div className="col-6 mt-5">
          <h1 className="mb-3 fs-2 mt-5">Free and open market education</h1>

          <p className="fs-6 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="" className=" text-decoration-none">
            Varsity →
          </a>

          <p className="fs-6 mt-4 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="" className=" text-decoration-none ">
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
