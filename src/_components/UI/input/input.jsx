import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const onChangeHandler = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className={styles["input-container"]}>
      <div>
        <label className={styles["input-label"]}>{props.inputLabel}</label>
      </div>
      <input
        id={props.id}
        type={props.inputType}
        value={props.inputValue}
        aria-label={props.inputLabel}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
