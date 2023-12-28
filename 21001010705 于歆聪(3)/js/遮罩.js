var header = document.getElementById("header");
var search = header.querySelector(".search");
var main = document.getElementById("main");
var cover = main.querySelector(".cover");

search.onclick = () =>{
    cover.style.display = "block";
}

cover.onclick = () =>{
    cover.style.display = "none";
}