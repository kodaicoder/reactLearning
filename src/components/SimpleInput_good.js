// import { useState } from "react";
import { useInputValidator } from "../hooks/useInputValidator";

const SimpleInput_good = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    isError: nameIsError,
    valueChangeHandler: nameChangeHandler,
    inputOnBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInputValidator((nameVal) => nameVal.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isError: emailIsError,
    valueChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputValidator((emailVal) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailVal)
  );

  //const nameInputRef = useRef();
  //const [enteredName, setEnteredName] = useState("");
  //const [enteredEmail, setEnteredEmail] = useState("");

  //const [formIsValid, setFormIsValid] = useState(false);
  let formIsValid = false;
  //const [nameIsDirty, setNameIsDirty] = useState(false);
  //const nameIsValid = enteredName.trim() !== "";
  //const nameInputIsInvalid = !nameIsValid && nameIsDirty;

  // const [emailIsDirty, setEmailIsDirty] = useState(false);
  // const emailIsValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
  //   enteredEmail
  // );
  // const emailInputIsInvalid = !emailIsValid && emailIsDirty;

  ////and any other input in the form can go after "nameIsValid" with "&&" operator
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  // useEffect(() => {
  //   if (nameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  //   return () => {};
  // }, [nameIsValid]);

  // ///ตั้งค่าให้ตัว enteredName ทุกครั้งที่พิพม์ตัวอักษร
  // const nameInputChangeHandler = (ev) => {
  //   setEnteredName(ev.target.value);
  // };
  // const nameInputOnBlurHandler = () => {
  //   setNameIsDirty(true);
  // };

  // const emailInputChangeHandler = (ev) => {
  //   setEnteredEmail(ev.target.value);
  // };
  // const emailInputOnBlurHandler = () => {
  //   setEmailIsDirty(true);
  // };

  ///ตอน submit form
  const formSubmissionHandler = (ev) => {
    ev.preventDefault();

    //setNameIsDirty(true);
    //setEmailIsDirty(true);

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    ///เหมาะกับ form submit แล้วตัว form ยังแสดงให้เห็นอยู่
    console.log("form submit : " + enteredName + " :: " + enteredEmail);

    ////เหมาะกับ form submit แล้วตัว form หายไป
    // const enteredValue = nameInputRef.current.value;
    // console.log("ref : " + enteredValue);

    // nameInputRef.current.value ='';  ===> this work BUT NOT IDEAL WAY TO DO , DON'T MANIPULATE THE DOM

    resetNameInput();
    //setEnteredName("");
    //setNameIsDirty(false);

    resetEmailInput();
    //setEnteredEmail("");
    //setEmailIsDirty(false);
  };

  const nameInputClasses = nameIsError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailIsError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameIsError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailIsError && (
          <p className="error-text">Please enter valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput_good;
