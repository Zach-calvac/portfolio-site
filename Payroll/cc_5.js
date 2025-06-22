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

for (const employee of employees) {
  const payroll = processPayroll(employee);
  console.log(`Payroll for ${payroll.name}`);
  console.log(`  Base Pay: $${payroll.basePay.toFixed(2)}`);
  console.log(`  Overtime Pay: $${payroll.overtimePay.toFixed(2)}`);
  console.log(`  Gross Pay: $${payroll.grossPay.toFixed(2)}`);
  console.log(`  Net Pay: $${payroll.netPay.toFixed(2)}`);
}