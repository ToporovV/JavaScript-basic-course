//1. Задать температуру в градусах по Цельсию.Вывести в alert соответствующую температуру в градусах по Фаренгейту.Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf– температура по Фаренгейту, Tc– температура по Цельсию

var cels = +prompt("Введите температуру в градусах Цельсия: ");

var far = (9 / 5) * cels + 32;

alert("Соответствующая температура по Фарингейту" + " " + far + " " + "град.")

//2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).

var name = "Василий";
let admin;
admin = name;
alert(admin);

//3. *Чему будет равно JS-выражение 1000 + "108"

alert(1000 + "108")

//Выражение будет равно 1000108

// 4. *Самостоятельно разобраться с атрибутами тега script (async и defer)

// Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится. Если скриптов несколько они выполняются согласно порядку в документе.

// Атрибут async означает, что скрипт абсолютно независим, а если их несколько, то они могут выполнятся в любом порядке.