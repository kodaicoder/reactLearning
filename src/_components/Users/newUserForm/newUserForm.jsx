import React, { useState, createRef } from "react";
import styles from "./newUserForm.module.css";

import Card from "../../UI/card/card";
import Input from "../../UI/input/input";
import Button from "../../UI/button/button";
import { ErrorModal } from "../../UI/ErrorModal/ErrorModal";

const NewUserForm = (props) => {
  const nameInputRef = createRef();
  const ageInputRef = createRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const usernameChangeHandler = (name) => {
  //   setEnteredUsername(name);
  // };
  // const ageChangeHandler = (age) => {
  //   setEnteredAge(age);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    console.log("this value is from Ref > " + enteredName + " : " + enteredAge);
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }

    const user = {
      id: Math.floor(Math.random() * 1000),
      name: enteredName,
      age: enteredAge,
    };

    props.addingUser(user);

    // setEnteredUsername("");
    // setEnteredAge("");

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandlder = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title || "An error occured!"}
          message={error.message || "Something went worng!"}
          onClose={errorHandlder}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <Input inputLabel="Username" inputType="text" ref={nameInputRef} />
          <Input
            inputLabel="Age (Years)"
            inputType="number"
            ref={ageInputRef}
          />
          <Button btnType="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

NewUserForm.propTypes = {};

NewUserForm.defaultProps = {};

export default NewUserForm;
