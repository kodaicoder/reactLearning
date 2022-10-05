import { useEffect, useState } from "react";
import { Card } from "../../UI/Card/Card";
import { MealItem } from "../MealItem/MealItem";
import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/lotties/loadingAnimation.json";

import classes from "./available-meals.module.css";
import axios from "axios";

export const AvailableMeals = (props) => {
  const [availableFood, setAvailableFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAvailableFood = async () => {
      await axios({
        method: "GET",
        url: "https://leaningreact-default-rtdb.asia-southeast1.firebasedatabase.app/availableFood.json",
      })
        .then((res) => {
          if (res.data) {
            const loadedData = [];
            for (const key in res.data) {
              loadedData.push({
                id: key,
                name: res.data[key].name,
                description: res.data[key].description,
                price: res.data[key].price,
              });
            }
            setAvailableFood(loadedData);
            setIsLoading(false);
          } else {
            throw new Error("not found any data.");
          }
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

          setError(errorMessage);
          setIsLoading(false);
        });
    };
    getAvailableFood();
  }, []);

  const mealList = availableFood.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        mealName={meal.name}
        mealDescription={meal.description}
        mealPrice={meal.price}
      />
    );
  });
  let content = mealList;

  isLoading &&
    error === "" &&
    (content = (
      <Lottie
        animationData={loadingAnimation}
        style={{ width: "50%", margin: "auto" }}
      />
    ));

  !isLoading &&
    error !== "" &&
    (content = <h4 className={classes["error-msg"]}>{error}</h4>);

  return (
    <section className={classes["meals"]}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};
