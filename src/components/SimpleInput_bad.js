import { useEffect, useRef, useState } from "react";

const SimpleInput_bad = (props) => {
  const nameInputRef = useRef();
  const [validator, setValidator] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const [enteredName, setEnteredName] = useState("");

  useEffect(() => {
    if (validator) console.log("Name input is valid!");
  }, [validator]);

  ///ตั้งค่าให้ตัว enteredName ทุกครั้งที่พิพม์ตัวอักษร
  const nameInputChangeHandler = (ev) => {
    setEnteredName(ev.target.value);

    if (ev.target.value.trim() !== "") return setValidator(true);
  };

  const nameInputOnBlurHandler = () => {
    setIsDirty(true);
    if (enteredName.trim() === "") return setValidator(false);
  };

  ///ตอน submit form
  const formSubmissionHandler = (ev) => {
    ev.preventDefault();

    setIsDirty(true);
    if (enteredName.trim() === "") return setValidator(false);

    setValidator(true);
    ///เหมาะกับ form submit แล้วตัว form ยังแสดงให้เห็นอยู่
    console.log("form submit : " + enteredName);

    ////เหมาะกับ form submit แล้วตัว form หายไป
    // const enteredValue = nameInputRef.current.value;
    // console.log("ref : " + enteredValue);

    // nameInputRef.current.value ='';  ===> this work BUT NOT IDEAL WAY TO DO , DON'T MANIPULATE THE DOM

    setEnteredName("");
  };

  const nameInputIsInvalid = !validator && isDirty;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputOnBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput_bad;
