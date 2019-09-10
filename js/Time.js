const TimeContainer = document.querySelector(".Time_box");
const TimeTitle = document.querySelector(".Time");
const TimeTitle2 = document.querySelector(".Time2");
const DayTitle = document.querySelector(".Day");
const DayTitle2 = document.querySelector(".Day2");

function getTime(){
 const date = new Date();
 const minutes = date.getMinutes();
 const hours = date.getHours();
 const seconds = date.getSeconds();

 TimeTitle.innerHTML = zero(hours) + ":" + zero(minutes);
 
}

function zero(num) {
    if(num < 10 ){
        num = "0"+num;
    }
    return num;
}

function getDay(){
 const dt = new Date();
 const day = dt.getDay();
 const month = dt.getMonth();
 const date = dt.getDate();

 let whatDay = "Day"
    if(day == 0){
        whatDay = "Sunday"
    }else if(day == 1){
        whatDay = "Monda"
    }else if(day == 2){
        whatDay = "Tuesday"
    }else if(day == 3){
        whatDay = "Wednesday"
    }else if(day == 4){
        whatDay = "Friday"
    }else if(day == 5){
        whatDay = "Friday"
    }else if(day == 6){
        whatDay = "Saturday"
    }
    DayTitle.innerHTML =month + "월" + date + "일" + " " + whatDay ;
    
}



function init(){
 getTime();
 getDay();
 setInterval(getTime,1000)
}

init();