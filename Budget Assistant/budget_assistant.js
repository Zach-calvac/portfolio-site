let startupName = "budget assistant";
let initialCapital = 10000;
let monthlyRevenue = 4000;
let monthlyExpenses = 3500;

let netCashFlow = monthlyRevenue - monthlyExpenses;
let currentBalance = initialCapital + netCashFlow;
let isProfitable = netCashFlow > 0;

console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);
