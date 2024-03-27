"use strict"

const offButton= document.querySelector(".offButton");


offButton.addEventListener('click',() => {

if (offButton.getAttribute("data-text") == offButton.innerHTML) {
    offButton.innerHTML = offButton.getAttribute("data-text1");
    document.body.style.backgroundColor="brown";
    const lastTurnOff = new Date().toLocaleString("en-GB");
    localStorage.lastTurnOff = lastTurnOff;
    const localStorageDateOff = new Date(localStorage.lastTurnOff);

document.getElementById("currentDate").innerText = lastTurnOff;
} else {
    offButton.setAttribute("data-text1", offButton.innerHTML);
    offButton.innerHTML =offButton.getAttribute("data-text");
    document.body.style.backgroundColor="white";
    const lastTurnOn = new Date().toLocaleString("en-GB");
    localStorage.lastTurnOn = lastTurnOn;
    const localStorageDateOn = new Date(localStorage.lastTurnOn);
   
document.getElementById("currentDate2").innerText = lastTurnOn;
   
}
},
false
);


    