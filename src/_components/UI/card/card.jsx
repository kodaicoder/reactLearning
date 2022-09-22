import React from "react";
import styles from "./card.module.css";

const Card = (props) => (
  <div className={`${styles.Card} ${props.className}`}>{props.children}</div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
