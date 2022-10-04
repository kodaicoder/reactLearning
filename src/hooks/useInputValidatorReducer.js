import { useReducer } from "react";

const initialInputState = {
  value: "",
  isDirty: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isDirty: state.isDirty };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isDirty: true };
  }
  if (action.type === "RESET") {
    return { value: "", isDirty: false };
  }
  return inputStateReducer;
};

export const useInputValidatorReducer = (validateValue) => {
  const [inputState, inputDispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const isError = !valueIsValid && inputState.isDirty;

  const valueChangeHandler = (ev) => {
    inputDispatch({ type: "INPUT", value: ev.target.value });
  };
  const inputOnBlurHandler = () => {
    inputDispatch({ type: "BLUR" });
  };

  const reset = () => {
    inputDispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    isError,
    valueChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};
