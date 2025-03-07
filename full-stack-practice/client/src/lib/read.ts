// using read.ts for API that can be used anywhere and easy to maintain,
// so we can use it in catalog.tsx and productDetail.tsx to fetch from API
// export type Product = {
//   productId: number;
//   name: string;
//   price: number;
//   imageUrl: string;
//   shortDescription: string;
//   longDescription: string;
// };

// export async function reaCatalog(): Promise<Product[]>
// {
//  const response = await fetch('/api/products');
//         if (!response.ok) {
//           throw new Error(`Response status:${response.status}`);
//         }

//         return (await response.json()) as Product[];
// }

// export async function readProduct(productId: Product): Promise<Product>
// {

//           const response = await fetch(`/api/products/${productId}`);
//           if (!response.ok) {
//             throw new Error(`Response status:${response.status}`);
//           }

//           // else
//           return  (await response.json()) as Product;

// }
