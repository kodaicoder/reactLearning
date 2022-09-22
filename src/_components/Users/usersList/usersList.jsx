import React from "react";
import styles from "./usersList.module.css";
import Card from "../../UI/card/card";
import UserItem from "../../Users/userItem/userItem";

const UsersList = (props) => {
  return (
    <Card>
      <ul className={styles.UsersList}>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

UsersList.propTypes = {};

UsersList.defaultProps = {};

export default UsersList;
