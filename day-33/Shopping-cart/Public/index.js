// let container = document.querySelector('.containerMain');
// cartList = document.querySelector('.sidebar');
//
// async function getData() {
//     let product = await fetch('http://localhost:3003/products');
//     let data = await product.json();
//
//     for (let i = 0; i <= data.length; i++) {
//         let product = createProduct(data[i]);
//         product.classList.add('phone' + i);
//         product.children.item(0).classList.add('img' + i);
//         product.children.item(1).classList.add('name' + i);
//         product.children.item(2).classList.add('price' + i);
//         product.children.item(3).classList.add('button' + i);
//         container.appendChild(product);
//
//
//         let button = product.children.item(3);
//
//         // let count = 0;
//         button.addEventListener('click', function () {
//             // count++;
//
//             // if (count > 1) {
//             //     console.log();
//             // } else {
//                 let selectedProducts = selectedProduct(data[i]);
//                 cartList.appendChild(selectedProducts);
//             // }
//             //
//             // let cartButton = cartList.children.item(0).children.item(3);
//             //
//             // cartButton.addEventListener('click', function () {
//             //     count--;
//             // });
//         });
//     }
// }
//
// getData();
//
//
// function createProduct(product) {
//     let card = document.createElement('article');
//
//     let image = document.createElement('img');
//     image.setAttribute('src', product.imageLink);
//     image.style.width = '100px';
//     image.style.height = '100px';
//
//     let price = document.createElement('p');
//     price.innerText = product.price + '$';
//
//     let name = document.createElement('p');
//     name.innerText = product.name;
//
//     let button = document.createElement('button');
//     button.innerText = 'Add to cart list';
//
//     card.appendChild(image);
//     card.appendChild(name);
//     card.appendChild(price);
//     card.appendChild(button);
//     return card;
// }
//
// function selectedProduct(product) {
//     let card = document.createElement('article');
//     card.classList.add('newPhone');
//
//     let image = document.createElement('img');
//     image.classList.add('img');
//     image.setAttribute('src', product.imageLink);
//     image.style.width = '100px';
//     image.style.height = '100px';
//
//     let price = document.createElement('p');
//     price.classList.add('price')
//     price.innerText = product.price + '$';
//
//     let name = document.createElement('p');
//     name.classList.add('name')
//     name.innerText = product.name;
//
//     let button = document.createElement('button');
//     button.classList.add('button')
//     button.innerText = 'Remove from cart list';
//
//     let priceCounter = document.createElement('input');
//     priceCounter.value = product.price;
//     priceCounter.classList.add('input1');
//
//     let buttonNegative = document.createElement('button');
//     buttonNegative.classList.add('button1');
//     buttonNegative.innerText = '-';
//
//     let productCount = document.createElement('input');
//     productCount.classList.add('input');
//     productCount.style.width = '20px';
//     productCount.value = '1';
//
//     let buttonPositive = document.createElement('button');
//     buttonPositive.classList.add('button2');
//     buttonPositive.innerText = '+';
//
//     let certainPrice = product.price;
//     buttonPositive.addEventListener('click', function () {
//         productCount.value++;
//         product.price += certainPrice;
//         return priceCounter.value = product.price;
//     });
//
//     buttonNegative.addEventListener('click', function () {
//         if (productCount.value > 0) {
//
//             productCount.value--;
//             product.price -= certainPrice;
//             return priceCounter.value = product.price;
//
//         } else {
//             productCount.value = '0';
//         }
//     });
//
//     button.addEventListener('click', function () {
//         cartList.removeChild(card);
//     });
//
//
//     card.appendChild(image);
//     card.appendChild(name);
//     card.appendChild(price);
//     card.appendChild(button);
//     card.appendChild(buttonNegative);
//     card.appendChild(productCount);
//     card.appendChild(buttonPositive);
//     card.appendChild(priceCounter);
//
//     return card;
// }
//
// let title = document.createElement('article');
// title.classList.add('title');
// title.innerText = 'Products List';
// container.appendChild(title);
//
// let titleCartList = document.createElement('div');
// titleCartList.innerText = 'Cart List';
// titleCartList.classList.add('titleCartList');
// cartList.appendChild(titleCartList);

//-------------------------------------------------------------------------------------------------------

let container = document.querySelector('.containerMain');
cartList = document.querySelector('.sidebar');

async function getData() {
    let product = await fetch('http://localhost:3001/products');
    let data = await product.json();

    for (let i = 0; i <= data.length; i++) {
        let product = createProduct(data[i]);
        product.classList.add('phone' + i);
        product.children.item(0).classList.add('img' + i);
        product.children.item(1).classList.add('name' + i);
        product.children.item(2).classList.add('price' + i);
        product.children.item(3).classList.add('button' + i);
        container.appendChild(product);
    }
}

getData();


function createProduct(product) {

    let card = document.createElement('article');

    let image = document.createElement('img');
    image.setAttribute('src', product.image);

    let price = document.createElement('p');
    price.innerText = product.price;

    let name = document.createElement('p');
    name.innerText = product.name;

    let button = document.createElement('button');
    button.innerText = 'Add to cart list';

    card.id = product.id;
    card.date = product.date;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}


let title = document.createElement('article');
title.classList.add('title');
title.innerText = 'Products List';
container.appendChild(title);

let titleCartList = document.createElement('div');
titleCartList.innerText = 'Cart List';
titleCartList.classList.add('titleCartList');
cartList.appendChild(titleCartList);
