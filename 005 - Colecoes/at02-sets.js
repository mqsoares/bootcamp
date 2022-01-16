const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function retornaArr (arr){
    const meuSet = new Set(arr)
    return [...meuSet]
}

console.log(retornaArr(array))