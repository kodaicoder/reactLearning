import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const history = useHistory();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      commentTextRef.current.value = "";
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    const enteredText = commentTextRef.current.value;
    // send comment to server
    ////we have 2 way to sending quoteId
    //// first is from 'useLocation' to extract a quoteId from the path of url
    //// or
    //// using props sending from parent to child
    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>

      <div className="centered">
        <div className={classes.actions}>
          <button className="btn">Add Comment</button>
        </div>
        <button className="btn" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
