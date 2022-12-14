import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onYearChangeHandler = (e) => {
    props.onSelectedYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.initialYear} onChange={onYearChangeHandler}>
          <option defaultValue disabled hidden>
            Select a year
          </option>
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {};

ExpensesFilter.defaultProps = {};

export default ExpensesFilter;
