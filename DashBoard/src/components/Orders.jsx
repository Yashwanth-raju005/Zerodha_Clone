import React from "react";

const Orders = () => {
  return (
    <div className="container p-5">
      <div className="row ord-head">
        <p>You Haven't placed any order today</p>
        <button className="btn btn-primary " style={{ width: "30%" }}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Orders;
