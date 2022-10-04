import { useInputValidatorReducer } from "../hooks/useInputValidatorReducer";
const BasicForm = (props) => {
  //CONDITION
  const isNoEmpty = (val) => val.trim() !== "";
  const isEmail = (val) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  //NAME
  const {
    value: enteredName,
    isValid: nameIsValid,
    isError: nameIsError,
    valueChangeHandler: nameChangeHandler,
    inputOnBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInputValidatorReducer(isNoEmpty);
  //LASTNAME
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    isError: lastNameIsError,
    valueChangeHandler: lastNameChangeHandler,
    inputOnBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInputValidatorReducer(isNoEmpty);
  //EMAIL
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isError: emailIsError,
    valueChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputValidatorReducer(isEmail);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (ev) => {
    ev.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameIsError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameIsError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailIsError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameIsError && <p className="error-text">Name must not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameIsError && (
            <p className="error-text">Lastname must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsError && (
          <p className="error-text">Please input valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
