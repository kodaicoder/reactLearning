import React, { useState } from "react";
// import PropTypes from "prop-types";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

import "./ExpenseItem.css";

const dateOpt = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  console.log(
    "%c component has evaluated by react",
    "background:rgb(0,0,0); color:rgb(0,255,0)"
  );

  const clickHandler = () => {
    console.log("%c Clicked!", "color:red;");
    console.log("before set :" + title);
    setTitle("Updated!!");
  };

  console.log("after set :" + title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="test-date ">
          {props.date.toLocaleDateString("en-GB", dateOpt)}
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {};

ExpenseItem.defaultProps = {};

export default ExpenseItem;
