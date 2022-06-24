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

// ---------------UC6

let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

function getWorkingHours(empCheck){
    switch(empCheck)
    {
        case Is_Parttime:
            return Parttime_Hours;
            
        case Is_Fulltime:
            return Fulltime_Hours;
        default:
            return 0;
    }
}
function calculateDailWage(empHrs)
 {
   return empHrs*Wage_Per_Hours;
 }

let empDailyWageArr = new Array();
while(TotalEmpHrs<=Max_Hrs_In_Month && TotalWorkingDays< Number_Of_WorkingDay)
{
    TotalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    TotalEmpHrs+=empHrs;
    empDailyWageArr.push(calculateDailWage(empHrs));
    empDailyHrsMap.set(TotalWorkingDays, empHrs);
    empDailyHrsMap.set(TotalWorkingDays, calculateDailWage(empHrs));
}
let EmpWages = calculateDailWage(TotalEmpHrs);
console.log("Total Days: "+TotalWorkingDays+" Total hours: "+TotalEmpHrs+" Emp wage: "+EmpWage);