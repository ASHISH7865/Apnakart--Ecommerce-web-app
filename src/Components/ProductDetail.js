import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "@atlaskit/spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

function ProductDetail(props) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const fetchProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: parseInt(id),
        name: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
        quantity,
      })
    );
  };

  return (
    <div className="product__detail__wrapper">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faArrowLeft} />
        <Link
          to="/products"
          className="text-md  font-medium text-blue-500 ml-2"
        >
          Continue Shopping
        </Link>
      </div>
      {!product ? (
        <Spinner size={"large"} appearance={"invert"} />
      ) : (
        <div className="product__detail">
          <div className="product__detail__image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product__detail__info">
            <h3 className="text-center text-3xl">{product.title}</h3>
            <p className="f-grey mt-5">{product.description}</p>
            <div className="flex-row justify-around w-48    ">
              <p className="text-3xl text-blue-800">Rs.{product.price}</p>
              <p className="price-cut line-through text-red-700 text-xl ml-2">
                Rs.{product.price + 2999}
              </p>
            </div>
            <div className="quantity flex flex-col items-center justify-center w-[100%]">
              <div className="flex flex-col items-center  justify-center ">
                <p className="text-center mt-5">Quantity : {quantity}</p>
                <div className="flex items-center ">
                  <Button className="primary" onClick={decreaseQuantity}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <p>{quantity}</p>
                  <Button className="primary" onClick={increaseQuantity}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </div>
              </div>
              <Button className="product_button" onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
