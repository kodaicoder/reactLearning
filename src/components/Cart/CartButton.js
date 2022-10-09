import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector} from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatcher = useDispatch();
  const cartQuantity = useSelector((state) => state.cartStore.totalQuantity);

  const onClickCartHandler = () => {
    dispatcher(uiActions.TOGGLE());
  };

  return (
    <button className={classes.button} onClick={onClickCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
