
const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hour");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("secs");

function countdown(){
    const newYearsDate = new Date("1 Jan 2023");
    const currentDate = new Date();

    const secs = ((newYearsDate - currentDate) / 1000);
    const days = Math.floor(secs / 3600 / 24);
    const hours = Math.floor(secs / 3600) % 24;
    const minutes = Math.floor(secs / 60) % 60;
    const seconds = Math.floor(secs) % 60;


    daysEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);
}

//thisis to put the 0 before a singe number

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


//initial call of the milisecs
countdown();

setInterval(countdown, 1000);


