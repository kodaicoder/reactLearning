import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { sendPostAuthRequest } from "../../api/httpREST";
import { AuthContext } from "../../store/authContext";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    /////Opt : May be put validation process here/////

    let apiUrl;
    const data = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    if (isLogin) {
      apiUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAW4kRGbU1Y9uar6DJxpJh1sUt9yC2lhjU";
    } else {
      apiUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAW4kRGbU1Y9uar6DJxpJh1sUt9yC2lhjU";
    }

    setIsLoading(true);
    const res = await sendPostAuthRequest(apiUrl, data);
    setIsLoading(false);
    if (res) {
      const expirationTime = new Date(
        new Date().getTime() + +res.expiresIn * 1000
      );
      authCtx.login(res.idToken, expirationTime);
      history.replace("/");
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type="submit">
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Sending request. . .</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
