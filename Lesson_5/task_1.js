// Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

'use strict';

function chess() {
    const rowsCols = {
        rows: 10,
        cols: 10,
    };

    const chessBoard = document.getElementById('game');

    for (let i = 0; i < rowsCols.rows; i++) {
        const tr = document.createElement('tr');
        chessBoard.appendChild(tr);
        for (let j = 0; j < rowsCols.cols; j++) {
            const td = document.createElement('td');
            if (j % 2 === 0 && i % 2 === 0) {
                td.style.backgroundColor = "white";
            } else {
                td.style.backgroundColor = "black";
            };
            tr.appendChild(td);
            if (j % 2 !== 0 && i % 2 !== 0) {
                document.getElementById('game');
                td.style.backgroundColor = "white";
            };
        };
    };

    const chrs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 1; i < rowsCols.rows - 1; i++) {
        let ftd = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[0];
        let ftr = document.getElementsByTagName('tr')[0].getElementsByTagName('td')[i];
        let number = document.createTextNode(rowsCols.rows - (i + 1));
        let chrsu = document.createTextNode(chrs[i - 1]);
        ftd.style.backgroundColor = "white";
        ftr.style.backgroundColor = "white";

        ftd.appendChild(number);
        ftr.appendChild(chrsu);
    };

    for (let i = 1; i < rowsCols.rows - 1; i++) {
        let ltd = document.getElementsByTagName('tr')[i].getElementsByTagName('td')[9];
        let ltr = document.getElementsByTagName('tr')[9].getElementsByTagName('td')[i];
        let number = document.createTextNode(rowsCols.rows - (i + 1));
        let chrsd = document.createTextNode(chrs[i - 1]);
        ltd.style.backgroundColor = "white";
        ltr.style.backgroundColor = "white";

        ltd.appendChild(number);
        ltr.appendChild(chrsd);
    };

    const cornerRight = document.getElementsByTagName('tr')[0].getElementsByTagName('td')[9];
    cornerRight.style.backgroundColor = 'white';

    const cornerLeft = document.getElementsByTagName('tr')[9].getElementsByTagName('td')[0];
    cornerLeft.style.backgroundColor = 'white';

};


chess();