import React from "react";

const RightSection = ({ proName, proDesc, imageUrl , moretext}) => {
  return (
    <div className="container mt-1 border-top ">
      <div className="row p-5">
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-5 pt-5">{proName}</h1>

          <p>{proDesc}</p>

          <p>
            {" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              {moretext} →
            </span>
          </p>
        </div>

        <div className="col-6">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
