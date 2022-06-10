import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./short.css";

const shortingComp = ({ sortBy }) => {
  const getValue = (e) => {
    const { value } = e.target;
    sortBy(value);
  };

  return (
    <div>
      <select className="btn btn-secondary" onChange={getValue}>
        <option value="">Short Itmes...</option>
        <option value="popular">popular</option>
        <option value="ascPrice">price : low-high</option>
        <option value="descPrice">price : high-low</option>
        <option value="ascRating">rating : high-low</option>
        <option value="descRating">rating : low-high</option>
      </select>
    </div>
  );
};

export default shortingComp;
