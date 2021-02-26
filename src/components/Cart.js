import React from 'react';
import './cart.css'
import Product from './Product'


const Cart = ({cart, addProductCart}) => {
    return (
        <div className="cart">
            <h2>shoppingCart</h2>

            {cart.length === 0
                
            ?
                <p>The cart is empty</p>
            :
               cart.map(product => (
                <Product 
                    key={product.id}
                    product={product}
                    cart={cart}
                    addProductCart={addProductCart}
                />
            ))  
            }
        </div>
    );
}
 
export default Cart;