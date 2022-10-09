// import { useDispatch } from "react-redux";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
const axios = require("axios").default;

export const setLocalStorageCartData = (cartData) => {
  return async () => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };
};

export const getLocalStorageCartData = () => {
  return async (dispatcher) => {
    const itemsData = JSON.parse(localStorage.getItem("cartData"));
    if (itemsData) {
      dispatcher(
        cartActions.REPLACECART({
          items: itemsData.items || [],
          totalQuantity: itemsData.totalQuantity || 0,
        })
      );
    }
  };
};

export const postCartData = (cartData) => {
  return async (dispatcher) => {
    await axios({
      method: "POST",
      url: "https://leaningreact-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      data: JSON.stringify(cartData),
    })
      .then(function (response) {
        console.log(response);
        dispatcher(uiActions.TOGGLE());
        dispatcher(cartActions.CLEAR());
        alert(response.status + ":" + response.statusText);
      })
      .catch(function (error) {
        let errorMessage = "Axios : Fail to fetch " + error.message;
        if (error.response) {
          errorMessage += " with code : " + error.response.status;
        } else if (error.request) {
          errorMessage += " with request : " + error.request;
        } else {
          console.log("Error", error.message);
        }
        alert(errorMessage);
      });
  };
};
