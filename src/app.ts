class Department {
  name: string;
  employees:string[] = [];
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
  addEmployees(employee: string){
    this.employees.push(employee);
  }

}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

accountingCopy.describe();