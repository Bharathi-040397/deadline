const Months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
const Weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const subTitle=document.querySelector(".sub-title");
const countdown=document.querySelectorAll(".main");
const deadlineCointainer=document.querySelector(".deadline-container");
const temp=new Date();
const tempYear=temp.getFullYear();
const tempMonth=temp.getMonth();
const tempDate=temp.getDate();
const tempHour=temp.getHours();
const tempMin=temp.getMinutes();
const tempDay=temp.getDay();
const futureTime=new Date(tempYear,tempMonth,tempDate+2,tempHour+3,tempMin,0);
const future=futureTime.getTime();
const years=futureTime.getFullYear();
const days=Weekdays[futureTime.getDay()];
const months=Months[futureTime.getMonth()];
const hours=futureTime.getHours();
const mins=futureTime.getMinutes();
const date=futureTime.getDate();
subTitle.innerHTML=`give away ends on ${days}, ${date} ${months}  ${years}, ${hours}:${mins}pm`;
function getTiming()
{
    let today=new Date().getTime();
    let t= future - today;
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMin=60*1000;
    let day=Math.floor(t / oneDay);
    let hour=Math.floor((t % oneDay)/oneHour);
    let min=Math.floor((t % oneHour) / oneMin);
    let sec=Math.floor((t % oneMin) / 1000);
    let value=[day,hour,min,sec];


 function format(item)
 {
     if(item<10)
     {
         return item = `0${item}`;
     }
     return item;
 }

     countdown.forEach((countdowns,index)=>{
         countdowns.innerHTML=format(value[index]);
     });
 if(t<0)
 {
     clearInterval(intervel);
     deadlineCointainer.innerHTML=`<h4 class="expired">sorry this give away has expired!!!</h4>`;
     
 }
   
}
let intervel=setInterval(getTiming,1000);
getTiming();