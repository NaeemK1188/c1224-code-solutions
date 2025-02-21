import { products, type Product } from './data';

// display all items on the screen
export function readCatalog(): Promise<Product[]> {
  return Promise.resolve(products);
}

// to locate an image based on its ID when we do Details/imageId
export function readProduct(productId: number): Promise<Product | undefined> {
  return Promise.resolve(products.find((p) => p.productId === productId));
}
