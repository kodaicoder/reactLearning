import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { Modal } from "../../UI/Modal/Modal";
import { CartItem } from "../CartItem/CartItem";
import { Checkout } from "../Checkout/Checkout";
import classes from "./cart.module.css";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
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
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const orderOnClickHandler = () => {
    setIsCheckout(true);
  };

  const onCartCheckoutHandler = async (userData) => {
    setIsSubmitting(true);

    setTimeout(async () => {
      await axios({
        method: "POST",
        url: "https://leaningreact-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        data: {
          userData,
          orderedItems: cartCtx.items,
        },
      })
        .then((res) => {
          cartCtx.clearCart();
          props.onHideCart();
          setIsSubmitting(false);
          MySwal.fire({
            title: "Uploaded!",
            text: "Your data has been upload successfully.",
            icon: "success",
          });
        })
        .catch((error) => {
          let errorMessage = "Axios : Fail to fetch " + error.message;
          if (error.response) {
            errorMessage += " with code : " + error.response.status;
          } else if (error.request) {
            errorMessage += " with request : " + error.request;
          } else {
            console.log("Error", error.message);
          }
          MySwal.fire("Something went wrong!", errorMessage, "error");
          setIsSubmitting(false);
        });
    }, 2000);
  };

  const modalActions = (
    <div className={classes["actions"]}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {isHasItem && (
        <button className={classes["button"]} onClick={orderOnClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes["total"]}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isHasItem && isCheckout && (
        <Checkout
          isSubmitting={isSubmitting}
          submitCheckout={onCartCheckoutHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};
