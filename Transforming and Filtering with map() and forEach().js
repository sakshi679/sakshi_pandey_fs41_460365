function productdetails(products) {
    let names = products.map(product => product.name);
    let prices = [];
  products.forEach(product => {
    prices.push(product.price);
    });
    return { names, prices };
  }
  
  let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  let details = productdetails(products);
  
  for (let i = 0; i < details.names.length; i++) {
    if (details.prices[i] > 50) {
      console.log(`${details.names[i]} is above $50`);
    } else {
      console.log(`${details.names[i]} is below $50`);
    }
  }
  