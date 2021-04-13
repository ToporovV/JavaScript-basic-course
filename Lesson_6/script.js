"use strict";

const catalog = {
    catalogProductBlock: null,
    basket: null,
    productsCatalog: [{
            id: 1521,
            title: 'Мяч',
            price: 1000,
        },
        {
            id: 1632,
            title: 'Шайба',
            price: 500,
        },
        {
            id: 7513,
            title: 'Очки для плавания',
            price: 1500,
        }
    ],


    init(catalog, basket) {
        this.catalogBlock = document.querySelector(`.${catalog}`);
        this.basket = basket;
        this.render();
        this.addEvent();
    },


    render() {
        if (this.catalogListLength() > 0) {
            this.renderCatalog();
        } else {
            this.renderEmptyCatalog();
        }
    },

    catalogListLength() {
        return this.productsCatalog.length;
    },

    renderCatalog() {
        this.catalogBlock.innerHTML = '';
        this.productsCatalog.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.catalogItem(item));
        });
    },

    catalogItem(item) {
        return `<div class="product">
                <h3>${item.title}</h3>
                <p>${item.price} руб.</p>
                <button
                    class="product__add-basket"
                    data-id="${item.id}"
                >Купить</button>
            </div>`;
    },


    addEvent() {
        this.catalogBlock.addEventListener('click', event => this.addBasket(event));
    },


    addBasket(event) {
        if (!event.target.classList.contains('product__add-basket')) return;
        const idProduct = +event.target.dataset.id;
        const productAdd = this.productsCatalog.find((product) => product.id === idProduct);
        this.basket.addBasket(productAdd);
    },


    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог пуст';
    },
};


const basket = {
    basketBlock: null,
    clearBasketButton: null,
    products: [],


    init(basket, clearButton) {
        this.basketBlock = document.querySelector(`.${basket}`);
        this.clearBasketButton = document.querySelector(`.${clearButton}`);

        this.addEvent();
        this.render();
    },


    addEvent() {
        this.clearBasketButton.addEventListener('click', this.clearBasket.bind(this));
    },


    clearBasket() {
        this.products = [];
        this.render();
    },


    render() {
        if (this.basketProductsLength() > 0) {
            this.renderBasket();
        } else {
            this.renderEmptyBasket();
        }
    },

    basketProductsLength() {
        return this.products.length;
    },

    renderBasket() {
        this.basketBlock.innerHTML = '';
        this.products.forEach(item => {
            this.basketBlock.insertAdjacentHTML('beforeend', this.basketItem(item));
        });
        this.basketBlock.insertAdjacentHTML('beforeend', `В корзине: ${this.products.length} товаров на общую сумму ${this.countBasketPrice()} рублей`);
    },

    countBasketPrice() {
        let totalPrice = 0;

        this.products.forEach(item => {
            totalPrice += item.price * item.count;
        });

        return totalPrice;
    },

    renderEmptyBasket() {
        this.basketBlock.innerHTML = '';
        this.basketBlock.textContent = 'Корзина пуста.';
    },


    addBasket(product) {
        const findInBasket = this.products.find(({ id }) => product.id === id);
        if (findInBasket) {
            findInBasket.count++;
        } else {
            this.products.push(Object.assign({ count: 1 }, product));
        }
        this.render();
    },


    basketItem(item) {
        return `<div>
                <h3>${item.title}</h3>
                <p>${item.price} руб.</p>
                <p>${item.count} шт.</p>
            </div>`;
    },
};


catalog.init('catalog', basket);
basket.init('basket', 'clear-basket');