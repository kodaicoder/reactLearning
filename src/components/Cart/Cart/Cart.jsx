import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { Modal } from "../../UI/Modal/Modal";
import { CartItem } from "../CartItem/CartItem";
import classes from "./cart.module.css";

///hard code Cart items
// const cartItems = (
//   <ul className={classes["cart-items"]}>
//     {[
//       { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
//       { id: "c2", name: "Green Bowl", amount: 4, price: 36.98 },
//     ].map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );
////

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isHasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item, idx) => (
        <CartItem
          key={"cart-items-" + item.id + "_" + idx}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes["total"]}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes["actions"]}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes["button"]} hidden={!isHasItem}>
          Order
        </button>
      </div>
    </Modal>
  );
};
