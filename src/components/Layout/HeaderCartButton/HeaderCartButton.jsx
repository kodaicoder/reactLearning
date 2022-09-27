import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import CartIcon from "../../Cart/CartIcon";
import classes from "./header-cart-button.module.css";

export const HeaderCartButton = (props) => {
  const [isButtonBump, setIsButtonBump] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((prevNum, item) => {
    return prevNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isButtonBump ? classes.bump : ""}`;

  ////this example use useEffect for add/remove bump effect on header button
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonBump(true);
    const timer = setTimeout(() => {
      setIsButtonBump(false);
    }, 300);

    ///clean-up
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} {...props}>
      <span name="cart-icon" className={classes["icon"]}>
        <CartIcon />
      </span>
      <span name="label">Your Cart</span>
      <span name="total-amount" className={classes["badge"]}>
        {numberOfCartItems}
      </span>
    </button>
  );
};
