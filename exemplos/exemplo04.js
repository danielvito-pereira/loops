function muktiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i= 0; i< arr.length; i++) {
        multiplicados.push(arr[i]*2);//ele sempre adiciona o lemento no array e multiplica por 2
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicadoPorDois(meusNumeros);//