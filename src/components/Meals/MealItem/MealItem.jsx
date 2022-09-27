import { useContext } from "react";
import { CartContext } from "../../../context/CartContext/CartContext";
import { MealItemForm } from "../MealItemForm/MealItemForm";
import classes from "./meal-item.module.css";

export const MealItem = (props) => {
  const price = `$${props.mealPrice.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      amount,
      price: props.mealPrice,
    });
  };

  return (
    <li className={classes["meal"]}>
      <div>
        <div>
          <h3>{props.mealName}</h3>
        </div>
        <div className={classes["description"]}>{props.mealDescription}</div>
        <div className={classes["price"]}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
