let img1 = document.querySelector(".img1");
let img = document.querySelector(".product");

img1.addEventListener("click", function () {
img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg\" alt=''>"
});

let img2 = document.querySelector(".img2");
img2.addEventListener("click", function () {
    img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-1.jpg\" alt=''>"
});

let img3 = document.querySelector(".img3");
img3.addEventListener("click", function () {
    img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-3.jpg\" alt=''>"
});

let img4 = document.querySelector(".img4");
img4.addEventListener("click", function () {
    img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-4.jpg\" alt=''>"
});

let img5 = document.querySelector(".img5");
img5.addEventListener("click", function () {
    img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-5.jpg\" alt=''>"
});

let img6 = document.querySelector(".img6");
img6.addEventListener("click", function () {
    img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-6.jpg\" alt=''>"
});

let img7 = document.querySelector(".img7");
img7.addEventListener("click", function () {
    img.innerHTML = "<img class='product-img' src=\"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-7.jpg\" alt=''>"
});

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
}
