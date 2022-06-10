import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./short.css";

const Filter = ({ filterProducts }) => {
  const getFilter = (e) => {
    const { value } = e.target;
    filterProducts(value);
  };

  return (
    <div>
      <select className="btn btn-secondary" onChange={getFilter}>
        <option value="">Short Itmes...</option>
        <option value="all">All</option>
        <option value="nonVeg">Nonveg Items</option>
        <option value="veg">Veg Items</option>
      </select>
    </div>
  );
};

export default Filter;
