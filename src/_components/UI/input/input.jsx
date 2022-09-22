import React from "react";
import styles from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
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
        ref={ref}
      ></input>
    </div>
  );
});

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
