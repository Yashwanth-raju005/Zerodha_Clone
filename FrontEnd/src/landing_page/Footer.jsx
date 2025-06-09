/* eslint-disable no-irregular-whitespace */
import React from "react";

import zerodhalogo from "../../public/asserts/logo.svg";

import twilogo from "../../public/asserts/Twitter.png";
import facebooklogo from "../../public/asserts/FaceBook.png";
import inslogo from "../../public/asserts/instagram.png";
import linkedinlogo from "../../public/asserts/Linkedin.png";

const Footer = () => {
  return (
    <div
      className="container border-top mt-5 p-5 "
      style={{ minWidth: "100%" }}
    >
      <div className="row">
        <div className="col mt-2 p-5">
          <img src={zerodhalogo} alt="" style={{ width: "50%" }} />
          <p className="mt-3">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="soc-icons">
            <a href="">
              <img src={twilogo} alt="" style={{ width: "5%" }} />
            </a>
            <a href="">
              <img src={facebooklogo} alt="" style={{ width: "5%" }} />
            </a>
            <a href="">
              <img src={inslogo} alt="" style={{ width: "5%" }} />
            </a>
            <a href="">
              <img src={linkedinlogo} alt="" style={{ width: "5%" }} />
            </a>
          </div>
        </div>

        <div className="col mx-5  mt-2 p-5 footer-links">
          <h5>Company</h5>

          <p className="mt-4">About</p>
          <p>Products</p>
          <p>Pricing</p>
          <p>Referral programme</p>
          <p>Careers</p>
          <p>Zerodha.tech</p>
          <p>Open source</p>
          <p>Press & media</p>
          <p>Zerodha Cares (CSR)</p>
        </div>

        <div className="col  mt-2 p-5 footer-links">
          <h5>Support</h5>

          <p className="mt-4">Contact us</p>
          <p>Support portal</p>
          <p>Z-Connect blog</p>
          <p>List of charges</p>
          <p>Downloads & resources</p>
          <p>Videos</p>
          <p>Market overview</p>
          <p>How to file a complaint?</p>
          <p>Status of your complaints</p>
        </div>

        <div className="col  mt-2 p-5 footer-links">
          <h5>Account</h5>

          <p className="mt-4">Open an account</p>
          <p>Fund transfer</p>
        </div>
      </div>
      <div className="mt-3 fs-6 p-5 text-muted">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>

      <div className="text-center footer-bottom">
        <a href="" className="text-decoration-none p-3">
          NSE
        </a>
        <a href="" className="text-decoration-none p-3">
          BSE
        </a>
        <a href="" className="text-decoration-none p-3">
          MCX
        </a>
        <a href="" className="text-decoration-none p-3">
          Terms & conditions
        </a>
        <a href="" className="text-decoration-none p-3">
          Policies & procedures{" "}
        </a>
        <a href="" className="text-decoration-none p-3">
          Privacy policy
        </a>
        <a href="" className="text-decoration-none p-3">
          Disclosure
        </a>
        <a href="" className="text-decoration-none p-3">
          For investor's attention{" "}
        </a>
        <a href="" className="text-decoration-none p-3">
          Investor charter
        </a>
      </div>
    </div>
  );
};

export default Footer;
