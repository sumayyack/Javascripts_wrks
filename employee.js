var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],


]

// sort employee wrt exp asc
employees.sort((e1,e2)=>(e1[5]-e1[4])-(e2[5]-e2[4]))
console.log(employees);


//sort developers wrt salary
employee_dev=employees.filter(employee=>employee[3]=="developer").sort((e1,e2)=>e1[2]-e2[2])

console.log(employee_dev);


//print developer names whose experience greaterthan 6 yrs
var dev_names=employees.filter(emp=>emp[3]=="developer" && emp[5]-emp[4]>6).map(e=>e[1])
console.log(dev_names);

//add bonus of 5000rs for all developers
var _addbonus=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
console.log(_addbonus);
// add bonus of 2000 rs for all employees
var emp_bonus=employees.map(emp=>emp[2]+2000)
console.log(emp_bonus);


// print all employee names whose name start with a

var name_with_a=employees.filter(emp=>emp[1][0]=="a")
console.log(name_with_a);


// print developer name who is taking highest salary

var max_dev_salary=employees.filter(emp=>emp[3]=="developer").reduce((e1,e2)=>e1[2]>e2[2]?e1:e2)
console.log(max_dev_salary);

// print total sum of salary group by developers

var dev_sum_sal=employees.filter(e=>e[3]=="developer").reduce((e1,e2)=>e1[2]+e2[2])
console.log(dev_sum_sal);