// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico
// \s - Qualquer caractere de espaõ em branco
// \D - Caracteres que não são dígitos
// \W - Caractere não-alfanumérico
// \S - Caractere que não seja espaço em branco
// .  - Qualquer caractere, menos nova linha

const cep = /\d{5}-\d{3}/;          // Precisão
const question = /Banan?a/;         // Question
const nums = /\d+/;                 // Inúmeros digitos

console.log(cep.test("99999-999"));
console.log(question.test("Banaa"));
console.log(question.test("Banana"));
console.log(nums.test("151549"));