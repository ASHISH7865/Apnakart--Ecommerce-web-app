import React, {useEffect, useState} from 'react';
import HeaderButton from "./HeaderButton";
import SearchComponent from "./SearchComponent";
import Button from "./Button";
import {useSelector} from "react-redux";

const navButtons = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products'
    },
    {
        name: 'Cart',
        link: '/cart'
    },
    {
        name: 'About',
        link: '/about'
    }
];


function Header() {
    const count = useSelector(state => state.cart.totalItems);
    return (
        <header className='header'>
            <h1 className='font-bold tracking-widest text-3xl '>ApnaKart</h1>
            <div className="header__body">
                {navButtons.map(button => <HeaderButton key={button.name} text={button.name} link={button.link} count={button.name === 'Cart' && count !==0 && count  } />)}
                <Button className="primary">Login</Button>
                <Button className="secondary-normal">Sign Up</Button>
                <SearchComponent />
            </div>
        </header>
    );
}

export default Header;