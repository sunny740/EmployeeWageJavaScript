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

//UC7 EmpWage perform following Some operation using helper function

//UC7A calculate total empwage using array ForEach or reduce method

let totalEmpWage=0;
function sum(dailyWage)
{
    totalEmpWage+=dailyWage;

}
empDailyWageArr.forEach(sum);
console.log("Total Days: "+ TotalWorkingDays+ " Total Hrs: "+TotalEmpHrs+" emp wage: "+totalEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage+dailyWage;

}
console.log("Empwage with reduce: "+empDailyWageArr.reduce(totalWages,0)); //return single value

//Uc 7B show the day along with daily wage using map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+ "="+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("daily wage map: "+mapDayWithWageArr);

//UC7C using filter function calculate fulltime empwage
function FulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(FulltimeWage);
console.log("filter full time wage: "+fullDayWageArr);

//UC7D Using find function find first full time wage 
function findFullTimewage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("first time fulltime wage was earned on days: "+mapDayWithWageArr.find(findFullTimewage));

//UC7E check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("check all elements have full time: "+fullDayWageArr.every(isAllFullTimeWage));

//UC7F check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("check if any parttime wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage)
{
    if(dailyWage>0)
    return numOfDays+1;
    return numOfDays;
}
console.log("number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked,0));