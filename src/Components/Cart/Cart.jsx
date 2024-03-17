import React, { useEffect } from "react";
import { Trash, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/CartSlice";
import { useDispatch } from "react-redux";

function Cart({ products }) {
  const dispatch = useDispatch();

  function deleteFromCart(Idx) {
    dispatch(removeToCart(Idx));
  }
  function increaseQty(Idx) {
    dispatch(increaseQuantity(Idx));
  }
  function decreaseQty(Idx) {
    if (products.qty === 1) {
      dispatch(removeToCart(Idx));
    } else {
      dispatch(decreaseQuantity(Idx));
    }
  }

  return (
    
      <div key={products.id} className="">
        <li className="flex py-6 sm:py-6 ">
          <div className="flex-shrink-0">
            <img
              src={products.image}
              alt={products.name}
              className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <a
                      href={products?.href}
                      className="font-semibold text-black"
                    >
                      {products.name}
                    </a>
                  </h3>
                </div>
                <div className="mt-1 flex text-sm">
                  <p className="text-sm text-gray-500">{products.color}</p>
                  {products.size ? (
                    <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                      {products.size}
                    </p>
                  ) : null}
                </div>
                <div className="mt-1 flex items-end">
                  <p className="text-xs font-medium text-gray-500 line-through">
                    {products?.originalPrice}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    &nbsp;&nbsp;{products.price}
                  </p>
                  &nbsp;&nbsp;
                  <p className="text-sm font-medium text-green-500">
                    {products?.discount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <div className="mb-2 flex">
          <div className="min-w-24 flex">
            <button
              type="button"
              className="h-7 w-7"
              onClick={() => decreaseQty(products.id)}
            >
              -
            </button>
            <span
              type="text"
              className="mx-1 h-7 w-9 rounded-md border text-center"
            >
              {products.qty}
            </span>
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center"
              onClick={() => increaseQty(products.id)}
            >
              +
            </button>
          </div>
          <div className="ml-6 flex text-sm">
            <button
              type="button"
              className="flex items-center space-x-1 px-2 py-1 pl-0"
              onClick={() => deleteFromCart(products.id)}
            >
              <Trash size={12} className="text-red-500" />
              <span className="text-xs font-medium text-red-500">Remove</span>
            </button>
          </div>
        </div>
      </div>
  );
}

export default Cart;
