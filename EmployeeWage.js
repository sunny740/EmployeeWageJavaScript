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

//UC10 Creation
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr = new Array();
while(totalEmpHrs<= Max_Hrs_In_Month && totalWorkingDays< Number_Of_WorkingDay)

{
totalWorkingDays++;
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
totalEmpHrs+=empHrs;
empDailyHrsAndWageArr.push(
    {
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calculateDailWage(empHrs),
        toString(){
            return '\nDay'+this.dayNum+' working hour is '+this.dailyHours+' And Wage earned '+this.dailyWage
        },
    }
);
}
console.log("showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);