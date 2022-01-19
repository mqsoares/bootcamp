const listaPrecos = [
    {
        nome: 'sabao em barra',
        preco: 10
    }, 
    {
        nome: 'sabao em pó',
        preco: 20
    },
    {
        nome: 'sabao liquido',
        preco: 30
    },
];

const saldoDisp = 100;

function saldoFinal(saldoDisp, lista) {
    return lista.reduce(function(prev, currrent) {
        return prev - currrent.preco;
    },saldoDisp);
}

console.log(saldoFinal(saldoDisp, listaPrecos));
