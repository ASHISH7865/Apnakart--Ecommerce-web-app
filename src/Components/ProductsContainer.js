import React, {useEffect} from 'react';
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom";
import Button from "./Button";
import Spinner from "@atlaskit/spinner";


function ProductsContainer({limit}) {
    const [products, setProducts] = React.useState(null);
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=' + limit);
        const data = await response.json();
        setProducts(data);
    }


    useEffect(() => {
            fetchProducts();

        }
        , []);
    return (
        <section className='product__container'>
            <h2 className='text-3xl'>Products</h2>
            <div className='product__group'>
                {products?products.map((item, index) =>
                    <ProductCard key={index} id={item.id} name={item.title} image={item.image} price={item.price}
                                 description={item.description}/>
                ):<Spinner size={"large"} />}
            </div>
            {products && limit!==100 && <div className='flex justify-center mt-5'>
                <Link to={'/products'}>
                    <Button className='primary'>View All</Button>
                </Link>
            </div>}
        </section>
    );
}


export default ProductsContainer;