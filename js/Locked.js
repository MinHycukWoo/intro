const Key = document.querySelector(".Key");
const Lock = document.querySelector(".Lock");
const Lock_before = document.querySelector(".Lock:before");
const Lock_after = document.querySelector(".Lock:after");
const Gear = document.querySelector(".Gear")

function Open(){
    Lock.classList.add('open')
    Lock.classList.remove('Lock')
    //Key.classList.add('Key_open')
    //Key.classList.remove('Key_Lock')
}

function Close(){
    Lock.classList.remove('open')
    Lock.classList.add('Lock')
    //Key.classList.remove('Key_Lock')
    //Key.classList.add('Key_open')
}


