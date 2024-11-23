function definirDiaDaSemana(num){
    switch(num){
        case 1: 
            return  "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4: 
            return "Quarta";

        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sabado";
        default:
            return "Numero Não encontrado Tente Novamente Outro Numero"
    }
}
console.log(definirDiaDaSemana(3));
console.log(definirDiaDaSemana(7));
console.log(definirDiaDaSemana(8))
