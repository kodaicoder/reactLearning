import { AvailableMeals } from "../AvailableMeals/AvailableMeals";
import { MealsSummary } from "../MealsSummary/MealsSummary";
import classes from "./meals-container.module.css";

export const MealsContainer = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
