/* eslint-disable no-unused-vars */
import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHold, setAllHold] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/allHoldings')
    .then((res)=>{
      console.log(res.data);
      
      setAllHold(res.data)
    })
    .catch((e)=>{
      console.log("Error : ",e);
    })
  }, []);

  // const data = holdings;

  return (
    <div className="holdings-container">
      <div className="holdings-title">Holdings ({allHold.length})</div>
      <div className="holdings-table">
        <div className="table-header">
          <div className="table-cell">Instrument</div>
          <div className="table-cell mx-2">Qty.</div>
          <div className="table-cell">Avg. cost</div>
          <div className="table-cell">LTP</div>
          <div className="table-cell">Cur. val</div>
          <div className="table-cell">P&L</div>
          <div className="table-cell">Net chg.</div>
          <div className="table-cell">Day chg.</div>
        </div>

        {allHold.map((stock, index) => {
          const curValue = stock.price * stock.qty;

          const isProfit = curValue - stock.avg * stock.qty >= 0.0;

          const profClass = isProfit ? "profit" : "loss";

          const dayClass = stock.isLoss ? "loss" : "profit";

          return (
            <tr key={index} className="datas">
              <td className="table-cell">{stock.name}</td>
              <td className="table-cell">{stock.qty}</td>

              <td className="table-cell tell">{stock.avg.toFixed(2)}</td>
              <td className="table-cell ">{stock.price.toFixed(2)}</td>
              <td className="table-cell">{curValue.toFixed(2)}</td>
              <td className={`table-cell ${profClass} tells`}>
                {(curValue - stock.avg * stock.qty).toFixed(2)}
              </td>
              <td className={`table-cell ${profClass} tells`}>{stock.net}</td>
              <td className={`table-cell ${profClass} tells`}>{stock.day}</td>
            </tr>
          );
        })}
      </div>

      <div className="row hold-bottom">
        <div className="col-4">
          <h3>29,875</h3>
          <p>55</p>

          <p>Total Investments</p>
        </div>

        <div className="col-4">
          <h3>31,425</h3>
          <p>95</p>

          <p>Current Value</p>
        </div>

        <div className="col-4">
          <div className="hold-bottom-head">
            <h3>1,553.40</h3>
            <h3> (+5.20%)</h3>
          </div>

          <p>P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
