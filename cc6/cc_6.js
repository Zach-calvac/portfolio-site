class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); 
    this.teamSize = teamSize;
  }

  describe() {
    return `${super.describe()} They manage a team of ${this.teamSize} people.`;
  }
}
 
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${super.describe()} They manage a team of ${this.teamSize} people.`;
  }
}

const emp1 = new Employee("Lightning McQueen", "Marketing");
const emp2 = new Employee("Chick Hicks", "Sales");
const emp3 = new Employee("Doc Hudson", "Human Resources");

const mgr1 = new Manager("Emilio.", "Engineering");
const mgr2 = new Manager("Luigi.", "Finance");

console.log(emp1.describe());
console.log(emp2.describe());
console.log(emp3.describe());

console.log(mgr1.describe());
console.log(mgr2.describe());

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}