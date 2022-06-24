// --------------UC1
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

//UC8- Map function
console.log("EmpWage map total hours: "+Array.from(empDailyWageMap.values).reduce(totalWages,0));