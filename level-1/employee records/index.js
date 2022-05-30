var employees = []

function Employee(Name, JobTitle, Salary) {
        this.Name = Name;
        this.JobTitle = JobTitle;
        this.Salary = Salary;
        this.Status = 'Full Time';   
}

Employee.prototype.printEmployeeForm = function(){
            console.log(this.Name + ' is a ' + this.JobTitle + ' with a salary of $' + this.Salary + ' and is currently working ' + this.Status);
        }

var alosha = new Employee ('Alosha', 'Web Developer', '40/hour')
var jonathan = new Employee ('Jonathan', 'Sr. Software Developer', '65/hour')
var adriana = new Employee ('Adriana', 'UX/UI Designer', '32/hour')

adriana.Status = 'Part-Time'

alosha.printEmployeeForm()
jonathan.printEmployeeForm()
adriana.printEmployeeForm()

employees.push(alosha, jonathan, adriana);
console.log(employees)

