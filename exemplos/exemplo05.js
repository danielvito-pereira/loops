function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjetivo = {
    nome:"joão",
    idade: "20",
    cidade:"Salvador"
}

forInExempo(meuObjetivo);
/*******************************----------------------------------------------------------- */





function forInExempo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}


const meuObjetivoo = {
    nome:"joão",
    idade: "20",
    cidade:"Salvador"
}


forInExempo(meuObjetivoo);