import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const animationTiming = {
  enter: 300,
  exit: 300,
};

const modal = (props) => {
  let cssClasses = ["Modal"];

  return (
    // <Transition
    //   in={props.show}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit
    // >
    //   {(state) => {
    //     state === "entering"
    //       ? cssClasses.push("ModalOpen")
    //       : state === "exiting"
    //       ? cssClasses.push("ModalClose")
    //       : null;
    //     return (
    //       <div className={cssClasses.join(" ")}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>
    //           Dismiss
    //         </button>
    //       </div>
    //     );
    //   }}
    // </Transition>

    // <CSSTransition
    //   in={props.show}
    //   timeout={animationTiming}
    //   mountOnEnter
    //   unmountOnExit
    //   classNames="fade-slide"
    // >
    //   <div className="Modal">
    //     <h1>A Modal</h1>
    //     <button className="Button" onClick={props.closed}>
    //       Dismiss
    //     </button>
    //   </div>
    // </CSSTransition>

    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClose",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
