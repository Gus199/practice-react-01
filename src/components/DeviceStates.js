import React from "react";
import DeviceContext from "../context/DeviceContext";
import { useContext } from "react";

function DeviceStates() {
  const { devices } = useContext(DeviceContext);
  let average =
    devices.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / devices.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{devices.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default DeviceStates;
