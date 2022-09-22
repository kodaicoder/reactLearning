import { useState } from "react";
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

  if (usersList.length > 0) {
    return (
      <div>
        <NewUserForm addingUser={addingUserHandler} />
        <UsersList users={usersList} />
      </div>
    );
  } else {
    return (
      <div>
        <NewUserForm addingUser={addingUserHandler} />
      </div>
    );
  }
}

export default App;
