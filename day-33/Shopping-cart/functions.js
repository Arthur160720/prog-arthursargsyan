import {faker} from '@faker-js/faker';
import {v4 as uuidv4} from 'uuid';

export function createProduct(count) {

    function makeId() {
        return uuidv4();
    }

    let products = [];
    for (let i = 0; i < count; i++) {

        let product = {
            id: makeId(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(100, 1000, 0, '$'),
            image: faker.image.abstract(100, 100),
            date: new Date()
        }
        products.push(product);
    }
    return products;
}
