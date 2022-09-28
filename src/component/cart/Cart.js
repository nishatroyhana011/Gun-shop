
import React from 'react';

const Cart = (props) => {

   const cart = props.cart;
   //console.log(typeof(product.price))

    let newPrice = 0;
    
    let shipping = 100;
    for(let product of cart){ 
        console.log(product)
        // quantity = quantity + product.quantity;  
        newPrice = Number(product.price) + newPrice;
        shipping = newPrice + 100;
    }

    return (
        <div>
            <div className='top-0 cart'>
                <h2 className='font-semibold text-red-600 text-xl my-8'>cart</h2>
                <p>total added: {cart.length}</p>
                
                <p>Total Price: {newPrice}</p>
                <p className='text-blue-800 font-semibold'>With Delivery charge: {shipping}</p>
            </div>
        </div>
    );
};

export default Cart;