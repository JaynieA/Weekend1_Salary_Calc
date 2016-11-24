console.log('sourcing scripts.js');

//input field id's:
//firstName, lastName, idNum, jobTitle, annualSalary

var Employee = function(firstName, lastName, idNum, jobTitle, annualSalary) {
  console.log('in Employee: '+ firstName, lastName, idNum, jobTitle, annualSalary);
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNum = idNum;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
}; // end Employee constructor

var getUserInput = function() {
  alert('In getUserInput');
  return false;
}; //end getUserInput

// var me = new Employee("Jaynie", "Anderson", '1', 'Boss Lady', 100000000);
//
// console.log(me);
