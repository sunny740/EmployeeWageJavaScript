const Is_Fulltime=2;
const Is_Parttime=1;
const Parttime_Hours=4;
const Fulltime_Hours=8;
const Wage_Per_Hours=20;
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random()*10)%2;
    switch(empCheck){
        case Is_Parttime:
            empHrs=Parttime_Hours;
            break;
        case Is_Fulltime:
           empHrs=Fulltime_Hours;
        default:
            empHrs=0;
    }
    let empWage = empHrs*Wage_Per_Hours;
    console.log("calculate empwage: "+empWage);
}