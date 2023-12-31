type Product = Record<string, number>;

/* interface Product {
   [productName : string] : number;
  }
*/

const productPrices: Product = {
  Apple: 1.2,
  Banana: 0.5,
  Orange: 0.8,
};

const getPrice = (productName: string) => {
  return productPrices[productName];
};
