const arrayNotas = [80, 80, 70]
console.log(definirNota(arrayNotas));

function definirNota(notas) {
    const media = calcularMedia(notas);
    if(media < 60) return 'Nota: F';
    if(media < 70) return 'Nota: D';
    if(media < 80) return 'Nota: C';
    if(media < 90) return 'Nota: B';
    return 'Nota: A';
}

function calcularMedia(array) {
    let total = 0;
    
    for(let valor of array){
        total += valor;
    }

    return total / array.length;
}
    