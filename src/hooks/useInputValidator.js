import { useState } from "react";

export const useInputValidator = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const isError = !valueIsValid && isDirty;

  const valueChangeHandler = (ev) => {
    setEnteredValue(ev.target.value);
  };
  const inputOnBlurHandler = () => {
    setIsDirty(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsDirty(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isError,
    valueChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};
