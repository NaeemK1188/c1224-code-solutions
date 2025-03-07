import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { CartContextValue } from './components/cartContext';
import { useState } from 'react';
import { Product } from './lib';

export function App() {
  const [cart, setCart] = useState<Product[]>([]); // its state or starting state is empty array of product objects
  // its type is <Product[]>
  // or declare newProduct here with all ait properties. but we need to use the passed
  // or existing one
  function addToCart(newProduct: Product) {
    //creating new instance, not using push because we want to
    // to create new instance not the existing one of cart, so we use concat
    setCart(cart.concat(newProduct));

    // its an array of product objects with an existing empty
    // setCart(cart.push(newProduct))
  }

  // holds the value of the cartContext
  const cartContextValue = { cart, addToCart };

  return (
    <CartContextValue.Provider value={cartContextValue}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartContextValue.Provider>
  );
}
