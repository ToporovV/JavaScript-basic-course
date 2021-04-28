'use strict';

// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const productItem = {
    render(product) {
        return `<div class="product">
                    <p><b>Наименование товара</b>: ${product.title}</p>
                    <p><b>Цена за штуку</b>: ${product.price}</p>
                    <p><b>Количество</b>: ${product.count}</p>
                    <p><b>Общая стоимость</b>: ${product.count * product.price}</p>
                </div>`;
    }
};

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
    productBlock: null,
    productItem,
    products: [],

    init() {
        this.productBlock = document.querySelector('.product-list');
        this.render();
    },

    render() {
        if (this.products.length) {
            this.products.forEach(item => {
                this.productBlock.insertAdjacentHTML('beforeend', this.productItem.render(item));
            });
            this.productBlock.insertAdjacentHTML('beforeend', `В корзине: ${this.products.length} товаров на сумму ${this.countBasketPrice()} рублей`);
        } else {
            this.productBlock.textContent = 'Корзина пуста';
        }
    },

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

basket.init();