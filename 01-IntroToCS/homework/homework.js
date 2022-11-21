'use strict';

function BinarioADecimal(num) {
   let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum += +num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;


}

function DecimalABinario(num) {
   let resultado = [];
   while (num > 0) {
       resultado.unshift(num % 2);
       num = Math.floor(num / 2);
   }

   return resultado.join('');


}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
