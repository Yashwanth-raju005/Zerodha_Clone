import React from "react";

// import { positions } from "../data/data";

import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

const Positions = () => {

  const [allPositions,setAllPositions] = useState([]);


  useEffect(()=>{
    axios.get('https://zerodha-clone-me02.onrender.com')
    .then((res)=>{
      setAllPositions(res.data)
    })
    .catch((e)=>{
      console.log("Error",e)
    })
  },[])



  return (
    <div className="container" style={{ width: "950px", marginLeft: "-340px" }}>
      <h3 className="mb-3">
        Positions ({allPositions.length})
      </h3>

      <table className="table table-bordered table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Instrument</th>
            <th scope="col" className="text-end">Qty</th>
            <th scope="col" className="text-end">Avg</th>
            <th scope="col" className="text-end">LTP</th>
            <th scope="col" className="text-end">P&L</th>
            <th scope="col" className="text-end">Day</th>
          </tr>
        </thead>
        <tbody>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "text-success" : "text-danger";
            const dayClass = stock.isLoss ? "text-danger" : "text-success";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td className="text-end">{stock.qty}</td>
                <td className="text-end">{stock.avg.toFixed(2)}</td>
                <td className="text-end">{stock.price.toFixed(2)}</td>
                <td className={`text-end fw-semibold ${profClass}`}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={`text-end fw-semibold ${dayClass}`}>
                  {stock.day}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
