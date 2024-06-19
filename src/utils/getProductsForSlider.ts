export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: object
}

type GetProductResponse = {
    data: Product[];
};

  export async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      return response.json()
      
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

// export default async function getProducts () {
//   const response = await fetch('https://fakestoreapi.com/products')
//   const productList = await response.json()
//   return productList
// }