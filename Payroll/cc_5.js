const employees = [
  {
    name: "Bryson DeChambeau",
    hourlyRate: 25,
    hoursWorked: 40
  },
  {
    name: "Tiger Woods",
    hourlyRate: 28,
    hoursWorked: 36
  },
  {
    name: "John Daly",
    hourlyRate: 30,
    hoursWorked: 40
  },
  {
    name: "Sahith Theegala",
    hourlyRate: 16,
    hoursWorked: 47
  }
];

console.log(employees);

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return rate * regularHours;
}
