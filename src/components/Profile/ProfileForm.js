import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { sendPostAuthRequest } from "../../api/httpREST";
import { AuthContext } from "../../store/authContext";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const newPasswordInputRef = useRef();

  const history = useHistory();

  const submitNewPasswordHandler = async (ev) => {
    ev.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    /////Opt : May be put validation process here/////
    const apiUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAW4kRGbU1Y9uar6DJxpJh1sUt9yC2lhjU";

    const data = {
      idToken: authCtx.token,
      password: enteredNewPassword,
      returnSecureToken: false,
    };

    setIsLoading(true);
    const res = await sendPostAuthRequest(apiUrl, data);
    setIsLoading(false);
    if (res) {
      history.replace("/");
    }
  };
  return (
    <form className={classes.form} onSubmit={submitNewPasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength={7}
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        {!isLoading && <button type="submit">Change Password</button>}
        {isLoading && <p>Requesting to server...</p>}
      </div>
    </form>
  );
};

export default ProfileForm;
