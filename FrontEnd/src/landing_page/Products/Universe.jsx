import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>

        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-5">
        <div className="col-4">
          <img
            src="public/asserts/zerodhafundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-3 text-muted">
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img
            src="public/asserts/sensibull.svg"
            alt=""
            style={{ width: "50%" }}
            className="mb-2"
          />
          <p style={{ fontSize: "12px" }} className="mt-4 text-muted">
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="public/asserts/tijori.svg"
            alt=""
            style={{ width: "40%" }}
            className=""
          />
          <p style={{ fontSize: "12px" }} className="mt-2 text-muted">
            Investment research platform <br /> that offers detailed insights on
            stocks, <br /> sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-4">
          <img
            src="public/asserts/streak.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p style={{ fontSize: "12px" }} className="mt-3 text-muted">
            Systematic trading platform <br /> that allows you to create and
            backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img
            src="public/asserts/smallcase.png"
            alt=""
            style={{ width: "50%" }}
            className="mb-2"
          />
          <p style={{ fontSize: "12px" }} className="mt-4 text-muted">
            Thematic investing platform <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="public/asserts/ditto.png"
            alt=""
            style={{ width: "40%" }}
            className=""
          />
          <p style={{ fontSize: "12px" }} className="mt-4 text-muted">
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>
      </div>

      <center>
        <button
          className="p-2 btn btn-primary fs-6 home-sign-btn mb-5 mt-5"
          style={{
            width: "18%",
            margin: "0 auto",
          }}
        >
          Sign Up for Free
        </button>
      </center>
    </div>
  );
};

export default Universe;
