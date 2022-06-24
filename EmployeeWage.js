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

//UC9 Arrow function

const findTotal = (totalVal,dailyVal) =>{
    return totalVal+dailyVal;
  }
  
  let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
  let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
  console.log("empwage with arrow "+ "Total Hours: "+totalHours+" total wages: "+ totalSalary);
  
  let nonWorkingDays = new Array();
  let partWorkingDays = new Array();
  let fullWorkingDays = new Array();
  empDailyHrsMap.forEach((value, key, map) =>{
      if(value==8) fullWorkingDays.push(key);
      else if(value==4) partWorkingDays.push(key);
      else nonWorkingDays.push(key);
  });
  
  console.log("full working days: "+fullWorkingDays);
  console.log("Part working days: "+partWorkingDays);
  console.log("Non working days: "+nonWorkingDays);