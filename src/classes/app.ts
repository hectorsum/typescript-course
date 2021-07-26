abstract class Department{
  // private name: string;
  // private id: string;
  static fiscalYear = 2021;
  protected employees: string[] = []; //protected means that i can be used from inherited classed and still not be used from outside

  //readonly, it keeps the same value and does not change after its been initialized
  //shortcut
  constructor(protected readonly id: string = 'd2', public name: string) {
    // this.id = id;
    // this.name = name;
    //todo: To access static properties you must declare Department.<property>
    //Department.fiscalYear = fiscalYear
  }

  static createEmployee(name: string){
    return { 
      name: name
    }
  }

  //The instance should be based on Department
  abstract describe(this: Department):void;

  addEmployee(employee: string){
    // this.id = 'd2';
    this.employees.push(employee);
  }
  printEmployeeInformation(){
    console.log(this.employees.length);
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  //not shortcut
  admins:string[];
  constructor(id: string, admins: string[]){
    super(id,'IT')
    this.admins = admins;
  }
  //this method's properties are called from Department class which is abstract
  describe(){    
    console.log(`Department (${this.id}): ${this.name}`)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //Getter and Setter for making accesible outside the class
  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found..')
  }

  set mostRecentReport(value: string){
    if(!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  static getInstance(){
    if(AccountingDepartment.instance){
      return AccountingDepartment.instance;
    }
    this.instance = new AccountingDepartment('d2',[]);
    return this.instance;
  }

  private constructor(id: string, private reports: string[]){
    super(id, 'IT');
    this.lastReport = reports[0];
  }
  describe(){
    console.log('Accounting Department - ID:'+ this.id)
  }
  addReport(text: string){
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports(){
    console.log(this.reports);
  }
  addEmployee(name: string){
    if(name === 'Max'){
      return;
    }
    this.employees.push(name);
  }
}

let it = new ITDepartment('d1',['Hector']);
it.describe();
it.name = 'NEW NAME'
it.printEmployeeInformation();
// temp.describe();

// if describe method has Department type, the following object must have the same properties
// const accountingCopy = {
//   name: 'My Department',
//   describe: temp.describe
// }

// accountingCopy.describe();

//To use the method without "new", the method must be declared as static
const employee1 = Department.createEmployee('Max');

console.log(employee1, Department.fiscalYear);

it.addEmployee('Max');
it.addEmployee('Cesar');
it.describe();
//temp.employees[2] = 'Anna'; this is not allowed becaues employees is private, it works inside the class
it.printEmployeeInformation();


// const accounting = new AccountingDepartment('d2',[]); //not available bc its singleton now
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2)

// accounting.addReport('Something went wrong...')
accounting.addEmployee('Dani');
accounting.addEmployee('Michael');
accounting.addReport('MyReportIT')
accounting.mostRecentReport = 'Your End Report..';
// accounting.printReports();
// accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport)
accounting.describe();