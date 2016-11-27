var Employee = function(firstName, lastName, idNum, jobTitle, annualSalary) {
  console.log('in Employee: '+ firstName, lastName, idNum, jobTitle, annualSalary);
  this.firstName = firstName;
  this.lastName = lastName;
  this.idNum = idNum;
  this.jobTitle = jobTitle;
  this.annualSalary = annualSalary;
}; // end Employee

//declare employees array
var employees = [];

var appendEmployees = function() {
  console.log('in appendEmployees');
  //append employees array to the DOM
  var index = Number(employees.length)-1;
  var newEmployeeRow = '<tr><td>'+employees[index].firstName+'</td><td>'+employees[index].lastName+"</td><td class='id'>"+employees[index].idNum+'</td><td>'+employees[index].jobTitle+'</td><td>$'+employees[index].annualSalary+"</td><td><button type='button' class='btn btn-sm btn-default btn_delete' onclick='deleteEmployee.call(this)'><span class='glyphicon glyphicon-trash'></span></button></td></tr>";
  $('#employeeTable').append(newEmployeeRow);
}; //end appendEmployees

var calcSalaryCost = function(){
  console.log('in calcSalaryCost');
  salaryCost=0;
  //add up the salary of each employee
  for (var i = 0; i < employees.length; i++) {
    salaryCost += Number(employees[i].annualSalary);
  }
  $('.salaryCost').show();
  //display total monthly salary cost (rounded to 2 decimal points) on DOM
  $('#salaryTotal').html('$'+(Math.round((salaryCost/12)*100)/100).toFixed(2));
  return salaryCost;
}; //end calcSalaryCost

var deleteEmployee = function() {
  console.log('in deleteEmployee');
  //remove deleted employee's table row from DOM
  $(this).closest('tr').remove();
  //find deleted employee's object by id number
  var id = $(this).closest('tr').find('.id').html();
  //iterate through empoloyee objects in employees array, splice one with matching id number from employees array
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].idNum === id) {
      var index = employees.indexOf(employees[i]);
      if (index > -1) {
          employees.splice(index, 1);
      }
    }
  }
  console.log(employees);
  //recalculate and display updated total monthly salary cost
  calcSalaryCost();
}; // end deleteEmployee

var getUserInput = function() {
  console.log('In getUserInput');
  //get user input variables
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNum = $('#idNum').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();
  //format annual salary variable input to get rid of commas
  annualSalary = annualSalary.replace(/,/g, "");
  //create new employee and push it to the employees array
  employees.push(new Employee (firstName, lastName, idNum, jobTitle, annualSalary));
  //clear input values and add focus to first input to mimick refresh
  $('input').val('');
  $('#firstName').focus();
  //call functions to append employees to DOM and calculate monthy salary cost
  appendEmployees();
  calcSalaryCost();
  //prevent page refresh by returning false,
  return false;
}; //end getUserInput
