let accordion = document.getElementsByClassName("menu__list-item");

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener("click", function () {

        this.classList.toggle("open");

    });
}

let hiddenBox = document.querySelectorAll(".menu__list-item-panel");

for (let i = 0; i < hiddenBox.length; i++) {
    hiddenBox[i].addEventListener("click", function (e) {
        e.stopPropagation();
    });
}

let accordion1 = document.querySelectorAll(".menu__panel-list-invested");
console.log(accordion1)

for (let i = 0; i < accordion1.length; i++) {

    accordion1[i].addEventListener("click", function () {

        this.classList.toggle("open");
        console.log(this.classList.toggle('open'))

    });
}