import React from "react";

import {Link} from 'react-router-dom'

const OpenAccount = () => {
  return (
    <div className="container text-center pt-5 ">
      <div className="row">
        <h1 className="mt-5">Open a Zerodha account</h1>

        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <div>
          <Link to={'/register'}>
            <button
              className="p-2 btn btn-primary fs-6 home-sign-btn mb-5"
              style={{
                width: "18%",
                margin: "0 auto",
              }}
            >
              Sign Up
            </button>
          </Link>

          <Link to={'/login'}>
            <button
              className="p-2 btn btn-primary fs-6 home-sign-btn mb-5 mx-4"
              style={{
                width: "18%",
                margin: "0 auto",
              }}
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
