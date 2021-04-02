"use strict";
      // 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

      let i = 1,
        j;
      while (i <= 100) {
        let flag = true;
        if (i < 2) flag = false;
        for (j = 2; j <= Math.sqrt(i); j++) {
          if (i % j == 0) {
            flag = false;
          }
        }
        if (flag) console.log(i);
        i++;
      }