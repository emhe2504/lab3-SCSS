"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {

    const navigation = document.getElementById("nav-list");
    const menu = document.getElementById("menu"); //Dess ligger här för slippa upprepningar

    getAnswer();
    getMenu(navigation, menu);
    clickMenu(navigation, menu); //skickas med till funktionerna

    window.addEventListener("resize", () => getMenu(navigation, menu)); //skickas även här
}

function getAnswer() {
    const button = document.getElementById("forAnswer");
    const answer = document.getElementById("answer");
    const bubble = document.getElementById("bubble3");
    const letter = document.getElementById("letter");

    if (bubble)
        button.addEventListener("click", () => {
            answer.classList.remove("is_hidden");
            letter.classList.remove("is_hidden");
        })
}

function getMenu(navigation, menu) {

    if (!navigation || !menu) return; //finns dem ej, gör ej

    if (window.innerWidth > 1050) {
        navigation.classList.remove("is_hidden");
        menu.classList.add("is_hidden");
    } else {
        navigation.classList.add("is_hidden");
        menu.classList.remove("is_hidden");
    }
}

function clickMenu(navigation, menu) {

    if (!navigation || !menu) return; //finns dem ej, gör ej

    if (menu) {
        menu.addEventListener("click", () => {

            navigation.classList.toggle("is_hidden"); //toggle nytt för mig, lägger till om klassen ej finns, tar bort om klassen finns
        })
    }
}