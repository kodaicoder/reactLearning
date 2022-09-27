import React from "react";
import classes from "./header.module.css";

import mealsImage from "../../../assets/meals.jpg";
import { HeaderCartButton } from "../HeaderCartButton/HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCard}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
    </>
  );
};
