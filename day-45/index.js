let signUpButton = document.querySelector('.signInWelcome').children.item(3);
let signInButton = document.querySelector('.signUpWelcome').children.item(3);
let main1 = document.querySelector('.main1');
let main2 = document.querySelector('.main2');


signUpButton.addEventListener('click', function () {
    main1.style.display = 'none';
    main2.style.display = 'grid';
});

signInButton.addEventListener('click', function () {
    main2.style.display = 'none';
    main1.style.display = 'grid';
});

