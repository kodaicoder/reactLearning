import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatcher = useDispatch();

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();

    dispatcher(authActions.LOGIN());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginFormSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
