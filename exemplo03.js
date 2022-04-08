function getAanimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";   
        case 3:
            return "pássaro";
        default:
         return "peixe";             
    }
}


getAanimal(1)//cão
getAanimal(4)//peixe
getAanimal("1")//peixe