import React from 'react';

const Product = ({ product, cart, addProductCart, products }) => {
    
    const { name, price, id } = product
    
    //Add product to the ShoppingCart
    const selectProduct = id => {
        const product = products.filter(product => product.id === id)[0]
        addProductCart([
            ...cart,
            product
        ])
    }

    //Eliminate product from the ShoppingCart
    const eliminateProduct = id => {
        const products = cart.filter(product => product.id !== id)
        
        //Put the products on the state
        addProductCart(products)
    }
    return ( 
        <div>
            <h3>{name}</h3>
            <p>${price}</p>
            
            {products
            ?
            <button
                type="button"
                onClick={() => selectProduct(id)}
                >Buy
            </button>  
            :
            <button
                type="button"
                onClick={()=> eliminateProduct(id)}
                >Eliminate
            </button>
            }
        </div>
     );
}
 
export default Product;