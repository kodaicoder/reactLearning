import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";
  if (props.maxVal > 0) {
    barFill = Math.round((props.value / props.maxVal) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );

  ///side note : if want to using dynamic CSS in react you need to using {{}} (double curly bracket)
};

ChartBar.propTypes = {};

ChartBar.defaultProps = {};

export default ChartBar;
