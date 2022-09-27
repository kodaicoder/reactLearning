import { createPortal } from "react-dom";
import classes from "./modal.module.css";

const portalDOM = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onHideCart={props.onHideCart} />, portalDOM)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalDOM)}
    </>
  );
};
