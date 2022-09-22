import React, { useState } from "react";
import styles from "./newUserForm.module.css";

import Card from "../../UI/card/card";
import Input from "../../UI/input/input";
import Button from "../../UI/button/button";
import { ErrorModal } from "../../UI/ErrorModal/ErrorModal";

const NewUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (name) => {
    setEnteredUsername(name);
  };
  const ageChangeHandler = (age) => {
    setEnteredAge(age);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
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

    console.log(enteredUsername + " : " + enteredAge);
    const user = {
      id: Math.floor(Math.random() * 1000),
      name: enteredUsername,
      age: enteredAge,
    };

    props.addingUser(user);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandlder = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title || "An error occured!"}
          message={error.message || "Something went worng!"}
          onClose={errorHandlder}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <Input
            id="username"
            inputLabel="Username"
            inputType="text"
            inputValue={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <Input
            id="age"
            inputLabel="Age (Years)"
            inputType="number"
            inputValue={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button btnType="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

NewUserForm.propTypes = {};

NewUserForm.defaultProps = {};

export default NewUserForm;
