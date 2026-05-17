// Array to store employee records 
let employees = []; 
// Add Employee 
function addEmployee() 
{ 
    let name = document.getElementById("name").value; 
    let salary = parseFloat( 
        document.getElementById("salary").value 
    ); 
    let department = 
        document.getElementById("department").value; 
    // Validation 
    if(name === "" || department === "" || isNaN(salary)) 
    { 
        alert("Please fill all fields"); 
        return; 
    } 
    // Object Creation 
    let employee = 
    { 
        name: name, 
        salary: salary, 
        department: department 
    }; 
    // Store object inside array 
    employees.push(employee); 
    alert("Employee Added Successfully"); 
    // Clear fields 
    document.getElementById("name").value = ""; 
    document.getElementById("salary").value = ""; 
    document.getElementById("department").value = ""; 
} 
// Display Employees 
function displayEmployees() 
{ 
    let table = ` 
    <table class="table table-bordered table-striped"> 
        <tr class="table-dark"> 
            <th>Name</th> 
            <th>Salary</th> 
            <th>Department</th> 
        </tr> 
    `; 
    employees.forEach(function(emp) 
    { 
        table += ` 
        <tr> 
            <td>${emp.name}</td> 
            <td>₹${emp.salary}</td> 
            <td>${emp.department}</td> 
        </tr> 
        `; 
    }); 
    table += "</table>"; 
    document.getElementById("tableData").innerHTML = table; 
    document.getElementById("output").innerHTML = ""; 
} 
// Filter Employees 
function filterEmployees() 
{ 
    let filteredEmployees = 
        employees.filter(emp => emp.salary > 50000); 
    let result = ` 
    <h4>Employees with Salary Greater Than 50000</h4> 
    `; 
    filteredEmployees.forEach(function(emp) 
    { 
        result += ` 
        <p> 
            ${emp.name} - ₹${emp.salary} - ${emp.department} 
        </p> 
        `; 
    }); 
   document.getElementById("output").innerHTML = result; 
} 
// Salary Statistics 
function salaryStatistics() 
{ 
    if(employees.length === 0) 
    { 
        alert("No Employees Found"); 
        return; 
    } 
    // Total Salary 
    let totalSalary = 
        employees.reduce((sum, emp) => 
        sum + emp.salary, 0); 
    // Average Salary 
    let averageSalary = 
        totalSalary / employees.length; 
    // Department Count 
    let dept = 
        prompt("Enter department name"); 
    let count = 
        employees.filter(emp => 
        emp.department.toLowerCase() 
        === dept.toLowerCase()).length; 
    document.getElementById("output").innerHTML = ` 
    <div class="alert alert-info"> 
        <h4>Salary Statistics</h4> 
        <p> 
            <b>Total Salary:</b> 
            ₹${totalSalary} 
        </p> 
        <p> 
            <b>Average Salary:</b> 
            ₹${averageSalary.toFixed(2)} 
        </p> 
        <p> 
            <b>Employees in ${dept} Department:</b> 
            ${count} 
        </p> 
    </div> 
    `; 
}