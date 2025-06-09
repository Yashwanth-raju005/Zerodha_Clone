import React from "react";

import ecosystem from "../../../public/asserts/ecosystem.png";

const Stats = () => {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row p-5">
          <div className="col-6 p-5">
            <h2 className="fs-2">Trust with confidence</h2>

            <h4 className="mt-4 fs-4.5">Customer-first always</h4>

            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>

            <h4 className="mt-3 fs-4.5">No spam or gimmicks</h4>

            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <span style={{ color: "#387ed1", cursor: "pointer" }}>
                Our philosophies.
              </span>
            </p>

            <h4 className="mt-3">The Zerodha universe</h4>

            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h4 className="mt-3">Do better with money</h4>

            <p className="text-muted">
              With initiatives like{" "}
              <span style={{ color: "#387ed1", cursor: "pointer" }}>Nudge</span>{" "}
              and{" "}
              <span style={{ color: "#387ed1", cursor: "pointer" }}>
                Kill Switch
              </span>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>

          <div className="col-6 p-5">
            <img src={ecosystem} alt="" style={{ width: "100%" }} />

            <div className="text-center mt-3">
              <a href="" className="mx-5 text-decoration-none">
                Explore our products →
              </a>
              <a href="" className="text-decoration-none">
                Try Kite demo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
