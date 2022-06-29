import React from 'react';
import SliderImage from '../assets/sliderImg.png'
import Button from "./Button";
import {Link} from "react-router-dom";

function Slider() {
    return (
        <section className='image__component'>
            <img src={SliderImage} alt='img' />
            <div className='abs-center'>
            <p>New Arrival</p>
           <Link to={'/products'}>

                <Button className='secondary'>Shop Now</Button>
           </Link>
            </div>
        </section>
    );
}

export default Slider;