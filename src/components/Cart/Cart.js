import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { postCartData } from "../../store/cart-actions";

const Cart = (props) => {
  const dispatcher = useDispatch();
  const cartItems = useSelector((state) => state.cartStore.items);

  const onSubmitClickHandler = () => {
    dispatcher(postCartData(cartItems));
  };

  const onClearClickHandler = () => {
    dispatcher(cartActions.CLEAR());
  };

  let cardContent = (
    <>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <button type="submit" onClick={onSubmitClickHandler}>
        Submit
      </button>
      <button type="button" className="danger" onClick={onClearClickHandler}>
        Clear
      </button>
    </>
  );
  if (cartItems.length <= 0) {
    cardContent = <h2>Your shopping cart is empty.</h2>;
  }
  return <Card className={classes.cart}>{cardContent}</Card>;
};

export default Cart;
