let date = document.getElementById("time");

let now = new Date();

let fullTime = now.toLocaleString();

date.innerHTML = fullTime;
