'use strict';

// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let productOne = {
    title: 'Мяч',
    price: 1000,
    count: 2,
};

let productTwo = {
    title: 'Шайба',
    price: 500,
    count: 5,
};

let productTree = {
    title: 'Очки для плавания',
    price: 1500,
    count: 1,
};

let basket = {
    products: [],

    addObj(item) {
        this.products.push(item);
    },
    countBasketPrice() {
        let totalPrice = 0;

        this.products.forEach(item => {
            totalPrice += item.price * item.count;
        });

        return totalPrice;
    },
};

basket.addObj(productOne);
basket.addObj(productTwo);
basket.addObj(productTree);

console.log(basket.products); 

console.log('Стоимость корзины '+ basket.countBasketPrice());