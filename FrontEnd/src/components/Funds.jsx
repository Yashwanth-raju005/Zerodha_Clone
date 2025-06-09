import React from "react";

const Funds = () => {
  return (
    <div className="container fund-main">
      <div className="row mt-5 funds-bottom">
        <div className="col-6 funds-left mt-3">
          <h5>Equity</h5>

          <hr />

          <p>Available margin : 4,043.10</p>
          <p>Used margin : 3,757.10</p>
          <p>Available Cash : 4,043.10</p>

          <hr />

          <p>Opening Balance : 4,043.10</p>
          <p>Opening Balance : 3,736.40</p>
          <p>PAYIN : 4,043.10</p>
          <p>SPAN : 0.00</p>
          <p>Delivery Margin : 0.00</p>
          <p>Exposure : 0.00</p>
          <p>Options Premium : 0.00</p>

          <hr />

          <p>Collateral (Liquid Funds): 0.00</p>
          <p>Collateral (Equity): 0.00</p>
          <p>Total Collateral : 0.00</p>
          <p></p>
          <p></p>
        </div>

        <div className="col-6 mx-5 text-center funds-bottom-right">
          <p>You Don't Have a Commodity Account</p>
           <div className="row fund-top">
        <div>
          <p>instant, zero-cost fund transfers with UPI</p>
        </div>

        <div>
          <button className="btn btn-primary mt-3" style={{ width: "100px" }}>
            Add funds
          </button>
          <button
            className="btn btn-primary mt-3"
            style={{ width: "100px", marginLeft: "20px" }}
          >
            Withdraw
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
