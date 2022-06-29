import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { toast } from "react-hot-toast";

function ProductCard({ id, name, image, price, description }) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    let quantity = 1;
    dispatch(addToCart({ id, name, image, price, description, quantity }));
    toast.success("Product added to cart");
  };

  return (
    <div className="product__card">
      <Link className="flex items-center justify-center" to={"/products/" + id}>
        <img src={image} alt={name} />
      </Link>
      <div className="w-[100%]">
        <div className="product__card__info">
          <h3 className="text-center">{name}</h3>
          <p className="f-grey">{description}</p>
          <div className="flex-row">
            <p>Rs.{price}</p>
            <p className="price-cut">{price + 2999}</p>
          </div>
        </div>
        <div className="quantity ">
          <Button className="button w-[100%]" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
