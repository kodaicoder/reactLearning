import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocalStorageCartData,
  getLocalStorageCartData,
} from "./store/cart-actions";

let isInitial = true;

function App() {
  const cartIsVisible = useSelector((state) => state.uiStore.cartIsVisible);
  const cartItems = useSelector((state) => state.cartStore);

  const dispatcher = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatcher(setLocalStorageCartData(cartItems));
  }, [cartItems, dispatcher]);

  useEffect(() => {
    dispatcher(getLocalStorageCartData());
  }, [dispatcher]);

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
