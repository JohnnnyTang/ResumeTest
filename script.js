let switch_button = document.querySelector(".switch");
let container = document.querySelector(".container");
let section_titles = document.querySelectorAll(".section__title");
let header = document.querySelector(".header");
let details = document.querySelector(".details");
let table = document.querySelector(".skill-table");
let hl = document.querySelectorAll(".hyper-link");
let body = document.querySelector("body");

switch_button.onclick = function() {
    container.classList.toggle("night-mode");
    for(let title of section_titles) {
        title.classList.toggle("night-mode");
    }
    header.classList.toggle("night-mode");
    details.classList.toggle("night-mode");
    table.classList.toggle("night-mode");
    for(let link of hl) {
        link.classList.toggle("night-mode");
    }
    body.classList.toggle("night-mode");
}