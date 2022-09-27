import { useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart/Cart/Cart";
import { Header } from "./components/Layout/Header/Header";
import { MealsContainer } from "./components/Meals/MealsContainer/MealsContainer";
import { CartProvider } from "./context/CartContext/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartModalHandler = () => {
    setCartIsShown(true);
  };

  const hideCartModalHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartModalHandler} />}
      <Header onShowCard={showCartModalHandler} />
      <main>
        <MealsContainer />
      </main>
    </CartProvider>
  );
}

export default App;
