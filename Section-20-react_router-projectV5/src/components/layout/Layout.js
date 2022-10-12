import { MainNavigation } from "./MainNavigation";
import classes from "./Layout.module.css";

export const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};
