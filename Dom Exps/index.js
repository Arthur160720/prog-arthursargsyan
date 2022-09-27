// let buttons = document.querySelectorAll('.btn');
//
// const handleClick = (event) => {
//     console.log("target > ", event.target);//.textContent);
//     console.log("curtarget > ", event.currentTarget);
//     //event.stopPropagation();
// }
//
// window.addEventListener('click', function (event) {
//     console.log('Window click', event.target);
//     event.stopPropagation();
// }, {capture: true});
//
// buttons.forEach(button => {
//     button.addEventListener('click', handleClick);
// });
//
// const img = document.querySelector('img');
// img.addEventListener('mouseover', function (event) {
//     console.log(event.currentTarget);
//     console.log(this);
// })

//create div
// const div = document.createElement('div');
// div.classList.add('wrapper');
// const body = document.querySelector('body'); //document.body
// body.appendChild(div);
//
// const header = document.createElement('h1');
// header.textContent = 'DOM (Document Object Model)';
//
// div.insertAdjacentElement('beforebegin', header);
//
// const ul = `
// <ul>
// <li> 1 </li>
// <li> 2 </li>
// <li> 3 </li>
// </ul>
// `;
//
// div.innerHTML = ul;
//
// const img = document.createElement('img');
// img.src = 'https://picsum.photos/240';
// img.width = 240;
// img.classList.add('super');
// img.alt = 'Super Man';
// div.appendChild(img);
// console.log(img);
//
// const elemHTML = `
// <div class = 'pDiv'>
// <p> Paragraph 1 </p>
// <p> Paragraph 2 </p>
// </div>`;
//
// const ulList = div.querySelector('ul');
// ulList.insertAdjacentHTML('beforebegin', elemHTML);
//
// const pDiv = document.querySelector('.pDiv');
// pDiv.children[1].classList.add('text');
// console.log(pDiv.children);
//
// pDiv.firstElementChild.remove();
//
// const generateAutoCard = (brand, color, year) => {
//     const curDate = new Date();
//     const curYear = curDate.getFullYear();
//     return `
//     <div class = "autoCard">
//     <h2> ${brand.toUpperCase()} ${year} </h2>
//     <p> Automobile ${brand.toUpperCase()} - ${year}. Auto - ${curYear - year}. </p>
//     <p> color: ${color} </p>
//     <button type="button" class="btn"> Delete </button>
//     </div>`;
// };
//
// const carsDiv = document.createElement('div');
// carsDiv.classList.add('autos');
//
// const carsList = [
//     {brand: 'Tesla', year: 2015, color: 'red'},
//     {brand: 'Lexus', year: 2016, color: 'silver'},
//     {brand: 'Nissan', year: 2012, color: 'black'},
// ];
//
// const carsHTML = carsList.map(car => {
//     return generateAutoCard(car.brand, car.color, car.year);
// }).join('');
//
// carsDiv.innerHTML = carsHTML;
//
// div.insertAdjacentElement('beforebegin', carsDiv);
//
// const buttons = document.querySelectorAll('.btn');
// function handleClick(e) {
//     const currentButton = e.currentTarget;
//     //currentButton.parentElement.remove();
//     currentButton.closest('.autoCard').remove();
// }
//
// buttons.forEach(button => {
//     button.addEventListener('click', handleClick);
// })

//arrays copying
// let name = 'Arthur';
// let nameTwo = name;
// name = 'Armen';
//
// let age = 100;
// let ageTwo = 15;
// age = 25;
//
// console.log(age, ageTwo);
// console.log(name, nameTwo);
//
// //1
// const students = ['Armen', 'Arthur', 'Arman', 'Jasmin'];
//
// const group2 = students.slice();
// group2[2] = 'Billie';
// console.log(group2, students);
//
// //2
// const group3 = [].concat(students);
// console.log(group3);
//
// //3
// const group4 = [...students];
// console.log(group4);
//
// //4
// const group5 = Array.from(students);
// console.log(group5);

//objects copying
//1
// let person = {
//     name: 'Artak',
//     age: 15
// };
//
// let fireman = Object.assign({}, person, {age: 38});
// console.log(person);
// console.log(fireman);
//
// //2 spread
// const worker = {...person};
// console.log(worker);
//
// //3 object in object copying
// const max = {
//     name: 'Max',
//     age: 16,
//     social: {
//         facebook: 'Maxim',
//         twitter: '@Max'
//     }
// };
//
// const max3 = JSON.parse(JSON.stringify(max));
// max3.social.facebook = 'max333';
// console.log(max);
// console.log(max3);


//Array.reduce, counting elements
// const data = ['truck', 'car', 'car', 'truck', 'bike', 'walk', 'car', 'car', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
//
// const dataCount = data.reduce((objectCount, transport) => {
//     if (!objectCount[transport]) {
//         objectCount[transport] = 0;
//     }
//     objectCount[transport]++;
//     return objectCount;
// }, {});
// console.log(dataCount);