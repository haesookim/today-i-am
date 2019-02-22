/* toggle view mode between status and request*/
let statusdiv = document.getElementById("status");
let requestdiv = document.getElementById("request");

let statusbutton = document.getElementById("status-button");
let requestbutton = document.getElementById("request-button");

function showStatus(){
    statusdiv.style.display = "block";
    requestdiv.style.display = "none";
    statusbutton.classList.add("selected");
    requestbutton.classList.remove("selected");
}

function showRequest(){
    statusdiv.style.display = "none";
    requestdiv.style.display = "block";
    requestbutton.classList.add("selected");
    statusbutton.classList.remove("selected");
}