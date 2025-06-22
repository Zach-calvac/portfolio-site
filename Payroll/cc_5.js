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

const grossPay = calculateBasePay(employee.hourlyRate, employee.hoursWorked) +
calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);

function calculateBasePay(rate, hours) {
  const regularHours = Math.min(hours, 40);
  return rate * regularHours;
}

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(0, hours - 40);
  return overtimeHours * rate * 1.5;
}

function calculateTaxes(grossPay) {
  const taxRate = 0.15;
  return grossPay * taxRate;
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}