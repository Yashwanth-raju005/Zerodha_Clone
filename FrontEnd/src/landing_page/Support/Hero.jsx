import React from "react";

const Hero = () => {
  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <div
        className="row p-5"
        style={{ backgroundColor: "#387ED1", color: "white" }}
      >
        <div className="col-6 p-4">
          <h1 className="fs-4">Support Portal</h1>

          <h4 className="mt-5">
            Search for an answer or browse help topics to create a ticket
          </h4>

          <input
            type="text"
            className="mt-4 mb-3 p-3 support-inp"
            style={{ minWidth: "650px" }}
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
          />

          <div className="row mt-4">
            <div className="col-4 text-decoration-underline">
              <p className="fs-6 " style={{cursor:"pointer"}}>Track account opening</p>
            </div>

            <div className="col-4 text-decoration-underline">
              <p className="fs-6" style={{cursor:"pointer"}}>Track segment activation</p>
            </div>

            <div className="col-4 text-decoration-underline">
              <p className="fs-6" style={{cursor:"pointer"}}>Intraday margins</p>
            </div>
          </div>

          <div className="row text-decoration-underline">
            <p className="fs-6" style={{cursor:"pointer"}}>Kite user manual</p>
          </div>
        </div>

        <div className="col-6">
          <h4 className="mx-5 mt-4">Track tickets </h4>

          <div className="mt-3 p-5">
            <h5 className="mb-4">Featured</h5>

            <p className="text-decoration-underline" style={{cursor:"pointer"}}>1.BSE StAR mutual fund platform downtime</p>
            <p className="text-decoration-underline" style={{cursor:"pointer"}}>2. Offer for sale (OFS) – May 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
