// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports (Recebe a classe inteira)
const Calculadora = require("./test-module1");
const c1 = new Calculadora();

console.log(c1.divisao(10, 2));

// exports  (Já recebe um objeto, ou usando destructure só o método)
const c2 = require("./test-module2");
console.log(c2.divisao(10, 2));

const { soma, divisao } = require("./test-module2");
console.log(divisao(10, 2));

// caching
require("./test-module3")();
require("./test-module3")();
require("./test-module3")();
