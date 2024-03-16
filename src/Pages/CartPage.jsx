import React from "react";
import { Cart } from "../Components";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);


  return (
    <div>
      <Cart products={cart} />
    </div>
  );
};

export default CartPage;
