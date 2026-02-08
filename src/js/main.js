"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    getAnswer();
}

function getAnswer() {
    const button = document.getElementById("forAnswer");
    const answer = document.getElementById("answer");
    const bubble = document.getElementById("bubble3");

    if(bubble)        
    button.addEventListener("click", () => {
        answer.classList.remove("is_hidden");
    })
}