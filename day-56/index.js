let accordion = document.getElementsByClassName("menu__list-item");

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener("click", function() {

        this.classList.toggle("active");

         let panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}