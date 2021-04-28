'use strict';

// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function getValidNumber (number) {
    if (Number.isInteger(number) && number >= 0 && number <= 999) {
        return number;
    };
};

function getConvertNumber (number) {
    if (getValidNumber(number) || number === 0) {
        var obj = {
            'единицы': number % 10,
            'десятки': Math.floor(number / 10) % 10,
            'сотни':  Math.floor(number / 100),
        }; 
        return obj; 
    } else {
        console.log ('Введите число от 0 до 999');
    } return {};
   };

console.log(getConvertNumber(857));