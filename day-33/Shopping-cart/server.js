import express from 'express';
import path from 'path';
import fs from 'node:fs/promises';

let app = express();
let port = 3001;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

app.use(express.json());
app.use(express.static('Public'));

const dir = path.join(path.resolve(), 'products.json');

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'Public'});
});

// app.get('/products', (req, res) => {
//
//     class Product {
//         constructor(name, price, imageLink) {
//             this.name = name;
//             this.price = price;
//             this.imageLink = imageLink;
//         }
//     }
//
//     let products = [
//         new Product('Iphone 11', 400, 'https://source.unsplash.com/random'),
//         new Product('Iphone 11 pro', 500, 'https://source.unsplash.com/random'),
//         new Product('Iphone 11 pro max', 600, 'https://source.unsplash.com/random'),
//         new Product('Iphone 12', 700, 'https://source.unsplash.com/random'),
//         new Product('Iphone 12 pro', 800, 'https://source.unsplash.com/random'),
//         new Product('Iphone 12 pro max', 900, 'https://source.unsplash.com/random'),
//         new Product('Iphone 13', 1000, 'https://source.unsplash.com/random'),
//         new Product('Iphone 13 pro', 1100, 'https://source.unsplash.com/random'),
//         new Product('Iphone 13 pro max', 1200, 'https://source.unsplash.com/random')
//     ];
//
//     res.send(products);
// });

// app.get('/carts', (req, res) => {
//     let art = fetch('https://localhost:3003/');
//     // let bore = art.json();
//     res.send(art);
// });

import {createProduct} from "./functions.js";

app.post('/products', async (req, res) => {

    try {
        let data = createProduct(9);
        await fs.writeFile(dir, JSON.stringify(data));
        res.json(data);
    } catch (err) {
        res.json(err);
    }

});

app.get('/products', async (req, res) => {

    let data = await fs.readFile(dir);
    res.json(JSON.parse(data));

});

