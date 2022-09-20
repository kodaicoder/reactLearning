import React from "react";
import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

const Chart = (props) => {
  const chartDataVals = props.chartDatas.map((chartData) => chartData.value);
  const totalMaximum = Math.max(...chartDataVals);

  return (
    <div className="chart">
      {props.chartDatas.map((data) => (
        <ChartBar
          key={data.id}
          value={data.value}
          maxVal={totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {};

Chart.defaultProps = {};

export default Chart;
