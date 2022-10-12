import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <a href="/welcome">Welcome</a> ==> not good to use, this will made the page refresh*/}
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            {/* <a href="/products">Products</a> ==>not good to use, this will made the page refresh*/}
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
