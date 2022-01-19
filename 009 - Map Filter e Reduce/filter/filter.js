function numPares(arr){
    return arr.filter(function(i){
        return i % 2 === 0;
    });
}

const array = [1, 2, 3, 4];
console.log(numPares(array));