import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NewUserForm from "./_components/Users/newUserForm/newUserForm";
import UsersList from "./_components/Users/usersList/usersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addingUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  /////////////// <></> ก็คือ <React.Fragment></React.Fragment>
  if (usersList.length > 0) {
    return (
      <>
        <NewUserForm addingUser={addingUserHandler} />
        <UsersList users={usersList} />
      </>
    );
  } else {
    return (
      <>
        <NewUserForm addingUser={addingUserHandler} />
      </>
    );
  }
}

export default App;
