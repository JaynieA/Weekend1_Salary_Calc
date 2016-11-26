var Employee = function(firstName, lastName, idNum, jobTitle, annualSalary) {
  console.log('in Employee: '+ firstName, lastName, idNum, jobTitle, annualSalary);
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNum = idNum;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
}; // end Employee constructor

//declare employees array
var employees = [];

var getUserInput = function() {
  console.log('In getUserInput');
  //get user input variables
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNum = $('#idNum').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();
  console.log(firstName, lastName, idNum, jobTitle, annualSalary);
  //create new employee and push it to the employees array
  employees.push(new Employee (firstName, lastName, idNum, jobTitle, annualSalary));
  console.log(employees);
  //clear input values and add focus to first input to mimick refresh
  $('input').val('');
  $('#firstName').focus();
  //call functions to append employees to DOM and calculate monthy salary cost
  appendEmployees();
  calcSalaryCost();
  //prevent page refresh by returning false,
  return false;
}; //end getUserInput

var appendEmployees = function() {
  console.log('in appendEmployees');
  //append employees array to the DOM
  var index = Number(employees.length)-1;
  var newEmployeeRow = '<tr><td>'+employees[index].firstName+'</td><td>'+employees[index].lastName+'</td><td>'+employees[index].idNum+'</td><td>'+employees[index].jobTitle+'</td><td>'+employees[index].annualSalary+'</td></tr>';
  $('#employeeTable').append(newEmployeeRow);
}; //end appendEmployees

var calcSalaryCost = function(){
  console.log('in calcSalaryCost');
  salaryCost=0;
  //add up the salary of each employee
  for (var i = 0; i < employees.length; i++) {
    salaryCost += Number(employees[i].annualSalary);
  }
  console.log(salaryCost/12);
  $('.salaryCost').show();
  //display total monthly salary cost on DOM
  $('#salaryTotal').html(salaryCost/12);
  return salaryCost;
}; //end calcSalaryCost
