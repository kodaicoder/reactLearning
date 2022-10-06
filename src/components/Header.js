import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

import classes from "./Header.module.css";

const Header = (props) => {
  const dispatcher = useDispatch();
  const isAuth = useSelector((state) => state.authStore.isAuthenticated);
  const logoutClickHandler = (e) => {
    dispatcher(authActions.LOGOUT());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuth && (
          <ul>
            <li>
              <a href="#Products">My Products</a>
            </li>
            <li>
              <a href="#Sales">My Sales</a>
            </li>
            <li>
              <button onClick={logoutClickHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
