function comparaNum(num1,num2){
    const priFrase = criaPriFrase(num1, num2);
    const segFrase = criaSegFrase(num1, num2);

    return `${priFrase} ${segFrase}`;
}

function criaPriFrase(num1, num2){
    let saoIguais = '';

    if(num1!==num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
};

function criaSegFrase(num1, num2){
    const soma = num1 + num2;

    let res10 = 'menor';
    let res20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        res10 = 'maior';
    }

    if(compara20){
        res20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${res10} que 10 e ${res20} que 20.`;
}

console.log(comparaNum(13,23));