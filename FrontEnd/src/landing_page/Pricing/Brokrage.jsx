import React from "react";

const Brokrage = () => {
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center mt-5">
          <span style={{ color: "#387ed1", cursor: "pointer" }}>
            Calculate your costs upfront
          </span>{" "}
          using our brokerage calculator
        </h4>
      </div>

      <div className="row mt-5">
        <h3>Charges explained</h3>

        <div className="col-6">
          <h5 className="fs-5 mt-3">Securities/Commodities transaction tax</h5>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and
            <br /> sell sides when trading equity delivery. Charged only on
            selling side when trading intraday or on F&O.
          </p>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important <br />
            to keep a tab.
          </p>

          <h5 className="fs-5 mt-3">Transaction/Turnover Charges</h5>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f
            <br /> 01.01.2016. (XC and XD groups have been merged into a new
            group X w.e.f 01.12.2017)
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
        </div>

        <div className="col-6">
          <h5 className="fs-5 mt-3">Gst</h5>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <h5 className="fs-6 mt-4">SEBI Charges</h5>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h5 className="fs-5 mt-4">DP (Depository participant) charges</h5>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>

          <p className="text-muted" style={{ fontSize: "12px" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <h1 style={{ fontSize: "23px" }}>Disclaimer</h1>

        <p className="text-muted mt-2 " style={{ fontSize: "13px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>

      <div className="row mx-3 mt-5 p-5 ">
        <h4>Charges for account opening</h4>

        <table className="mt-4 mx-2 p-5 border" style={{ maxWidth: "80%" }}>
          <tr className="border">
            <th className="p-3">Type of account</th>
            <th className="">Charges</th>
          </tr>

          <tr className="border">
            <td className="p-3">Online account</td>

            <td
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                fontSize: "13px",
                width: "12px",
                height: "10px",
              }}
              className="p-3"
            >
              FREE
            </td>
          </tr>

          <tr className="border">
            <td className="p-3">Offline account</td>

            <td
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                fontSize: "13px",
              }}
              className="p-3"
            >
              FREE
            </td>
          </tr>

          <tr className="border">
            <td className="p-3">NRI account (offline only)</td>

            <td> ₹ 500</td>
          </tr>

          <tr className="border">
            <td className="p-3">
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>

            <td> ₹ 500</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Brokrage;
