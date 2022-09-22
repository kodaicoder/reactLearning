import React from "react";
import styles from "./button.module.css";

const Button = (props) => (
  <button
    className={styles.Button}
    type={props.btnType || "button"}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
