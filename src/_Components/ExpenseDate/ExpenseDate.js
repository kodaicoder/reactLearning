import React from "react";
import "./ExpenseDate.css";
// import PropTypes from "prop-types";


const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-GB", { month: "long" });
  const day = props.date.toLocaleDateString("en-GB", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {};

ExpenseDate.defaultProps = {};

export default ExpenseDate;
