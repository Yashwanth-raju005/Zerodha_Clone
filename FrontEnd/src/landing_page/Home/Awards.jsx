import React from "react";
import largestBroker from "../../../public/asserts/largestBroker.svg";
import pressLogo from "../../../public/asserts/pressLogos.png";


const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={largestBroker} alt="" />
        </div>

        <div className="col-6  mt-2 mb-5">
          <h1>Largest Stock broker In India</h1>
          <p>
            2+ Million Zerodha Cliens Contribution to Over 15% of akk retial
            order volumes in india daily by trading and investing in
          </p>
          <div className="row">
            <div className="col-6 p-4">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity derivaties</p>
                </li>
                <li>
                  <p>Currency derivaties</p>
                </li>
              </ul>
            </div>

            <div className="col-6 p-4">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds And Governance</p>
                </li>
              </ul>
            </div>
          </div>
          <img src={pressLogo} alt="" className="mt-4" style={{width:"80%"}}/>
        </div>
      </div>
    </div>
  );
};

export default Awards;
