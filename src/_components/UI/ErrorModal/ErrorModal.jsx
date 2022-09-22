import classes from "./error-modal.module.css";
import Card from "../card/card";
import Button from "../button/button";

export const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};
