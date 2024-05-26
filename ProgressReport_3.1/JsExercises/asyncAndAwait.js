async function somar(a, b) {
  return a + b;
}

somar(4, 5).then((valor) => console.log(valor));

function somaComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 3000);
  });
}

async function realizaSoma(a, b, c) {
  let x = somaComDelay(a, b);

  return (await x) + c;
}

realizaSoma(1, 2, 3).then((valor) => console.log(valor));
