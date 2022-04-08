function numeroPositivo(num) {
    const ehNegativo = num <0;
    const maiorQueDez = num >10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if(!ehNegativo && maiorQueDez) {
        return "Esse número é positivo!";
    }
}