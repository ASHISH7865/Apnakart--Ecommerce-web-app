import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartPage(props) {
  const cart = useSelector((state) => state.cart);

  console.log(cart.length);

  return (
    <div className=" ">
      <div className="py-12 px-12">
        <div className="max-w-md mx-auto bg-[#3954d9] shadow-lg rounded-lg  text-white md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <h1 className="text-xl  font-medium text-center">
                Shopping Cart
              </h1>
              {cart.cart.length !== 0 ? (
                <div className="md:grid md:grid-cols-12 gap-2 ">
                  <div className="col-span-12 p-5 overflow-auto max-h-[50vh]">
                    {cart.cart.map((item) => (
                      <Cart
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        description={item.description}
                        quantity={item.quantity}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="text-xl font-medium text-center text-white mt-10">
                    No Items in Cart
                  </h1>
                </div>
              )}
              {cart.cart.length !== 0 && (
                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <Link
                      to="/products"
                      className="text-md  font-medium text-white ml-2"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                  <div className="flex justify-center items-end">
                    <span className="text-lg font-medium text-gray-100 mr-1">
                      Total:
                    </span>
                    <span className="text-lg font-bold text-white ">
                      Rs. {cart.totalItemPrice}
                    </span>
                  </div>
                  <div className="border-2 p-2 rounded-md bg-blue-900 hover:bg-blue-700 cursor-pointer">
                    <Link
                      to="/products"
                      className="text-md  font-medium text-white mr-2"
                    >
                      Checkout
                    </Link>
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faArrowRight}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
