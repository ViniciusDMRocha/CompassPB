let promise = Promise.resolve(13);
let falha = Promise.resolve(new Error("Deu ruim!"));

console.log("Código desenvolvido depois da ciração da promise");

console.log(promise);
promise.then((valor) => console.log(valor));

falha
  .then((valor) => console.log(valor))
  .catch((reason) => console.log("Falha: " + reason));

function verificaPar(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(console.log(`O número ${num} é par.`));
    } else {
      reject(new Error("O número não é par."));
    }
  });
}

verificaPar(2);
verificaPar(3);
