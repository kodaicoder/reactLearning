import classes from "./error-modal.module.css";
import ReactDOM from "react-dom";
import Card from "../card/card";
import Button from "../button/button";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClose} />
);

const ModalOverlay = (props) => (
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
);

///////createPortal คือสั่งให้ react render JSX ไปที่ elementId ตัวใดๆในโปรเจ็คต์
export const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
