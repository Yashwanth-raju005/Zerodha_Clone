/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

import Grow from "@mui/material/Grow";
import { DonutGraph } from "./DonutGraph";

const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container my-4 p-3 bg-light rounded shadow-sm watchlist-container">
      <div className="d-flex justify-content-between align-items-center mb-3 search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="form-control me-3 search"
        />
        <span className="badge bg-secondary counts">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="list-group list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <div style={{marginTop:"90px"}}>
        <DonutGraph data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center border-0 rounded mb-2 shadow-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "background-color 0.2s ease", cursor: "pointer" }}
    >
      <div className="item">
        <p
          className={`mb-1 fw-semibold ${
            stock.isDown ? "text-danger" : "text-success"
          }`}
        >
          {stock.name}
        </p>
      </div>

      <div className="item-info d-flex align-items-center gap-2">
        <span className="percent fw-medium">{stock.percent}</span>

        {stock.isDown ? (
          <KeyboardArrowDown className="text-danger" />
        ) : (
          <KeyboardArrowUp className="text-success" />
        )}

        <span className="price text-muted">{stock.price}</span>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy btn btn-primary">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className=" btn btn-danger">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn-icon">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More (M)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="btn-icon">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
