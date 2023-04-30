const date = new Date();
const rendcalender=()=>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decembe",	
    ];
    date.setDate(1);
    const monthDays = document.querySelector(".days");
    const FirstDayIndex = date.getDay()-1; 
    const lastDay = new Date (date.getUTCFullYear(),date.getUTCMonth()+1,0).getDate();  
    const PrevlastDay = new Date (date.getUTCFullYear(),date.getUTCMonth(),0).getDate();
    const LastDayIndex = new Date (date.getUTCFullYear(),date.getUTCMonth()+1,0).getDay();
    const nextDay =7 -LastDayIndex;
    
    
    document.querySelector(".date h1").innerHTML =months[date.getMonth()];
    document.querySelector(".date p").innerHTML = new Date().toDateString();
    
    let days ="";
    
    for(let x = FirstDayIndex; x >0;x--)
    {    days += `<div class="prev_day">${PrevlastDay-x+1}</div>`;}
    
    for(let i = 1; i <= lastDay;i++)
    {  if (i === new Date().getDate()&& date.getMonth()=== new Date().getMonth())
        {
            days += `<div class="today">${i}</div>`;
        } else{
            days += `<div>${i}</div>`;
              }
    }
    
    for(let j = 1; j <= nextDay;j++)
    {    console.log(j);
        days += `<div class="nextday">${j}</div>`;}
    monthDays.innerHTML= days;
    
}

document.querySelector('.prev').addEventListener('click',()=>
{
date.setMonth(date.getMonth()-1);
rendcalender();
});
document.querySelector('.next').addEventListener('click',()=>
{
    date.setMonth(date.getMonth()+1);
    rendcalender();
});
rendcalender();