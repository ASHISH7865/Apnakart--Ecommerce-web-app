import React, { useState } from "react";

import Button from "./Button";
import { useDispatch } from "react-redux";
import { increaseQuantity, removeFromCart } from "../redux/slice/cartSlice";
import { decreaseQuantity } from "../redux/slice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";

function Cart({ id, name, image, price, description, quantity }) {
  const dispatch = useDispatch();
  const increaseQuantityHandler = () => {
    dispatch(increaseQuantity({ id, name, image, price, description }));
  };
  const decreaseQuantityHandler = () => {
    dispatch(decreaseQuantity({ id, name, image, price, description }));
  };

  return (
    <div className="flex justify-between items-center p-6 w-[100%] ">
      <div className="flex items-center w-96">
        <img
          src={image}
          width="60px"
          height="60px"
          alt={name}
          className="rounded-full "
        />
        <div className="flex flex-col ml-3 ">
          <span className="md:text-md font-medium">{name}</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-[30%]">
        <div className="flex  items-center justify-center">
          <Button
            className="font-semibold primary"
            onClick={decreaseQuantityHandler}
          >
            -
          </Button>
          <span className="font-medium w-[20px] text-center">{quantity}</span>
          <Button
            className="font-semibold primary"
            onClick={increaseQuantityHandler}
          >
            +
          </Button>
        </div>
        <div className="">
          <span className="text-s font-medium">
            Rs . {(quantity * price).toFixed(2)}
          </span>
        </div>
        <div className="cursor-pointer hover:scale-150">
          <FontAwesomeIcon
            icon={faTrash}
            className="text-white hover:text-red-400"
            onClick={() => {
              dispatch(removeFromCart({ id, name, image, price, description }));
              toast.success("Item removed from cart");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
