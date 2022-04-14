import React, { createContext } from "react";
import "./style.css";
import CartItem from "./CartItem";
import ContextCart from "./contextCart";

export const CartContext = createContext();

const increament = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};

function AddtoCart() {
  return (
    <>
      <CartContext.Provider value={{ CartItem, increament }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
}
export default AddtoCart;
