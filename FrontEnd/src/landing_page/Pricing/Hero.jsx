import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5">
        <h1>Charges</h1>
        <h5 className="text-muted">List of all charges and taxes</h5>
      </div>

      <div className="row text-center mt-3 border-top">
        <div className="col-4 mt-5">
          <img src="public/asserts/pricing.svg" alt="" style={{width:"60%"}} />

          <h2>Free equity delivery</h2>

          <p>
            All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4 mt-5" >
          <img src="public/asserts/othertrades.svg" alt="" style={{width:"60%"}} />
          <h2>Intraday and F&O trades</h2>
          Flat ₹ 20 or 0.03% (whichever is lower) per <br/> executed order on intraday
          trades across <br/> equity, currency, and commodity trades. Flat  <br/>₹20 on all
          option trades.
        </div>

        <div className="col-4 mt-5">
          <img src="public/asserts/pricing.svg" alt="" style={{width:"60%"}} />

          <h2>Free direct MF</h2>

          <p>
            All direct mutual fund investments are  <br/>absolutely free — ₹ 0
            commissions & DP <br/> charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
