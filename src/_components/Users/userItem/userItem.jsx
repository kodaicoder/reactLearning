import React from "react";
import styles from "./userItem.module.css";

const UserItem = (props) => (
  <li className={styles.UserItem}>
    {props.user.name} ({props.user.age} years old)
  </li>
);

UserItem.propTypes = {};

UserItem.defaultProps = {};

export default UserItem;
