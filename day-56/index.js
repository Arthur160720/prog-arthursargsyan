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

