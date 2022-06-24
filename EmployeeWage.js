const Is_Present = 1
let EmpCheck = Math.floor(Math.random() * 10) % 2;
if(EmpCheck == Is_Present)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

const PartTime = 1;
const FullTime = 2;
const PartTimeHours = 4;
const FullTimeHours = 8;
const WageperHour = 20;
let Emphours = 0;
let CheckEmp = Math.floor(Math.random() * 10) % 3;
CalculateDailyWage(CheckEmp);

function CalculateDailyWage(CheckEmp)
{
    switch(CheckEmp)
{
    case PartTime:
        Emphours = PartTimeHours;
        break;
    case FullTime:
        Emphours = FullTimeHours;
        break;
    default:
        Emphours = 0;
        break;
}
let EmpWage = Emphours * WageperHour;
console.log("Employee Wage is: " + EmpWage);
return EmpWage;
}

const Working_Days=20;
let totalEmpWage=0;
for(let i=1; i<=Working_Days; i++)
{
    var empCheck=Math.floor(Math.random()*10) % 3;
    empWage=CalculateDailyWage(empCheck);
    totalEmpWage+=empWage;
}
console.log("Total Employee Wage = " + totalEmpWage);