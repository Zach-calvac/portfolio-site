let customers = [
  {
    name: "Joe Momma",
    email: "Joe.Momma@gmail.com",
    purchases: ["Computer", "Mouse", "Keyboard"]
  },
  {
    name: "Patrick Mahomes",
    email: "Pmahomie@gmail.com",
    purchases: ["Iphone", "AirPods"]
  },
  {
    name: "Charlie Brown",
    email: "charlieB@gmail.com",
    purchases: ["Tablet", "Pen", "Case"]
  }
];
customers.push({
  name: "Dana White",
  email: "danaUFC@gmail.com",
  purchases: ["Microphone"]
});
customers[1].email = "Joe.mommington@icloud.com";
customers[2].purchases.push("Charger");

console.log(customers);