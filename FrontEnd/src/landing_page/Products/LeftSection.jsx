import React from "react";

import googleplay from "../../../public/asserts/googleplay.svg";
import appstore from "../../../public/asserts/appstore.svg";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container border-top">
      <div className="row mt-5 p-3">
        <div className="col-6 p-3">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-6 mt-4 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div >
            <a href={tryDemo} className="text-decoration-none">Try Demo →</a>
            <a href={learnMore} className="text-decoration-none mx-5" >Learn More →</a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src={googleplay} alt="" />
            </a>
            <a href={appStore} className="mx-5">
              <img src={appstore} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
