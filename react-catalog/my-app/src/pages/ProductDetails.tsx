import './ProductDetails.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { type Product, readProduct, toDollars } from '../lib/index';
// useParams to extract the itemId from the browser
// and append it to the DOM to be displayed
export function ProductDetails() {
  // we do similar to catalog main page, but here only for one listing
  // so we use readItem() to read one item details
  // useParams used at the top
  // we got the productId from the browser
  // useParam productId is string or undefined
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    // productId:number is local for the async function. its like declaring it here
    async function loadProduct(productId: number) {
      try {
        // here productId is declared locally
        const responseData = await readProduct(productId);
        setProduct(responseData);
      } catch (error) {
        // the error here is not the same as the state because its declared locally inside
        // the catch as parameter, but setError is in the backpack outside
        // so its the same
        setError(error);
      } finally {
        setIsLoading(false);
        // because data is loaded to from the server the loading message
      }
    }

    if (productId) {
      // productId here is for useParams not the one in async function productId
      // the productId in Products array is number
      // adding plus in front of string, converts string into Number type
      loadProduct(+productId); // its being called with the extracted productId from the browser
      // we use productId of the useParams not the local one in async because its outside of the
      // useEffect, so its in the backpack and its changing, so it must be remembered by the useEffect async function or
      // contains a async function
    }
    // this is the useParams productId not a local productId
    // declared as a parameter inside the async function, so its in the backpack(dependency list)
  }, [productId]);

  // now after getting all the data, we need to

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // this error is local state declared in local scope not like the one in useEffect in catch
  // if error exists or product does not exist
  if (error || !product) {
    return (
      <div>
        {/* if there is an error display error message else if no error
        and item not showup, so unknown error  */}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  function handleClick() {
    alert(`adding to cart ${product?.name}`);
    navigate('/');
  }

  // what goes inside the detailProduct or in each clickable listed productCard
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Catalog
          </Link>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
            <img
              className="w-full h-80 object-contain"
              src={product.imageUrl}
              alt={product.name}
            />
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">
              {product.name}
            </h2>
            <h3>{toDollars(product.price)}</h3>
            <p>{product.shortDescription}</p>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{product.longDescription}</p>
          </div>
          <button className="add-to" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
