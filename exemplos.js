/* Nesse conjunto de exemplos vamos ver o mesmo codigo escrito de 3 possiveis formas  */


function numeroPositivo(num) {
    let resultado;

    if(num<0) {
        resultado = false;

    }else{
        resuldado =true;
    }

    return resultado;
}

numeroPositivo(2);
//true

numeroPositivo(-9);
//false

/******************************************************************************************** */




function numeroPositivo(num) {
    let resultado;

    const ehNegativo=num <0;

    if(ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}


/*************************************************************************************************** */

function numeroPositivo(num) {
    const ehNegativo = num <0;

    if (ehNegativo) {
        resultado = false;
    }

    return true;
}