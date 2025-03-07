import { createContext } from 'react';
import { Product } from '../lib';
// type value that cart Values return an array of products
// and function to add product to cart
type CartContextValue = {
  cart: Product[];
  addToCart: (product: Product) => void; // adding product to cart
};

// name of useContext starts with uppercase as a actual component
// it return react component but with generic type <>
// default values which are null or empty. But the context values are usually object with key-value pair
export const CartContextValue = createContext<CartContextValue>({
  // the values are:
  // type is array and function with empty values
  // with generic parameters any name
  // key is cart and value which is a key and its value is an empty array
  cart: [],
  // the default value is an object with property addToCart and empty function
  // and using return undefined is the best way
  addToCart: () => undefined, // declare function that does nothing
  // void don't return anything but its undefined
});

// or put inside null (null)
