

const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");
let h,m,s;
function setTime(){
    let date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.Seconds();

}
 function setHands(){
    if(h>12){
        h=h-12;

    }
    let hRotation=h*30+m*0.5;
    let mrotation=6*m;
    let sRotation=6*s;
   
    hour.style.transform='rotate(${hRotation}deg)'
    minute.style.transform='rotate(${mRotation}deg)'
    second.style.transform='rotate(${sRotation}deg)'
 }
 setInterval(()=>{
    setTime();
    setHands();
 },1000);