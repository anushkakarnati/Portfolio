const words = [
"Web Developer",
"Java Programmer",
"UI Designer",
"Frontend Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = words[i];

if (!isDeleting) {

document.getElementById("typing").textContent =
current.substring(0, j++);

if (j > current.length) {

isDeleting = true;

setTimeout(type, 1000);

return;

}

} else {

document.getElementById("typing").textContent =
current.substring(0, j--);

if (j < 0) {

isDeleting = false;

i++;

if (i == words.length)
i = 0;

}

}

setTimeout(type, isDeleting ? 60 : 120);

}

type();

window.onscroll = function(){

let winScroll =
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled =
(winScroll / height) * 100;

document.getElementById("progressBar").style.width =
scrolled + "%";

let btn =
document.getElementById("topBtn");

if(winScroll>300){

btn.style.display="block";

}

else{

btn.style.display="none";

}

}

document.getElementById("topBtn").onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("dark");

let icon=document.getElementById("themeBtn");

if(document.body.classList.contains("dark")){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}

else{

icon.classList.remove("fa-sun");

icon.classList.add("fa-moon");

}

}