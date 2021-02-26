import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {

  //Create product list
  const [products, setProducts] = useState([
    { id: 1, name: "Ironhack T-shirt", price: 20 },
    { id: 2, name: "Ironhack Hoodie", price: 40 },
    { id: 3, name: "Ironhack Backpack", price: 30 },
    { id: 4, name: "Ironhack Full-Pack", price: 50 },
  ]);

  //State for shoppingCart
  const [cart, addProductCart] = useState([])

  //obtain date
  const date = new Date().getFullYear()

  return (
    <>
      <Header 
        title ="Tienda virtual"
      />

      <h2>Product List</h2>

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          addProductCart={addProductCart}   
          />
      ))}

      <Cart 
        cart={cart}
        addProductCart={addProductCart}
      />

      <Footer 
        date={date}
      />
    </>
    
  );
}

export default App;
