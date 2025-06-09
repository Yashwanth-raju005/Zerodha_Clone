import React from "react";

const Pricing = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Unbeatable pricing</h2>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="" className="mx-5 text-decoration-none">
            See pricing →
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="mb-3">₹ 0</h1>
              <p>
                Free equity delivey and <br />
                direct mutual funds
              </p>
            </div>

            <div className="col border p-3">
              <h1 className="mb-4">₹ 20</h1>
              <p>Intradey and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
