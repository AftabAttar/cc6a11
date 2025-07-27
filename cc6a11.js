function processProducts(products) {
  
  const productNames = products.map(product => product.name);
  
  
  products.forEach(product => {
    const priceStatus = product.price > 50 ? 'above' : 'below';
    console.log(`${product.name} is ${priceStatus} $50`);
  });
  
  return productNames;
}

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },
  { name: "Monitor", price: 200 }
];

const names = processProducts(products);
console.log(names);