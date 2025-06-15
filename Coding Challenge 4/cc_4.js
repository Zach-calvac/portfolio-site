const products = [
  {
    name: "Mouse",
    category: "Electronics",
    price: 29.99,
    inventoryCount: 150
  },
  {
    name: "Water Bottle",
    category: "Household",
    price: 14.95,
    inventoryCount: 80
  },
  {
    name: "Shoes",
    category: "Apparel",
    price: 79.99,
    inventoryCount: 60
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 99.99,
    inventoryCount: 35
  },
  {
    name: "Toothpaste",
    category: "groceries",
    price: 9.49,
    inventoryCount: 200
  }
];

for (const product of products) {
  switch (product.category.toLowerCase()) {
    case "electronics":
      product.price *= 0.8; 
      break;
    case "apparel":
      product.price *= 0.85; 
      break;
    case "groceries":
    case "household":
      product.price *= 0.9; 
      break;
    default:
      break;
  }
}

console.log("Updated Product List with Discounts:");
for (const product of products) 
{
  console.log(`${product.name} - ${product.category} - $${product.price.toFixed(2)} - In Stock: ${product.inventoryCount}`);
}
