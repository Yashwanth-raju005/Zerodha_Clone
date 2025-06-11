import React from "react";
import founderpic from "/asserts/nithinKamath.jpg";
import nikhilPic from "/asserts/Nikhil.jpg";
import kailashPic from "/asserts/Kailash.jpg";
import venuPic from '/asserts/Venu.jpg'
import hananPic from '/asserts/Hanan.jpg'
import seemaPic from '/asserts/Seema.jpg'
import karthikPic from '/asserts/karthik.jpg'


const Team = () => {
  return (
    <div className="container p-5">
      <div className="row p-5 mt-1 border-top">
        <h2 className=" text-center">People</h2>
      </div>

      <div className="row p-5 fs-5">
        <div className="col-6 p-5 text-center">
          <img
            src={founderpic}
            alt=""
            style={{ borderRadius: "100%", width: "60%" }}
          />

          <h4 className=" mt-5">Nithin Kamath</h4>

          <h5 className="fs-6">Founder, CEO</h5>
        </div>

        <div className="col-6 p-5  fs-6 mt-4">
          <p className="">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              Homepage
            </span>{" "}
            /{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              TradingQnA
            </span>{" "}
            /{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>Twitter</span>{" "}
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4 text-center">
          <img
            src={nikhilPic}
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" mt-5">Nikhil Kamath</h4>

          <h5 className="fs-6">Co-founder & CFO</h5>
        </div>

        <div className="col-4 text-center">
          <img
            src={kailashPic}
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" mt-5">Dr. Kailash Nadh</h4>

          <h5 className="fs-6">CTO</h5>
        </div>

        <div className="col-4 text-center">
          <img
            src={venuPic}
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" mt-5">Venu Madhav</h4>

          <h5 className="fs-6">COO</h5>
        </div>
      </div>


       <div className="row mt-5">
        <div className="col-4 text-center">
          <img
            src={hananPic}
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" mt-5">Hanan Delvi</h4>

          <h5 className="fs-6">CCO</h5>
        </div>

        <div className="col-4 text-center">
          <img
            src={seemaPic}
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" mt-5">Seema Patil </h4>

          <h5 className="fs-6">Director</h5>
        </div>

        <div className="col-4 text-center">
          <img
            src={karthikPic}
            alt=""
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className=" mt-5">Karthik Rangappa</h4>

          <h5 className="fs-6">Chief of Education</h5>
        </div>
      </div>
    </div>
  );
};

export default Team;
