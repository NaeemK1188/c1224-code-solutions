import './Catalog.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { type Product, readCatalog, toDollars } from '../lib/index';

export function Catalog() {
  // useState is type Product, with initial value empty array assigning to products
  const [products, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  // imitate that its waiting the API or the server using useEffect
  // but useEffect uses async functions
  useEffect(() => {
    async function loadProducts() {
      try {
        const responseProduct = await readCatalog();
        setProduct(responseProduct);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts(); // function definition is executed when its called
  }, []);

  // if isLoading is true
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {/* if error is true show error.message, else(if there is no error, but nothing is displayed
           display Unknown Error)  */}
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  // to get products we need to do async function to get the data from the server(API)
  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.productId} className="w-full md:w-1/3 pr-4 p1-4">
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProp = {
  product: Product;
};

// in each listing there will be
function ItemCard({ product }: CardProp) {
  // So when clicking on the link what happens ?
  // we need to check the productDetails.tsx to make something rendered on the page
  return (
    <Link
      to={`/ProductDetails/${product.productId}`}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4">
      <img src={product.imageUrl} alt={product.name} />
      <h5 className="font-bold mb-3">{product.name}</h5>
      <h6>{toDollars(product.price)}</h6>
      <p>{product.shortDescription}</p>
    </Link>
  );
}
