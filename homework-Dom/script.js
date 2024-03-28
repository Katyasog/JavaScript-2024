"use strict"

const offButton= document.querySelector(".offButton");


offButton.addEventListener('click',() => {

if (offButton.getAttribute("button-text-on") == offButton.innerHTML) {
    offButton.innerHTML = offButton.getAttribute("button-text-off");
    document.body.style.backgroundColor="white";
    const lastTurnOff = new Date().toLocaleString("en-GB");
    const localStorageDateOff = new Date(localStorage.lastTurnOff);
    localStorage.setItem(lastTurnOff,"off");


document.getElementById("currentDate").innerText = lastTurnOff;
} else {
    offButton.setAttribute("button-text-off", offButton.innerHTML);
    offButton.innerHTML =offButton.getAttribute("button-text-on");
    document.body.style.backgroundColor="brown";
    const lastTurnOn = new Date().toLocaleString("en-GB");
    localStorage.setItem(lastTurnOn,"on");
    const localStorageDateOn = new Date(localStorage.lastTurnOn);
   
document.getElementById("currentDate2").innerText = lastTurnOn;
   
}
},
false
);


    