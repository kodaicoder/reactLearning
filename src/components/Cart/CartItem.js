import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatcher = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const addItemToCartHandler = () => {
    const selectedItem = {
      id,
      title,
      price,
    };
    dispatcher(cartActions.ADDITEM({ item: selectedItem }));
  };

  const removeItemFromCartHandler = () => {
    dispatcher(cartActions.REMOVEITEM({ id }));
    //OR
    //// dispatcher(cartActions.REMOVEITEM({ id:id }));
    //OR
    //// dispatcher(cartActions.REMOVEITEM(id));  << but this need to change in slice reducer id= action.payload
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
