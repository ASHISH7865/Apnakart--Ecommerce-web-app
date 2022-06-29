import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).cart : [],
        totalItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).totalItems : null,
        totalItemPrice: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).totalItemPrice : null
    },
reducers: {
    addToCart: (state, action) => {
        const {id, name, image, price, description, quantity} = action.payload;

        const cart = state.cart;
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += quantity;
        } else {
            cart.push({id, name, image, price, description, quantity});
            state.totalItems += 1;
        }
        state.cart = cart;

        state.totalItemPrice = (cart.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);

        localStorage.setItem('cart', JSON.stringify({cart: state.cart, totalItems: state.totalItems, totalItemPrice: state.totalItemPrice}));




    },
    removeFromCart: (state, action) => {
        const {id} = action.payload;
        const cart = state.cart;
        const item = cart.find(item => item.id === id);
        if (item) {
            cart.splice(cart.indexOf(item), 1);
            state.totalItems -= 1;
        }
        state.cart = cart;

        state.totalItemPrice = (cart.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);

        localStorage.setItem('cart', JSON.stringify({cart: state.cart, totalItems: state.totalItems, totalItemPrice: state.totalItemPrice}));

    },
    increaseQuantity: (state, action) => {
        const {id} = action.payload;
        const cart = state.cart;
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += 1;
        }
        state.cart = cart;

        state.totalItemPrice = (cart.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);

        localStorage.setItem('cart', JSON.stringify({cart: state.cart, totalItems: state.totalItems, totalItemPrice: state.totalItemPrice}));
    },
    decreaseQuantity: (state, action) => {
        const {id} = action.payload;
        const cart = state.cart;
        const item = cart.find(item => item.id === id);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
            }
        }
        state.cart = cart;

        state.totalItemPrice = (cart.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);

        localStorage.setItem('cart', JSON.stringify({cart: state.cart, totalItems: state.totalItems, totalItemPrice: state.totalItemPrice}));
    }
}



});

export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;