import React from "react";

const Summary = () => {
  return (
    <div className="contianer">
      <div className="row sum-head">
        <h3>Hi User!</h3>
      </div>

      <div className="row top-val mt-3">
        <div className="summary-head1 ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png"
            alt=""
            style={{ width: "25px" }}
          />
          <h4>Equity</h4>
        </div>

        <div className="col-6 mt-3">
          <h2>3.74K</h2>
          <p>margin available</p>
        </div>

        <div className="col-6 mt-3">
          <p>margin used : 0</p>
          <p>Opening Balance 3.74K</p>
        </div>
      </div>

      <div className="row top-val mt-5">
        <div className="summary-head1 ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/657/657076.png"
            alt=""
            style={{ width: "25px" }}
          />
          <h4>Holdings (13)</h4>
        </div>

        <div className="col-6 mt-3">
          <div className="hold-head">
            <h2>1.55K</h2>
            <p className="mx-2 mt-3">+5.20%</p>
          </div>
          <p>P&L</p>
        </div>

        <div className="col-6 mt-3">
          <p>Current Value : 31.43k</p>
          <p>Investment : 29.88k</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
