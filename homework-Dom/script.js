"use strict"

const offButton= document.querySelector(".offButton");


offButton.addEventListener('click',() => {
/*document.body.style.backgroundColor="blue";
offButton.innerText = 'Turn On';? 
});*/
if (offButton.getAttribute("data-text") == offButton.innerHTML) {
    offButton.innerHTML = offButton.getAttribute("data-text1");
    document.body.style.backgroundColor="brown";
    const timeStamp = new Date();
document.getElementById("currentDate").innerText = timeStamp;
} else {
    offButton.setAttribute("data-text1", offButton.innerHTML);
    offButton.innerHTML =offButton.getAttribute("data-text");
    document.body.style.backgroundColor="white";
    const timeStamp = new Date();
document.getElementById("currentDate2").innerText = timeStamp;
   
}
},
false
);
//const timeStamp = new Date();
//document.getElementById("currentDate").innerText = timeStamp;


    