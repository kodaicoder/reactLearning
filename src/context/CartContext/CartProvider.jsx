import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

///state คือค่าเก่าก่อนหน้า action คือค่าที่โยนมา อาจจะมี type หรือ value
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    /////ทำการเพิ่ม  item ใหม่จาก action เข้าไปที่ list item เดิมที่ state
    //const updatedItems = state.items.concat(action.item);

    /// คำนวณ amount ใหม่ โดยเอา amount ของ action รวมกับ state
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    ////// ทำการหาว่า item มีอยุ่ใน cart แล้วหรือยังถ้ามีแล้วก็ให้รวมกันเป็นอันเดียวกัน
    /// หาตำแหน่งตัวที่ซ้ำก่อนโดยใช้ FindIndex
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    ///หา obj ที่ซ้ำจาก index ที่ได้ ถ้าไม่มีจะเป็น null
    const extingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (extingCartItem) {
      ///ถ้ามีตัว item ซ้ำเริ่มทำการสร้าง obj สินค้าตัวซ้ำใหม่ และทำการอัพเดต amount อีกรอบโดยเพิ่ม action เข้าไป
      const updatedItem = {
        ...extingCartItem,
        amount: extingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      ///ลบรายการออกทั้งหมด
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      ///ไม่ลบรายการออกทั้งหมด แค่ลดจำนวนลง 1
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
