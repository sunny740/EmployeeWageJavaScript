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
// ----------------------------------------------------------------------------------
{
    console.log("showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);

//UC 11A to 11D Using Object Functions Along With Arrow Functions
let totalWages=empDailyHrsAndWageArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
.reduce((totalWage,dailyHrsAndWage) =>totalWage += dailyHrsAndWage.dailyWage,0);

 // 11a: Calculate total Wage and total hours worked
let totalHours=empDailyHrsAndWageArr
.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
.reduce((totalHours,dailyHrsAndWage) =>totalHours += dailyHrsAndWage.dailyHours,0);
console.log("\nUC 11A Total Hours: "+totalHours+"Total Wages: "+totalWages);


    // 11b: Show the full workings days using foreach
process.stdout.write("\nUC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
      .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

          // 11c: Show Part working days using Map by reducing to String Array
let partWorkingDayStrArr = empDailyHrsAndWageArr
            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
            .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11C PartWorkingDayStrings: "+partWorkingDayStrArr);


    // 11d: No working days only using Map function
let nonWorkingDayNum=empDailyHrsAndWageArr
        .filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0)
        .map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);
console.log("\nUC 11D NonWorkingDayNums: "+nonWorkingDayNum);
}