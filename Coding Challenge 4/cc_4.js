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

let customerType = "student"; 

let total = 0;
for (const product of products) {
  total += product.price;
}

if (customerType === "student") {
  total *= 0.95; 
} else if (customerType === "senior") {
  total *= 0.93; 
} 

console.log(`Customer Type: ${customerType}`);
console.log(`Final Total: $${total.toFixed(2)}`);

const customerTypes = ["regular", "student", "senior"];

for (let i = 1; i <= 3; i++) {
  let customerType = customerTypes[Math.floor(Math.random() * customerTypes.length)];
  let total = 0;
  let cartIndexes = new Set();

   // random cart selection
  while (cartIndexes.size < Math.floor(Math.random() * 2) + 2) {
    cartIndexes.add(Math.floor(Math.random() * products.length));
  }

  for (const index of cartIndexes) {
    const product = products[index];
    if (product.inventoryCount > 0) {
      total += product.price;
      product.inventoryCount--;
    } else {
      console.log(`Product out of stock: ${product.name}`);
    }
  }

  console.log(`\nCustomer ${i} (${customerType}) - Total: $${total.toFixed(2)}`);
}

console.log("\nRemaining Inventory:");
for (const product of products) {
  console.log(`${product.name}: ${product.inventoryCount} left`);
}

const firstProduct = products[0];

console.log("\nDetails of First Product After Discount:");
for (const key in firstProduct) {
  console.log(`${key}: ${firstProduct[key]}`);
}